"use client";

import { TOTAL_BOOK_PAGES } from "@/data/book";
import {
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

interface GhibliContextValue {
	savedPage: number;
	setSavedPage: (page: number) => void;
	showToast: (message: string) => void;
	copyText: (text: string, successMessage: string) => void;
	toastMessage: string;
	toastVisible: boolean;
}

const GhibliContext = createContext<GhibliContextValue | null>(null);

export function GhibliProvider({ children }: { children: ReactNode }) {
	const [savedPage, setSavedPageState] = useState(0);
	const [toastMessage, setToastMessage] = useState("");
	const [toastVisible, setToastVisible] = useState(false);
	const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const raw = localStorage.getItem("pagina");
		if (raw !== null) {
			const parsed = Number(raw);
			if (Number.isFinite(parsed) && parsed >= 0 && parsed <= TOTAL_BOOK_PAGES) {
				setSavedPageState(Math.round(parsed));
			}
		}
	}, []);

	const setSavedPage = useCallback((page: number) => {
		const clamped = Math.max(0, Math.min(TOTAL_BOOK_PAGES, Math.round(page)));
		setSavedPageState(clamped);
		localStorage.setItem("pagina", String(clamped));
	}, []);

	const showToast = useCallback((message: string) => {
		setToastMessage(message);
		setToastVisible(true);
		if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
		toastTimerRef.current = setTimeout(() => {
			setToastVisible(false);
		}, 2400);
	}, []);

	const copyText = useCallback(
		(text: string, successMessage: string) => {
			navigator.clipboard?.writeText(text).catch(() => {});
			showToast(successMessage);
		},
		[showToast],
	);

	return (
		<GhibliContext.Provider
			value={{
				savedPage,
				setSavedPage,
				showToast,
				copyText,
				toastMessage,
				toastVisible,
			}}
		>
			{children}
		</GhibliContext.Provider>
	);
}

export function useGhibli() {
	const ctx = useContext(GhibliContext);
	if (!ctx) {
		throw new Error("useGhibli must be used within a GhibliProvider");
	}
	return ctx;
}

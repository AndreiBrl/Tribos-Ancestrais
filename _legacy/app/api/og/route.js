import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Tribos Ancestrais';
  const description = searchParams.get('description') || 'Escrito por Andrei Barbuto';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundColor: '#000',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 48,
          fontFamily: 'sans-serif',
          flexDirection: 'column',
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    ),
    {
      width: 800,
      height: 600,
    }
  );
}

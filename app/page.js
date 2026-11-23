import { Suspense } from 'react';
import ConfettiEffect from './confetti-effect';

export const revalidate = 60;

async function getTotalPublishedContents() {
  try {
    const response = await fetch(
      'https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new',
      {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(5000),
      },
    );

    if (!response.ok) {
      return null;
    }

    const totalHeader = response.headers.get('x-pagination-total-rows');
    const total = Number.parseInt(totalHeader, 10);

    return Number.isNaN(total) ? null : total;
  } catch {
    return null;
  }
}

async function TotalPublishedContents() {
  const totalContents = await getTotalPublishedContents();

  return totalContents !== null
    ? totalContents.toLocaleString('pt-BR')
    : 'Indisponível no momento';
}

export default function HomePage() {
  return (
    <main className="container">
      <ConfettiEffect />
      <h1>Em Construção</h1>
      <p className="description">
        Estamos neste momento reconstruindo o TabNews, um lugar na internet para
        quem trabalhar com TI.
      </p>
      <p className="stats">
        Total de conteúdos publicados no TabNews:{' '}
        <strong>
          <Suspense fallback="Carregando...">
            <TotalPublishedContents />
          </Suspense>
        </strong>
      </p>
      <a
        className="official-link"
        href="https://www.tabnews.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar o site oficial do TabNews
      </a>
    </main>
  );
}

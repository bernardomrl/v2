import Link from 'next/link';

import { Section } from '@/components/utils';

export default function NotFound() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center space-y-8 p-8">
        <h3 className="font-inter text-base font-medium leading-none">404</h3>
        <h1 className="mt-2 font-poppins text-3xl font-semibold tracking-tight">
          Página não encontrada
        </h1>
        <h4 className="mt-6 font-inter text-base font-light leading-none">
          Desculpe, não conseguimos encontrar a página que você procura.
        </h4>
        <div className="mt-10 flex items-center justify-center space-x-4">
          <Link
            href="/"
            className="normal-cas btn btn-primary btn-sm rounded-md font-inter text-sm font-semibold"
          >
            Página inicial
          </Link>
          <Link
            href="mailto:bernardomrl@icloud.com"
            className="btn btn-ghost btn-sm rounded-md text-sm font-semibold normal-case"
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </Section>
  );
}

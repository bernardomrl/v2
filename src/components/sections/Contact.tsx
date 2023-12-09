import Link from 'next/link';

import { Section } from '@/components/utils';

export default function Contact() {
  return (
    <Section id="contact" title="Entre em contato" subtitle="Converse comigo">
      <div className="flex max-w-lg flex-col items-center justify-center p-4">
        <h3 className="text-md text-center font-inter font-light tracking-tight">
          Buscando oportunidades de trabalho e sedento por novos aprendizados.
          Estou aberto a colaborações desafiadoras que ampliem meus horizontes
          profissionais. Se você tem algo para oferecer ou compartilhar, estou
          pronto para ouvir. Vamos conectar ideias?
        </h3>
      </div>
      <Link
        href="mailto:bernardomrl@icloud.com"
        className="text-md btn btn-md rounded-md font-inter font-medium normal-case leading-none"
      >
        Diga Olá
      </Link>
    </Section>
  );
}

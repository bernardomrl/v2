import Link from 'next/link';

import { Section } from '@/components/utils';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

const links = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bernardoamrl/'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/bernardomrl'
  }
];

export default function Hero(): JSX.Element {
  return (
    <Section id="hero">
      <div className="flex flex-col justify-center p-4">
        <h3 className="xs:text-xs font-inter font-extralight leading-none md:text-sm">
          Olá, me chamo
        </h3>
        <h1 className="font-poppins text-4xl font-semibold leading-none">
          Bernardo Meirelles.
        </h1>
        <div className="mt-1 flex w-full items-center justify-between">
          <h3 className="font-inter text-xs font-light leading-none">
            Desenvolvedor Web FullStack
          </h3>
          <div className="flex items-center justify-between space-x-2">
            {links.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                target="_blank"
                className="link-hover link font-inter text-xs font-light leading-none"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link
        href="#about"
        className="group absolute bottom-20 flex w-auto flex-col items-center justify-center space-y-2 transition-transform md:bottom-4"
      >
        <h3 className="font-inter text-xs font-light duration-300 group-hover:translate-y-1">
          Saiba Mais
        </h3>
        <ChevronDownIcon className="h-4 w-4 duration-700 group-hover:translate-y-1" />
      </Link>
    </Section>
  );
}

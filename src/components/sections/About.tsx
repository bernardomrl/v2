import { CodeMockup, Section } from '@/components/utils';

const planguages = [
  'Javascript',
  'Typescript',
  'React.js',
  'Next.js',
  'Tailwind',
  'Express.js'
];

const texts = [
  {
    text: 'No ano de 2020, tive um insight interessante: decidi personalizar o visual do meu Spotify mexendo nos estilos CSS pelo Spicetify. Esse mergulho nos temas me fez mergulhar de cabeça no universo do desenvolvimento web e na criação de sites. Desde então, desenvolvi uma verdadeira paixão pela tecnologia e pela sua incrível capacidade de tornar nossas vidas mais fáceis e conectadas.'
  },
  {
    text: 'Hoje, a cada dia, me vejo imerso nesse mundo, sempre em busca de novos conhecimentos que me fascinem. Aprender algo novo e que me empolgue se tornou parte essencial da minha jornada. Estou constantemente à procura de desafios que me permitam expandir meus horizontes e evoluir como desenvolvedor.'
  }
];

export default function About(): JSX.Element {
  return (
    <Section id="about" title="Sobre Mim" subtitle="Introdução">
      <div className="flex flex-col items-center justify-between space-x-0 space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
        <div className="flex max-w-sm flex-col justify-center space-y-2 p-2 sm:max-w-lg">
          {texts.map((item, index) => (
            <h3
              key={index}
              className="text-center font-inter text-sm font-light sm:text-left"
            >
              {item.text}
            </h3>
          ))}
          <div className="flex flex-col items-center justify-center space-y-4 sm:hidden">
            <h3 className="text-center font-inter text-sm font-light sm:text-left">
              Algumas das tecnologias que eu domino:
            </h3>
            <ul className="grid grid-cols-2 grid-rows-3 gap-1">
              {planguages.map((item, index) => (
                <li key={index} className="font-inter text-xs font-light">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <CodeMockup />
      </div>
    </Section>
  );
}

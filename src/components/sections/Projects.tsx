import Link from 'next/link';

import { Section } from '@/components/utils';

const projects = [
  {
    name: 'Codeally',
    desc: 'Codeally é uma aplicação concebida como parte de um Trabalho de Conclusão de Curso (TCC) no âmbito do programa de Projeto de Inovação Tecnológica (P.I.T) do Cotemig. Seu principal objetivo é facilitar a conexão entre programadores freelancers e empresas através de um intuitivo algoritmo de busca. ',
    link: 'https://github.com/bernardomrl/codeally',
    techs: ['Next.js', 'Tailwindcss', 'TypeScript', 'Express.js', 'MySQL']
  },
  {
    name: 'Next.js Project Template',
    desc: 'Um template de configuração pronto para uso no Next.js oferece uma configuração pré-definida com ESLint, Tailwind CSS, Prettier e TypeScript. Essas ferramentas facilitam o desenvolvimento de aplicativos web modernos, com foco na qualidade do código e na eficiência do processo de programação. ',
    link: 'https://github.com/bernardomrl/nextjs-template',
    techs: ['ESLint', 'Tailwind CSS', 'Prettier', 'TypeScript', 'Next.js']
  },
  {
    name: 'Realtime Chat App',
    desc: 'Um sistema de chat em tempo real por meio da integração das tecnologias React.js e Node.js, utilizando o framework Express para o backend. A aplicação foi complementada com a utilização da API fornecida pelo ChatEngine.io, possibilitando a criação de uma experiência interativa e dinâmica de comunicação em tempo real.',
    link: 'https://github.com/bernardomrl/realtime-chat',
    techs: ['React.js', 'Node.js', 'Express.js', 'ChatEngine.io']
  }
];

export default function Projects() {
  return (
    <Section id="projects" title="Projetos" subtitle="Meus trabalhos recentes">
      <div className="smax-w-lg projects flex max-w-xl flex-col items-center justify-center space-y-4 p-4">
        {projects.map((item, index) => (
          <div
            key={index}
            className="project min-h-40 flex items-center justify-between space-x-4 rounded-md p-4"
          >
            <div className="items-left flex flex-col justify-center space-y-3">
              <Link
                href={item.link}
                className="font-md link-hover link flex items-center font-poppins font-semibold leading-none"
              >
                {item.name}
              </Link>
              <h3 className="font-inter text-xs font-light">{item.desc}</h3>
              <ul className="flex flex-wrap items-center gap-2">
                {item.techs.map((tech, index) => (
                  <li
                    key={index}
                    className="badge badge-primary mt-1 rounded-full font-inter text-xs font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="https://github.com/bernardomrl"
        className="btn btn-md rounded-md font-inter text-sm font-medium normal-case"
      >
        Ver mais
      </Link>
    </Section>
  );
}

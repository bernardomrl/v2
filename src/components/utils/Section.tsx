interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
}

export default function Section({ children, title, subtitle, id }: Props) {
  return (
    <section
      id={id}
      className="flex h-screen w-screen flex-col items-center justify-center space-y-12"
    >
      {title && subtitle && (
        <div className="flex flex-col items-center justify-center space-y-1">
          <h3 className="text-md font-inter font-light leading-none">
            {subtitle}
          </h3>
          <h1 className="font-poppins text-2xl font-semibold leading-none">
            {title}
          </h1>
        </div>
      )}
      {children}
    </section>
  );
}

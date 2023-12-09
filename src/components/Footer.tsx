import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4">
      <Link
        href="https://github.com/bernardomrl/v2"
        className="mb-20 font-inter text-sm font-light lowercase opacity-25 transition-opacity duration-300 hover:opacity-50 md:mb-0"
      >
        Designed & Built by Bernardo Meirelles
      </Link>
    </footer>
  );
}

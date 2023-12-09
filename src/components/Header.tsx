'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { ScrollUpButton } from '@/components/utils';

import {
  IdentificationIcon,
  WalletIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Sobre', href: '#about', icon: IdentificationIcon },
  { name: 'Projetos', href: '#projects', icon: WalletIcon },
  { name: 'Contato', href: '#contact', icon: EnvelopeIcon }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed bottom-0 z-20 flex w-full items-center justify-end bg-base-100 p-4 transition-all duration-300 md:bottom-auto md:top-0 md:bg-transparent md:px-6 ${
        scrolled ? 'shadow-[0px_-5px_8px_0px_#00000024]' : 'shadow-none'
      }`}
    >
      <div className="flex items-center space-x-2">
        {navigation.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="btn btn-ghost btn-xs rounded-md font-inter text-xs font-normal normal-case"
          >
            <span className="hidden md:inline">{item.name}</span>
            <item.icon className="h-4 w-4 md:hidden" />
          </Link>
        ))}
        <div className="divider divider-horizontal"></div>
        <Link href="/" className="btn btn-ghost btn-xs rounded-md">
          <ArrowDownTrayIcon className="h-4 w-4" />
        </Link>
      </div>
      <ScrollUpButton />
    </header>
  );
}

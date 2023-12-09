'use client';

import { useState, useEffect } from 'react';

import '@/styles/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setTheme(prefersDarkMode ? 'black' : 'wireframe');
  }, []);

  return (
    <html lang="pt-br" data-theme={theme}>
      <head>
        <title>Bernardo Meirelles</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

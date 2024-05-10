import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

import { AppConfig } from '../utils/AppConfig';

type IFooterCopyrightProps = {
  logo: ReactNode;
};

const FooterCopyright = ({ logo }: IFooterCopyrightProps) => (
  <div className="flex h-[100px] w-full flex-col items-center justify-center bg-orange-500 text-center text-white">
    <div className="flex items-center justify-center">
      <Link href="/">{logo}</Link>
      <div className="ml-24">
        © {new Date().getFullYear()} {AppConfig.title}. Todos os direitos
        reservados. Feito por{' '}
        <a
          href="https://www.linkedin.com/in/mauriciomdemoura/"
          className="text-white hover:underline"
        >
          Mauricio de Moura
        </a>
      </div>
    </div>
    <div className="mt-2">
      <a href="/politica-de-privacidade" className="hover:underline">
        Política de Privacidade
      </a>{' '}
      <a href="/termos-de-uso" className="ml-2 hover:underline">
        Termos de Uso
      </a>{' '}
      <a href="/lgpd" className="ml-2 hover:underline">
        LGPD
      </a>
    </div>
  </div>
);

export { FooterCopyright };

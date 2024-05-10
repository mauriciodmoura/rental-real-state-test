/* eslint-disable import/no-extraneous-dependencies */
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdExpandMore } from 'react-icons/md';

type IHeaderProps = {
  logo: ReactNode;
  children?: ReactNode;
};

const Header = (props: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-20 bg-white shadow">
      <div className="mx-auto -mt-10 flex h-full max-w-screen-xl flex-wrap items-center justify-between px-4">
        <div>
          <Link href="/">{props.logo}</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <nav
          className={`flex-1 ${isOpen ? 'block' : 'hidden'} text-right md:block`}
        >
          <div className="flex size-full items-center justify-between">
            <ul className="ml-8 flex flex-col items-center space-x-8 space-y-4 text-sm font-light text-gray-800 md:flex-row md:space-x-6 md:space-y-0">
              <li className="text-gray-700 hover:text-orange-700">
                <Link href="/">Imobiliárias</Link>
              </li>
              <li className="text-gray-700 hover:text-orange-700">
                <Link href="/">Quero me Associar</Link>
              </li>
              <li className="flex items-center text-gray-700 hover:text-orange-700">
                <Link href="/" className="flex items-center">
                  <span className="flex items-center">
                    Sobre
                    <MdExpandMore className="ml-1" />
                  </span>
                </Link>
              </li>
              <li className="text-gray-700 hover:text-orange-700">
                <Link href="/">Blog</Link>
              </li>
            </ul>
            <ul className="flex flex-col items-center space-x-0 space-y-4 text-sm font-light text-gray-800 md:flex-row md:space-x-4 md:space-y-0">
              <li className="rounded-full border border-purple-600 px-4 py-1 text-purple-600 transition-colors hover:bg-purple-50">
                <Link href="/">Anunciar Imóvel</Link>
              </li>
              <li className="text-gray-700 hover:text-orange-700">
                <Link href="/">Entrar</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { Header };

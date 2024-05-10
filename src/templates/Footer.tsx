import Link from 'next/link';

import { FooterCopyright } from '../footer/FooterCopyright';
import { Section } from '../layout/Section';
import { LogoWhite } from './LogoWhite';

const Footer = () => (
  <div className="bg-gray-200">
    <Section yPadding="py-8">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-800">A Netimóveis</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link href="/como-funciona">Como funciona</Link>
            </li>
            <li>
              <Link href="/parceiro">Seja um parceiro</Link>
            </li>
            <li>
              <Link href="/associar">Quero me associar</Link>
            </li>
            <li>
              <Link href="/imprensa">Assessoria de imprensa</Link>
            </li>
            <li>
              <Link href="/solucoes-corporativas">Soluções Corporativas</Link>
            </li>
            <li>
              <Link href="/covid-19">Covid-19</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800">Recursos</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/comprar">Comprar</Link>
            </li>
            <li>
              <Link href="/alugar">Alugar</Link>
            </li>
            <li>
              <Link href="/lancamentos">Lançamentos</Link>
            </li>
            <li>
              <Link href="/anunciar-imovel">Anunciar Imóvel</Link>
            </li>
            <li>
              <Link href="/simular-financiamento">Simular Financiamento</Link>
            </li>
            <li>
              <Link href="/imobiliarias">Imobiliárias</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800">Contato</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/fale-conosco">Fale Conosco</Link>
            </li>
            <li>
              <Link href="/faq">Perguntas Frequentes</Link>
            </li>
            <li>
              <Link href="/suporte">Suporte</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800">
            Nossos Aplicativos
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/app-local-netimoveis">Loc Fácil Netimóveis</Link>
            </li>
            <li>
              <Link href="/app-pro-netimoveis">Pro Imóvel Netimóveis</Link>
            </li>
            <div className="mt-2 flex">
              <a href="https://www.apple.com/ios/app-store/">
                <img src="/assets/images/applestore.png" alt="App Store" />
              </a>
              <a href="https://play.google.com/store">
                <img src="/assets/images/googleplay.png" alt="Google Play" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </Section>
    <FooterCopyright logo={<LogoWhite xl />} />
  </div>
);

export { Footer };

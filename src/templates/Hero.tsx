import { Search } from '@/search/Search';

import { Background } from '../background/Background';
import { Header } from '../header/Header';
import { HeroText } from '../hero/HeroText';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <Background
    color="bg-white"
    imageUrl="/assets/images/img1.png"
    className="bg-cover"
    backgroundSize="1478px 517px"
    backgroundPosition="50% 90%"
  >
    <Section yPadding="">
      <Header logo={<Logo xl />}></Header>
    </Section>
    <Section yPadding="pt-14 pb-52">
      <HeroText
        title={
          <>
            <span className="text-gray-100">Vende. Aluga. Conecta</span>
          </>
        }
      />
      <Search />
    </Section>
  </Background>
);

export { Hero };

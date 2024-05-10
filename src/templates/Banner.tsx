import Link from 'next/link';

import { Banner } from '../banner/Banner';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

const PortugalBanner = () => (
  <Section>
    <Banner
      title="Encontre a oportunidade<br/>Perfeita em Portugal"
      imageUrl="/assets/images/portugal.png"
      backgroundSize="1248px 170px"
      button={
        <Link href="/">
          <Button>Ver imóveis em Portugal</Button>
        </Link>
      }
    />
  </Section>
);

export { PortugalBanner };

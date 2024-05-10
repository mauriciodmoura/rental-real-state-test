import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { PortugalBanner } from './Banner';
import { Card } from './Card';
import { Carousel } from './Carousel';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Main = () => (
  <div className="flex min-h-screen flex-col">
    <div className="flex-1">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Carousel />
      <Card />
      <PortugalBanner />
    </div>
    <Footer />
  </div>
);

export { Main };

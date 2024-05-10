import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import AdvertiseBanner from './AdvertiseBanner';
import { PortugalBanner } from './Banner';
import { Card } from './Card';
import { CardImage } from './CardImage';
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
      <CardImage />
      <AdvertiseBanner />
      <PortugalBanner />
    </div>
    <Footer />
  </div>
);

export { Main };

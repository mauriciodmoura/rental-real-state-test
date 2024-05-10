import Card from '../card/Card';
import FeatureCard from '../card/FeatureCard';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { PortugalBanner } from './Banner';
import { Carousel } from './Carousel';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Main = () => (
  <div className="flex min-h-screen flex-col">
    <div className="flex-1">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Carousel />
      <PortugalBanner />
      <FeatureCard />
      <Card />
    </div>
    <Footer />
  </div>
);

export { Main };

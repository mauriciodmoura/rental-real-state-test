import { Background } from '../background/Background';
import FeatureCard from '../card/FeatureCard';

const Card = () => (
  <Background color="bg-gray-100">
    <div className="flex items-center justify-between p-8">
      <div className="max-w-md">
        <h1 className="mb-4 font-sans text-xl font-bold">
          Encontre um lugar que é a sua cara
        </h1>
        <p className="text-gray-600">
          A Netimóveis te oferece uma experiência ágil e segura na hora de
          comprar ou alugar seu imóvel. Seja de maneira digital ou física,
          fazemos a diferença neste momento tão importante que é decidir um lar.
        </p>
      </div>
      <FeatureCard />
    </div>
  </Background>
);

export { Card };

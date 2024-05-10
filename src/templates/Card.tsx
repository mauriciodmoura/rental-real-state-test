import { Background } from '../background/Background';
import FeatureCard from '../card/FeatureCard';

const Card = () => (
  <Background color="bg-gray-100">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-2 py-12">
      <div className="mr-48 min-w-0 flex-1">
        <h1 className="mb-4 mr-36 font-sans text-4xl font-medium">
          Encontre um lugar que é a sua cara
        </h1>
        <p className="text-gray-600">
          A Netimóveis te oferece uma experiência ágil e segura na hora de
          comprar ou alugar seu imóvel. Seja de maneira digital ou física,
          fazemos a diferença neste momento tão importante que é decidir um lar.
        </p>
      </div>
      <div className="flex-initial">
        <FeatureCard />
      </div>
    </div>
  </Background>
);

export { Card };

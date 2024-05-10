import { Background } from '../background/Background';
import Card from '../card/Card';

const CardImage = () => (
  <Background
    imageUrl="/assets/images/img2.png"
    className="bg-cover"
    backgroundSize="1478px 517px"
    backgroundPosition="50% 90%"
  >
    <div className="mx-auto flex max-w-5xl items-center justify-between px-2 py-12">
      <div className="flex-initial">
        <Card />
      </div>
      <div className="mr-48 min-w-0 flex-1"></div>
    </div>
  </Background>
);

export { CardImage };

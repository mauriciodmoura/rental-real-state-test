import { type ReactNode, useState } from 'react';

type IHeroTextProps = {
  title: ReactNode;
  description?: string;
};

const HeroText = (props: IHeroTextProps) => {
  const [selected, setSelected] = useState('alugar');

  return (
    <header className="text-center">
      <h1 className="whitespace-pre-line text-3xl font-bold leading-hero">
        {props.title}
      </h1>
      <div className="mb-2 mt-4 text-lg">{props.description}</div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className={`px-4 py-1 text-white ${selected === 'alugar' ? 'border-b-2 border-orange-500 text-white' : ''}`}
          onClick={() => setSelected('alugar')}
        >
          Alugar
        </button>
        <button
          className={`px-4 py-1 font-semibold text-white ${selected === 'comprar' ? 'border-b-2 border-orange-500 text-white' : ''}`}
          onClick={() => setSelected('comprar')}
        >
          Comprar
        </button>
      </div>
    </header>
  );
};

export { HeroText };

import Link from 'next/link';
import React, { useState } from 'react';

import frames from '../../assets/frame2.json';

interface IItem {
  [key: string]: boolean;
}

interface ICard {
  title: string;
  description: string;
}

const FeatureCard = () => {
  const [selected, setSelected] = useState<IItem>({
    [frames[0]?.name || '']: true,
  });

  const toggleSelection = (itemName: string) => {
    const newSelection = frames.reduce(
      (acc, frame) => ({
        ...acc,
        [frame.name]: frame.name === itemName,
      }),
      {},
    );
    setSelected(newSelection);
  };

  const getSelectedContent = (): ICard => {
    const activeItem = frames.find((frame) => selected[frame.name]);
    return activeItem
      ? { title: activeItem.title, description: activeItem.description }
      : { title: '', description: '' };
  };

  const { title, description } = getSelectedContent();

  return (
    <div className="relative max-w-sm overflow-hidden rounded-xl bg-white p-6 text-center shadow-lg">
      <div className="mb-4 flex items-center justify-around">
        {frames.map((frame) => (
          <div
            key={frame.name}
            className="flex cursor-pointer flex-col items-center"
            onClick={() => toggleSelection(frame.name)}
          >
            <img src={frame.svgPath} alt={frame.name} className="size-6" />
            <div className="mt-2 text-sm text-gray-500">{frame.name}</div>
            <div
              className={`mt-4 h-1 w-full ${selected[frame.name] ? 'bg-orange-500' : 'bg-transparent'}`}
            ></div>
          </div>
        ))}
      </div>
      <hr className="my-4 w-full border-t" />
      {title && (
        <>
          <h2 className="mb-4 p-2 text-left text-2xl font-bold">{title}</h2>
          <p className="mb-8 p-2 text-left text-sm text-gray-700">
            {description}
          </p>
        </>
      )}
      <div className="mb-4 flex justify-start">
        <button className="rounded-xl border border-purple-700 bg-white px-4 py-2 font-semibold text-purple-700 hover:bg-purple-50">
          <Link href="/">Ver imóveis para Alugar</Link>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;

import type { ReactNode } from 'react';
import React from 'react';

type IBannerProps = {
  title: string;
  button: ReactNode;
  imageUrl?: string;
  backgroundSize?: string;
};

const Banner = ({
  title,
  button,
  imageUrl,
  backgroundSize = 'cover',
}: IBannerProps) => (
  <div
    className="relative rounded-xl text-center sm:text-left"
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black to-transparent opacity-50"></div>
    <div className="relative flex flex-col items-center justify-between p-4 sm:flex-row sm:p-12">
      <div className="z-10 text-2xl font-semibold text-white shadow-md">
        <div dangerouslySetInnerHTML={{ __html: title }}></div>
      </div>
      <div className="whitespace-no-wrap z-10 mt-3 sm:ml-2 sm:mt-0">
        {button}
      </div>
    </div>
  </div>
);

export { Banner };

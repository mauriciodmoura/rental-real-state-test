import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  imageUrl?: string;
  className?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={`${props.color} ${props.className} size-full bg-scroll bg-center bg-no-repeat`}
    style={{
      backgroundImage: `url(${props.imageUrl})`,
      backgroundSize: props.backgroundSize,
      backgroundPosition: props.backgroundPosition || 'center',
    }}
  >
    {props.children}
  </div>
);

export { Background };

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-lg text-center;
          }

          .btn-base {
            @apply text-sm font-semibold py-3 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-primary-700 bg-white;
          }

          .btn-primary:hover {
            @apply bg-primary-100;
          }
        `}
      </style>
    </div>
  );
};

export { Button };

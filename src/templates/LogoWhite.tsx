type ILogoProps = {
  xl?: boolean;
};

const LogoWhite = (props: ILogoProps) => {
  const size = props.xl ? '169' : '42';
  const logoUrl = '/assets/images/logo2.svg';

  return (
    <span className="inline-flex items-center">
      <img
        src={logoUrl}
        alt="Logo"
        className="mr-1"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </span>
  );
};

export { LogoWhite };

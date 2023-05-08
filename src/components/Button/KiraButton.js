const KiraButton = ({
  variant, // default it will be contained button. Accept a string type
  children,
  className,
  ...rest
}) => {
  let bg;
  let text;
  let borderColor;
  let backgroundHover;
  switch (variant) {
    case "contained":
      bg = "kira-primary";
      text = "inherit";
      borderColor = "transparent";
      backgroundHover = "hover:bg-kira-primary/80";
      break;
    case "outlined":
      bg = "transparent";
      text = "inherit";
      borderColor = "white";
      backgroundHover = "hover:bg-white/10";
      break;
    default:
      bg = "kira-primary";
      text = "inherit";
      borderColor = "transparent";
      backgroundHover = "hover:bg-kira-primary/80";
      break;
  }
  return (
    <button
      {...rest}
      className={`min-h-[45px] px-4 py-2 flex justify-center items-center border rounded-[4.5px] text-base focus-visible:outline focus-visible:outline-2 bg-${bg} text-${text} border-${borderColor} ${backgroundHover} focus-visible:outline-offset-2 focus-visible:outline-${borderColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default KiraButton;

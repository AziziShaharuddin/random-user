const KiraTextField = ({
  type = "search",
  className,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  return (
    <div
      className={`relative border focus-within:border-kira-primary flex items-center rounded-[4.5px] dark:bg-kira-grayLine bg-kira-white ${className}`}
    >
      {startAdornment && (
        <span className={`ml-4 cursor-default `}>{startAdornment}</span>
      )}
      <input
        {...rest}
        type={type}
        className="rounded-[4.5px] focus:outline-none bg-transparent placeholder:text-kira-grayText p-4"
      />
      {endAdornment && (
        <span className="mr-4 cursor-default ">{endAdornment}</span>
      )}
    </div>
  );
};

export default KiraTextField;

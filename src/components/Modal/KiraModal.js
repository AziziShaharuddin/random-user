const KiraModal = ({
  children,
  className,
  open, // state of modal
  onClose, // a function to be used outside of the modal, to enable user to close the modal
}) => {
  return (
    <div
      onClick={onClose || null}
      className={`fixed top-0 left-0 z-50 w-full h-screen bg-zinc-800/80 ${!open && "hidden"
        }`}
    >
      <div
        className={`absolute rounded-[8px] left-1/2 top-1/2 max-w-[90vw] w-[90vw] md:w-auto h-auto flex -translate-x-1/2 -translate-y-1/2 bg-kira-white ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default KiraModal;

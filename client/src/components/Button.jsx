function Button({ color, children }) {
  const colorVariants = {
    slate: "bg-slate-50",
    rose: "bg-rose-500",
    voilet: "bg-voilet-500",
  };

  return (
    <button
      className={`!${colorVariants[color]} rounded-3xl h-12 w-[73px] text-[15px] text-black`}
    >
      {children}
    </button>
  );
}

export default Button;

/**
 * Renders a button element with a specific background color.
 *
 * @param {string} color - The color variant of the button. Can be one of "slate", "rose", or "voilet".
 * @param {ReactNode} children - The content of the button.
 * @returns {ReactElement} - A button element with the specified color and content.
 */
function Button({
  color,
  children,
}: {
  color: "slate" | "rose" | "voilet";
  children: React.ReactNode;
}): React.ReactElement {
  const colorVariants = {
    slate: "bg-slate-50",
    rose: "bg-rose-500",
    voilet: "bg-voilet-500",
  };

  const buttonClassName = `!${colorVariants[color]} rounded-3xl h-12 w-[73px] text-[15px] text-black`;

  return <button className={buttonClassName}>{children}</button>;
}

export default Button;

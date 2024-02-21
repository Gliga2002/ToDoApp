function Button({ children, isClassic, ...props }) {
  let cssClasses = "py-2 rounded-md";

  if (!isClassic) {
    cssClasses +=
      " px-4 text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
  } else {
    cssClasses += " px-6  bg-stone-800 text-stone-50 hover:bg-stone-950";
  }
  return <button {...props} className={cssClasses}>{children}</button>;
}

export default Button;

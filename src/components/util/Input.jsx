import { forwardRef } from "react";



const Input = forwardRef(function Input({ title, TextInput, ...props }, ref) {
  let cssClasses =
    "w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 px-2 py-1";

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="uppercase text-stone-500 font-bold text-sm">
        {title}
      </label>
      <TextInput ref={ref} {...props} className={cssClasses} />
    </div>
  );
})

export default Input;

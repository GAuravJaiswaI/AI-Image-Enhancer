import * as React from "react"
import { cn } from "../../lib/utils"

const Slider = React.forwardRef(({ className, value, onValueChange, min = 0, max = 100, ...props }, ref) => {
  const handleChange = (e) => {
    onValueChange?.(Number(e.target.value));
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      className={cn(
        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black",
        className
      )}
      ref={ref}
      {...props}
    />
  );
})
Slider.displayName = "Slider"

export { Slider }

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex smxx:h-5 smxx:w-11 h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border-2 data-[state=checked]:border-[#299bf4] border-[#D9D9D9]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 bg-transparent dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-3 w-3 rounded-full border-1 border-transparent bg-[#D9D9D9]/60 data-[state=checked]:bg-[#299bf4] shadow-lg ring-0 transition-transform smxx:data-[state=checked]:translate-x-6 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

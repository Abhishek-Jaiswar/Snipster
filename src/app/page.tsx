// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { Themes } from "./dashboard/_components/Themes"
// import Navbar from '@/app/_homeComponents/Navbar'
import StyledButton from "@/lib/ui/StyledButton";
import { cn } from "@/lib/utils";
import Navbar from './_homeComponents/Navbar'


export default function ButtonDemo({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = new Array(number || 10).fill(true);
  return (

    <>
      <div className="h-screen  ">
        <Navbar />
        <div className="h-[40rem] w-full bg-white dark:bg-background dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute top-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="flex w-1/2 m-auto text-center items-center justify-center flex-col">
            <div className="py-2">
              <StyledButton />
            </div>
            <h1 className="text-5xl font-extrabold text-black dark:text-white">Unlock the potential of storing your snippets with <span className="text-secondary-foreground">snipster</span></h1>
          </div>
          {meteors.map((el, idx) => (
            <span
              key={"meteor" + idx}
              className={cn(
                "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
                "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
                className
              )}
              style={{
                top: 0,
                left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
                animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
              }}
            ></span>
          ))}

        </div>
      </div>
    </>
  )
}

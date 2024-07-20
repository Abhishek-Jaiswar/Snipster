import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Themes } from "./dashboard/_components/Themes"
import Navbar from '@/app/_homeComponents/Navbar'


export default function ButtonDemo() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center md:gap-2 justify-center ">
        <h1 className=" text-2xl md:text-3xl text-center p-2 md:p-0 font-bold text-primary capitalize">Hi Folks, This is Snipster, Save your important snippets here</h1>
        <p className="text-sm font-semibold text-center p-2 md:p-0 text-zinc-400">Welcome to mock.io, Explore the dashboard by clicking the visit button</p>
        <Link href={'/dashboard'}>
          <Button>Vist Dashboard</Button>
        </Link>
        <Themes />
      </div>
    </>
  )
}

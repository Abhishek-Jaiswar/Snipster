import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function ButtonDemo() {
  return (
    <div className="h-screen flex flex-col items-center gap-2 justify-center ">
      <h1 className="text-3xl font-bold text-primary capitalize">Hi Folks, This is Mock.io the interview simulator</h1>
      <p className="text-sm font-semibold text-zinc-400">Welcome to mock.io, Explore the dashboard by clicking the visit button</p>
      <Link href={'/dashboard'}>
        <Button>Vist Dashboard</Button>
      </Link>
    </div>
  )
}

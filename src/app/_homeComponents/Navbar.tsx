"use client"

import Link from "next/link"
import {
    CodeXml,
    Home,
    LayoutDashboard,
    LineChart,
    Menu,
    Package,
    Package2,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { usePathname } from "next/navigation"
import { Themes } from "../dashboard/_components/Themes"


const Header = () => {
    const pathname = usePathname()
    return (
        <header className="flex h-14 sticky top-0 left-0 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <span className="md:hidden">
                        <Menu />
                    </span>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <div className="flex items-center justify-between text-lg font-semibold mb-5">
                            <div className="flex items-center justify-center gap-2">
                                <CodeXml className="h-6 w-6" />
                                <h1 className=" font-bold">Snipster</h1>
                            </div>
                        </div>
                        <Link href="/dashboard/overview" className={` ${pathname === '/dashboard/overview' ? "bg-muted text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground text-muted-foreground `}>
                            <LayoutDashboard className="h-4 w-4" />
                            Overview
                        </Link>

                        <Link href="/dashboard/my-interviews" className={` ${pathname === '/dashboard/my-interviews' ? "bg-muted text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground text-muted-foreground`}>
                            <ShoppingCart className="h-5 w-5" />
                            My Interviews
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                        </Link>

                        <Link href="/dashboard/start-interview" className={` ${pathname === '/dashboard/start-interview' ? "bg-muted text-foreground text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}>
                            <Package className="h-5 w-5" />
                            Start Interview
                        </Link>

                        <Link href="/dashboard/manage-questions" className={` ${pathname === '/dashboard/manage-questions' ? "bg-muted  text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}>
                            <Users className="h-5 w-5" />
                            Manage questions
                        </Link>

                        <Link href="/dashboard/analytics" className={` ${pathname === '/dashboard/analytics' ? "bg-muted text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}>
                            <LineChart className="h-5 w-5" />
                            Analytics
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-[85%] mx-auto flex items-center justify-between" >
                <div className="flex items-center justify-center gap-2">
                    <CodeXml className="h-7 w-7 font-bold" />
                    <h1 className=" font-bold">Snipster</h1>
                </div>
                <div className="hidden md:block">
                    <div className="flex flex-1 items-center justify-center gap-5">
                        <Link href="/dashboard/overview" className={` ${pathname === '/dashboard/overview' ? "bg-muted text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground text-muted-foreground `}>
                            Overview
                        </Link>

                        <Link href="/dashboard/my-interviews" className={` ${pathname === '/dashboard/my-interviews' ? "bg-muted text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground text-muted-foreground`}>
                            My Interviews
                        </Link>

                        <Link href="/dashboard/start-interview" className={` ${pathname === '/dashboard/start-interview' ? "bg-muted text-foreground text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}>
                            Start Interview
                        </Link>

                        <Link href="/dashboard/manage-questions" className={` ${pathname === '/dashboard/manage-questions' ? "bg-muted  text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}>
                            Manage questions
                        </Link>

                        <Link href="/dashboard/analytics" className={` ${pathname === '/dashboard/analytics' ? "bg-muted text-white" : ""} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}>
                            Analytics
                        </Link>
                    </div>
                </div>
                <div className="">
                    <Themes />
                </div>
            </div>
        </header>
    );
};

export default Header;

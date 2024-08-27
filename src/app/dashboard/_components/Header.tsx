"use client"

import Link from "next/link"
import {
    CodeXml,
    LayoutDashboard,
    LineChart,
    Menu,
    Package,
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
import NavContent from "./NavContent"
import { Themes } from "./Themes"
import { usePathname } from "next/navigation"


const Header = () => {
    const pathname = usePathname()
    return (
        <header className="flex h-14 items-center gap-4 bg-muted/40 px-4 lg:h-[60px] lg:pr-6 lg:pl-0">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <div className="flex items-center justify-between text-lg font-semibold mb-5">
                            <div className="flex items-center justify-center gap-2">
                                <CodeXml className="h-6 w-6" />
                                <h1 className=" font-bold">Snipster</h1>
                            </div>
                            <div className=" mr-8">
                                <Themes />
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
                    <div className="mt-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="sm" className="w-full">Upgrade</Button>
                            </CardContent>
                        </Card>
                    </div>
                </SheetContent>
            </Sheet>
            <NavContent />
        </header>
    );
};

export default Header;

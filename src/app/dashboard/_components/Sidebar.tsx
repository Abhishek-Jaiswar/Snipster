"use client"
import Link from "next/link"
import {
    BarChartBig,
    CalendarClock,
    CodeXml,
    FileQuestion,
    LayoutDashboard,
    LibraryBig,
    MessageSquareCode,
    MonitorDot,
    Notebook,
    NotebookText,
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
import { usePathname } from "next/navigation"
import { Themes } from "./Themes"

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 justify-between items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <CodeXml className="h-7 w-7" />
                        <span className="text-2xl font-bold">Snipster</span>
                    </Link>
                    <div>
                        <Themes />
                    </div>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 gap-2 text-sm font-medium lg:px-4">
                        <Link href="/dashboard/overview" className={` ${pathname === '/dashboard/overview' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <LayoutDashboard className="h-4 w-4" />
                            Overview
                        </Link>

                        <Link href="/dashboard/my-interviews" className={` ${pathname === '/dashboard/my-interviews' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <Notebook className="h-4 w-4" />
                            My Interviews
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
                        </Link>

                        <Link href="/dashboard/schedule-interviews" className={` ${pathname === '/dashboard/schedule-interviews' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <CalendarClock className="h-4 w-4" />
                            Schedule Interviews
                        </Link>

                        <Link href="/dashboard/start-interview" className={` ${pathname === '/dashboard/start-interview' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <MonitorDot className="h-4 w-4" />
                            Start Interview
                        </Link>

                        <Link href="/dashboard/manage-questions" className={` ${pathname === '/dashboard/manage-questions' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <FileQuestion className="h-4 w-4" />
                            Manage Questions
                        </Link>

                        <Link href="/dashboard/resources" className={` ${pathname === '/dashboard/resources' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <LibraryBig className="h-4 w-4" />
                            Resources
                        </Link>
                        <Link href="/dashboard/analytics" className={` ${pathname === '/dashboard/analytics' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <BarChartBig className="h-4 w-4" />
                            Analytics
                        </Link>
                        <Link href="/dashboard/notes" className={` ${pathname === '/dashboard/notes' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <NotebookText className="h-4 w-4" />
                            Notes
                        </Link>
                        <Link href="/dashboard/feedback" className={` ${pathname === '/dashboard/feedback' ? "bg-muted text-primary" : ""} flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground `}>
                            <MessageSquareCode className="h-4 w-4" />
                            Feedback
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card>
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>Unlock all features and get unlimited access to our support team.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">Upgrade</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"

const DashboardLayout = ({ children }: any) => {
    return (
        <div>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <Sidebar />
                <div className="flex flex-col">
                    <Header />
                    <main className="flex flex-1 flex-col gap-2 p-2 lg:gap-2 lg:p-2">
                        <div className="flex flex-1 p-1 rounded-md border border-dashed shadow-sm">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
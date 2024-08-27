import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"

const DashboardLayout = ({ children }: any) => {
    return (
        <div>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-4">
                <Sidebar />
                <div className="flex flex-col">
                    <Header />
                    <main className="flex flex-1 flex-col gap-2 p-2 lg:gap-2 lg:p-2 bg-white rounded-t-3xl  shadow-sm mr-4">
                        <div className="">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
import Sidebar from "./dashboard/components/Sidebar/Sidebar";
import NavbarDashboard from "./dashboard/components/NavbarDashboard/NavbarDashboard";

export default function layoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full w-full">
            <div className="hidden h-full xl:block w-80 xl:fixed"> <Sidebar/> </div>
            <div className="w-full h-full xl:ml-80"> <NavbarDashboard /> 
            <div className="p-6 h-max">{children}</div>
            </div>
        </div>
    )
}

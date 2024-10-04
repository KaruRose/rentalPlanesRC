import SidebarRoute from "../../SidebarRoute/SidebarRoute";
import LogoDashboard from "../LogoDashboard/LogoDashboard";

export default function Sidebar() {
  return (
    <div className="h-screen">
        <div className="flex flex-col h-full border-r">
            <LogoDashboard/>
            <SidebarRoute/>
        </div>
    </div>
  )
}

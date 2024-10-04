"use client"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@clerk/nextjs"
import { dataGeneralSidebar } from "./SidebarRoutes.data"
import SidebarItem from "../SidebarItem/SidebarItem"

export default function SidebarRoute() {
    const { userId } = useAuth();
  return (
      
      <div className="flex flex-col justify-between h-full">
        <div>
          <Separator />
            <div className="p-2 md:p-6">
                <p className="mb-2 text-slate-500">GENERAL</p>
                {dataGeneralSidebar.map((item) => (
                    <SidebarItem key={item.label} item={item}/>
                ))}
            <p className="mb-2 text-slate-500">MANAGE</p>
            </div>
        </div>
        <footer className="p-3 mt-3 text-center">
        <Separator />
            <p className="text-slate-500">© 2022 PlanesRC. All rights reserved.</p>
        </footer>
    </div>
  )
}

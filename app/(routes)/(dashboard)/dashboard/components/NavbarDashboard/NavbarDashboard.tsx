import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import SidebarRoute from "../../SidebarRoute/SidebarRoute"
import { UserButton } from "@clerk/nextjs"

export default function navbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6  bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu/>
          </SheetTrigger>
          <SheetContent className="bg-white" side="left">
            <SidebarRoute/>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        <UserButton />
      </div>
    </nav>
  )
}

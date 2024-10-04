import { Calendar, Plane, Heart, SquareChartGantt } from "lucide-react"

export const dataGeneralSidebar = [
    {
        icon: Plane,
        label: "Planes",
        href: "/dashboard",
    },
    {
        icon: Calendar,
        label: "Planes Reserves",
        href: "/reserves",
    },
    {
        icon: Heart,
        label: "Loved Planes",
        href: "/loved-planes",
    },
    {
        icon: SquareChartGantt,
        label: "Planes manager",
        href: "/dashboard/admin/planes-manager",
    },
]
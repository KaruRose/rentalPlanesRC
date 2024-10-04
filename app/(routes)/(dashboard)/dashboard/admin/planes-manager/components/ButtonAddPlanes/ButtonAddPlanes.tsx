"use client"
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { FormAddPlane } from "../FormAddPlane"

export function ButtonAddPlanes() {
    const [openDialog, setopenDialog] = useState(false)

    return (
        <Dialog open={openDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setopenDialog(true)}>
                    Add new plane
                    <PlusCircle className="ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                        descriptcion asda isdih aosihd 
                    </DialogDescription>
                </DialogHeader>
                <FormAddPlane setopenDialog ={setopenDialog} />
            </DialogContent>
        </Dialog>
    )
}

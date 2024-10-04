import { ButtonAddPlanes } from "./components/ButtonAddPlanes/ButtonAddPlanes";

export default function pagePlanesManager() {
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Manage your planes</h2>
                <ButtonAddPlanes/>
            </div>
        </div>
    )
}
import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export const CartLayout = () => {
    return(
        <div>
            <Header />
            <h1>layout login</h1>
            <Outlet />
            </div>
    )
}
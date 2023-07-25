import toast from "react-hot-toast";
import { useEffect } from "react";

import Controller from "../components/Controller";
import SideBar from "../components/SideBar";
import AllStatus from "../components/AllStatus";

function DashBoard() {
    useEffect(() => {
        const handleLoadWindow = () => {
            toast.success("Login realizado com sucesso!");
        };
        window.addEventListener("load", handleLoadWindow);
        return () => {
            window.removeEventListener("load", handleLoadWindow);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen">
                <Controller />
                <AllStatus />
                <SideBar/>
        </div>
    );
}

export default DashBoard;

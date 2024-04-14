import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function NavBar() {
    const { logout } = useContext(AuthContext)

    const handleClick = () => {
        logout()
    }

    return (
        <div className="flex justify-end shadow-sm h-14">
            <button 
                onClick={handleClick}
                className="border-[0.5px] my-2 mx-10 p-2 rounded-md">
                Logout
            </button>
        </div>
    );
}
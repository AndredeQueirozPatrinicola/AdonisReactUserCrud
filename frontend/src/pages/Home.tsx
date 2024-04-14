import UserInfosBox from "../components/UserInfos"

import NavBar from "../components/NavBar"


export const Home = () => {

    return (
        <>
            <NavBar/>
            <div className="flex flex-col items-center justify-center mt-28">
                <UserInfosBox/>
            </div>
        </>
        
    )
}
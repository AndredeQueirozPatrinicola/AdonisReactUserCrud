import { useEffect, useState } from "react";
import { UserInfos } from  "../types/UserInfos" ;
import axios from 'axios';

export default function UserInfosBox() {
    const [ userData, setUserData ] = useState({} as UserInfos)

    useEffect(()=>{
        const getData = async () => {
            const { fullName, email } = await axios.get('http://localhost:5000/api/accounts/users/6').then(res => res.data)
            setUserData({
                fullName,
                email
            })
        }
        getData()
    }, [])

    return (
        <div className="flex flex-col w-1/3 min-h-40 shadow rounded p-6">
            <span className="text-3xl text-slate-700 bold">Your data</span>

            <div className="flex flex-col p-4 text-slate-600">
                <span className="m-2 rounded-md h-10 border-2 p-2">
                    {userData.fullName}
                </span>
                <span className="m-2 rounded-md h-10 border-2 p-2">
                    {userData.email}
                </span>
            </div>

        </div>
    );
}
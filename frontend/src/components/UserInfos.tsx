import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function UserInfosBox() {
    const { userInfos } = useContext(AuthContext)

    return (
        <div className="flex flex-col w-1/3 min-h-40 shadow rounded p-6">
            <span className="text-3xl text-slate-700 bold">Your data</span>

            <div className="flex flex-col p-4 text-slate-600">
                <span className="m-2 rounded-md h-10 border-2 p-2">
                    {userInfos.fullName}
                </span>
                <span className="m-2 rounded-md h-10 border-2 p-2">
                    {userInfos.email}
                </span>
            </div>

        </div>
    );
}
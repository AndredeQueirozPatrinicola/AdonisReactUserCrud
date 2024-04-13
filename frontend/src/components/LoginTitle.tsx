import React from "react";



export const LoginTitle = () => {
    return (
        <div className="flex flex-col w-1/3">
            <div className="m-2">
                <h4 className="text-center text-4xl font-bold text-slate-700">Login to your account</h4>
            </div>
            <div className="m-10">
                <span className="block w-full text-center ">Don't you have an account? <span className="text-[#863ec9] font-bold">Signup</span></span>
            </div>
        </div>
    );
};
import React from "react";

interface ErrorMessagesBoxProps {
    authErrorMessages: {
        message:string
    }[]
}

export const ErrorMessagesBox: React.FC<ErrorMessagesBoxProps> = ({ authErrorMessages }) => {
    return (
        <div className="flex items-center justify-center m-2 p-2 text-red-500 italic ">
            {
                authErrorMessages.map((value, index) => {
                    return (
                        <span key={index}>{value.message}</span>
                    )
                })
            }
        </div>
    );
};
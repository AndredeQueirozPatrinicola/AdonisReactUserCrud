import React, { ReactNode } from "react";


import { FormTitleProps } from "../types/FormTitleProps";

export const FormTitle: React.FC<FormTitleProps> = ({ mainText, questionText, children }) => {
    return (
        <div className="flex flex-col w-1/3">
            <div className="m-2">
                <h4 className="text-center text-4xl font-bold text-slate-700">{mainText}</h4>
            </div>
            <div className="m-10">
                <span className="block w-full text-center">{questionText} {children}</span>
            </div>
        </div>
    );
};


import React from "react";

interface FormInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
    inputName: string;
    inputType: string,
    fieldError: string
}

export const FormInput: React.FC<FormInputProps> = ({ 
    handleChange, 
    placeHolder, 
    inputName, 
    inputType,
    fieldError
}) => {

    return (
        <>
            <span className={`min-h-5 text-sm px-2 italic text-red-600 ${fieldError? 'visible': 'invisible'}`}>{fieldError}</span>
            <input
                className={`mb-2 rounded-md h-10 border-2 p-2 ${fieldError? 'focus:border-red-600' :'focus:border-[#863ec9]'} focus:outline-none focus:ring-0`}
                placeholder={placeHolder}
                type={inputType}
                name={inputName}
                onChange={handleChange}
            />
        </>
    );
};
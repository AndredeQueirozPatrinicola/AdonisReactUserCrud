import React from "react";

interface FormInputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
    inputName: string;
    inputType: string
}

export const FormInput: React.FC<FormInputProps> = ({ handleChange, placeHolder, inputName, inputType }) => {
    return (
        <input
            className="m-2 rounded-md h-10 border-2 p-2 focus:border-[#863ec9]"
            placeholder={placeHolder}
            type={inputType}
            name={inputName}
            onChange={handleChange}
        />
    );
};
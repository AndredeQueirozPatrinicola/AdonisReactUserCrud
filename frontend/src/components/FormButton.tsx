import React from "react";

interface FormButtonProps {
    handleSubmit: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    buttonValue: string
}

export const FormButton: React.FC<FormButtonProps> = ({ handleSubmit, buttonValue }) => {
    return (
        <button
            className="bg-[#863ec9] text-white rounded-md m-2 h-10"
            onClick={handleSubmit}
        >{buttonValue}</button>
    );
};
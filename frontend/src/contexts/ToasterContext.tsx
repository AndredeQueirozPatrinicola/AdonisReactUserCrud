import { createContext, ReactNode, useEffect, useState } from 'react'
import { Props } from '../types/Props.tsx';
import Toaster from '../components/Toaster.tsx';

type ToasterOptions = {
    isVisible: boolean,
    message: string,
}

type ToasterContextType = {
    options: ToasterOptions
    setToasterOptions: (options: ToasterOptions) => void;
}

const ToasterContext = createContext({} as ToasterContextType);

const ToasterProvider = ({children}: Props) => {
    const [options, setToasterOptions] = useState({
        isVisible: false,
        message: ''
    })

    const contextData: ToasterContextType = { options, setToasterOptions}

    return (
        <ToasterContext.Provider value={contextData}>
          {children}
          <Toaster
            message={options.message}
          />
        </ToasterContext.Provider>
      );
}

export { ToasterContext, ToasterProvider}
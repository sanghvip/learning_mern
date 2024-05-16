import React from "react";

type ToastMessage = {
    message: String;
    type: "SUCCESS" | "ERROR";
}

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
}

const AppContext = React.createContext<AppContext | undefined>(undefined);
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppContext.Provider value={{ showToast: () => undefined }}>
            {children}
        </AppContext.Provider>
    )

}
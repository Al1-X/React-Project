import React, { createContext, useContext, useState } from "react";

interface IAuthContext {
    isAuthenticated: boolean;
    accessToken: string;
    actions: {
        login: () => void;
    };
}

const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    accessToken: "",
    actions: {
        login: () => { },
    },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");

    const login = () => {
        setIsAuthenticated(true);
        setAccessToken(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                accessToken,
                actions: {
                    login,
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useIsAuthenticated = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated;
};

export const useRetrieveAccessToken = () => {
    const { accessToken } = useContext(AuthContext);
    return accessToken;
};

export const useLogin = () => {
    const { actions: login } = useContext(AuthContext);
    return login;
};

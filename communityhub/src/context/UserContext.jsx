import { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Provider component
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
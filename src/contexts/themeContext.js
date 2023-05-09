import { createContext, useState } from "react"

export const themeContext = createContext()
const ThemeContextProvider = ({ children }) => {
    const [state, setState] = useState(true);
    return (
        <div>
            <themeContext.Provider value={[state,setState]}>
                {children}
            </themeContext.Provider>
        </div>
    );
}

export default ThemeContextProvider;
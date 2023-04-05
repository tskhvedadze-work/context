import { createContext, useState } from "react";

export const GlobalContext = createContext({
  visible: false,
  setVisible: undefined,
});

export function GlobalProvider({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export const CounterValueContext = createContext(undefined);
export const CounterActionsContext = createContext(undefined);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [counter, setCounter] = useState(1);
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );

  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterValueContext.Provider value={counter}>
        {children}
      </CounterValueContext.Provider>
    </CounterActionsContext.Provider>
  );
}

export const useCounterValue = () => {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error(
      "useCounterValue should be used within CounterValueContext.Provider"
    );
  }
  return value;
};

export const useCounterActions = () => {
  const value = useContext(CounterActionsContext);
  if (value === undefined) {
    throw new Error(
      "useCounterActions should be used within CounterActionsContext.Provider"
    );
  }
  return value;
};

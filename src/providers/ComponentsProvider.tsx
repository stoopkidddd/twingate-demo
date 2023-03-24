import { createContext, useCallback, useMemo, useState } from "react";
import { IBaseComponent } from "../types";
import exampleData from "../../example.json";

export interface IComponentsContext {
  unparsedData: string;
  componentData: IBaseComponent[];
  setComponentData: (data: string) => void;
  invalidData: boolean;
}

export const ComponentsContext = createContext<IComponentsContext | null>(null);

export type ComponentsProviderProps = {
  children: React.ReactNode;
}

export function ComponentsProvider({ children }: ComponentsProviderProps) {
  // injecting some example data here - not the best way but works for this scenario
  const [unparsedData, setUnparsedData] = useState<string>(JSON.stringify(exampleData, null, 2));
  const [parsedData, setParsedData] = useState<IBaseComponent[]>(exampleData as IBaseComponent[]);
  const [invalidData, setInvalidData] = useState(false);

  const setInputData = useCallback((data: string) => {
    setUnparsedData(data);

    try {
      // NOTE: here is where I would use zod/yup to do any schema validation to get much better error handling
      const parsedData = JSON.parse(data);

      setParsedData(parsedData);
      setInvalidData(false);
    } catch {
      setParsedData([]);
      setInvalidData(true);
    }
  }, [])

  const value = useMemo(() => ({
    invalidData,
    unparsedData,
    componentData: parsedData,
    setComponentData: setInputData,
  }), [parsedData, setInputData])

  return <ComponentsContext.Provider value={value}>{children}</ComponentsContext.Provider>

}

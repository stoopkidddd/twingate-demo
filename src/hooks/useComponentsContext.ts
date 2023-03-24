import { useContext } from "react";
import { ComponentsContext } from "../providers/ComponentsProvider";

export default function useComponentsContext() {
  const context = useContext(ComponentsContext);

  if (!context) {
    throw new Error('useComponentsContext must be used insode of a ComponentsProvider');
  }

  return context;
}

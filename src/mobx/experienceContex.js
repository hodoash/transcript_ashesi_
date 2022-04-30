import { useLocalStore } from "mobx-react";
import React from "react";
import { createExperienceStore } from "./experienceStore";
const ExperienceContext = React.createContext(null);

const constNotesProvider = ({ children }) => {
  const experienceStore = useLocalStore(createExperienceStore);

  return (
    <ExperienceContext.Provider value={experienceStore}>
      {children}
    </ExperienceContext.Provider>
  );
};
export default constNotesProvider;

export const useExperienceStore = () => React.useContext(ExperienceContext);

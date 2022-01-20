import { useEffect, useState, useContext } from "react";
import { spaceService } from "../services/space.service";
import { SpaceContext } from "../contexts/space.context";

export const SpaceProvider = ({ children }) => {
  const [navSections, setNavSections] = useState();

  useEffect(() => {
    async function fetchData() {
      const currentNavSections = await spaceService.getNavSections();
      setNavSections(currentNavSections);
    }

    fetchData();
  }, []);

  return (
    <SpaceContext.Provider
      value={{
        navSections
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};

export const useSpace = () => {
  const context = useContext(SpaceContext);
  if (!context) {
    throw new Error("useSpace must be inside provider QueryContext");
  }
  return context;
};

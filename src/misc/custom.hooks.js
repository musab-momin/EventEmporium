// this is to use media query programatically. we pass max-width from another function and this prop will return us true or false based on

import { useEffect, useState } from "react";

// max width.
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(
      () => window.matchMedia(query).matches
    );
  
    useEffect(() => {
      const queryList = window.matchMedia(query);
      setMatches(queryList.matches);
  
      const listener = eve => setMatches(eve.matches);
      queryList.addListener(listener);
  
      return () => queryList.removeListener(listener);
    }, [query]);
  
    return matches;
  }
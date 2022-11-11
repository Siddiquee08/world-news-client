import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- World News`;
  }, [title]);
};

export default useTitle;

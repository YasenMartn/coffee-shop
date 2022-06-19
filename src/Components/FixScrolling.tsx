import { useEffect } from "react";
import { useLocation } from "react-router";

type reactChildProps = {
  children: React.ReactNode
}

const FixScrolling = (props: reactChildProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default FixScrolling;
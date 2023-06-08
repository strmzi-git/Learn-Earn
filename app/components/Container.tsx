import React from "react";

interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}
const Container: React.FC<ContainerProps> = function ({ children }) {
  return <div className="px-4 lg:px-4 xl:px-10">{children}</div>;
};
export default Container;

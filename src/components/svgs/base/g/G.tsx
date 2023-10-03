import React, { FunctionComponent } from "react";

import { ReactChild } from "react";

export interface IG {
  children?: ReactChild | Array<ReactChild>;
  transform?: string;
}

const G: FunctionComponent<IG> = ({ children, transform }) => {
  return <g transform={transform}>{children}</g>;
};

export { G };

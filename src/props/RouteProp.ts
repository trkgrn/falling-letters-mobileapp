import { IStackScreenProps } from "./StackScreenProp";
import React from "react";

export interface IRouteProps {
  component: React.FunctionComponent<IStackScreenProps>;
  name: string;
  options?: any;
}

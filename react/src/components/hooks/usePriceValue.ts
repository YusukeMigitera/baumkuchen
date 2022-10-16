import { useContext } from "react";

import { PriceValueContext, PriceValueContextType } from "../providers/PriceValueProvider";

export const usePriceValue = ():PriceValueContextType => 
useContext(PriceValueContext);
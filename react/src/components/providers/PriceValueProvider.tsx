import React, { ReactNode, createContext, Dispatch, SetStateAction, useState } from "react";

export type PriceValueContextType = {
  priceValue: number;
  setPriceValue: Dispatch<SetStateAction<number>>
}

export const PriceValueContext = createContext<PriceValueContextType>(
  {} as PriceValueContextType
);

export const PriceValueProvider = (props: {children: ReactNode}) => {
  const { children } = props
  const [priceValue, setPriceValue] = useState<number>(0.01);

  return (
    <PriceValueContext.Provider value={{ priceValue, setPriceValue }}>
      {children}
    </PriceValueContext.Provider>
  )
}
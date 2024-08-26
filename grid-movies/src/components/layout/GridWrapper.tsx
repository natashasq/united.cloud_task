import React from "react";
import { ReactNode } from "react";

const GridWrapper = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 max-md:pt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 w-full">
    {children}
  </div>
);
export default GridWrapper;

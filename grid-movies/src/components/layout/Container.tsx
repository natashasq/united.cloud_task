import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="h-auto px-10 flex justify-center items-center md:ml-48 flex-col">
    {children}
  </div>
);

export default Container;
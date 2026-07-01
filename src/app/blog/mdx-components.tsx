import type { ReactNode } from "react";

const Callout = ({ children }: { children: ReactNode }) => (
  <div className="not-prose border-2 border-black rounded-lg bg-[#272828] text-white p-5 sm:p-6 my-6">
    <div className="text-base sm:text-lg leading-relaxed">{children}</div>
  </div>
);

export const components = {
  Callout,
};

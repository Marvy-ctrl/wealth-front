import React from "react";

function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`px-6 py-2 rounded-md cursor-pointer ${className}`}>
      {children}
    </button>
  );
}

export default Button;

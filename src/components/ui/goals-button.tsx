import React from "react";

function GoalsButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`px-6 py-2 rounded-4xl hover:border-[#4840BB] cursor-pointer  border border-[#f7f7f7] ${className}`}
    >
      {children}
    </button>
  );
}

export default GoalsButton;

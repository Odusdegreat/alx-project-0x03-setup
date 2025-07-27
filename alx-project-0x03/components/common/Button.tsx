// components/common/Button.tsx

import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor = "blue",
}) => {
  return (
    <button
      onClick={action}
      className={`px-4 py-2 rounded text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 transition`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;

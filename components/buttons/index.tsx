import React from "react";

const PrimaryButton = ({
  label,
  action,
}: {
  label?: String;
  action?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="shadow-outline-bold active:shadow-outline-thin bg-gray-800 hover:bg-gray-900 text-white px-10 py-3 flex gap-4 items-center"
      onClick={action ? action : () => {}}
    >
      {label ? label : "Button"}
      <i className="fa-solid fa-arrow-right-long"></i>
    </button>
  );
};

export default PrimaryButton;

import React from "react";

const PrimaryButton = ({
  value,
  setValue,
  placeholder,
}: {
  value?: string | number | readonly string[] | undefined;
  setValue?: Function;
  placeholder?: string | undefined;
}) => {
  return (
    <input
      value={value}
      onChange={setValue ? (e) => setValue(e.target.value) : () => {}}
      className="shadow-outline-bold p-3 border-2 border-gray-800 w-[50%] outline-none"
      placeholder={placeholder ? placeholder : ""}
    />
  );
};

export default PrimaryButton;

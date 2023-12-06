import { Typography } from "./Typography";
import { useState } from "react";

interface SelectProps {
  variant?: "orange" | "black" | "white";
  label: string;
  className?: string;
  options: { value: string; label: string }[];
}

export const Select = ({
  label,
  className,
  variant = "orange",
  options,
}: SelectProps) => {
  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  let selectClasses = "";
  let optionClasses = "";

  if (variant === "orange") {
    selectClasses =
      "border-blackPrimary text-blackPrimary bg-orangePrimary placeholder:text-blackPrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary";
    optionClasses = "text-blackPrimary";
  } else if (variant === "black") {
    selectClasses =
      "border-orangePrimary text-orangePrimary bg-blackPrimary placeholder:text-orangePrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary";
    optionClasses = "text-orangePrimary";
  } else if (variant === "white") {
    selectClasses =
      "border-blackPrimary text-blackPrimary bg-whitePrimary placeholder:text-blackPrimary focus:outline-none focus:border-orangePrimary";
    optionClasses = "text-orangePrimary";
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="ml-[30px]">
        <Typography fontSize="20" textColor="black" fontFamily="Franklin">
          {label}
        </Typography>
      </label>
      <select
        className={`py-[7px] px-[30px] rounded-full border ${selectClasses} ${className}`}
      >
        <option className="text-gray-400" value="" disabled selected>
          Sélectionner votre genre
        </option>
        {renderOptions}
      </select>
    </div>
  );
};

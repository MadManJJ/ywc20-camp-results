import React from "react";
import SearchInput from "../Input/SearchInput";

const FilterBanner = () => {
  return (
    <div className="flex flex-col w-full md:flex-row gap-4 mb-4">
      <SearchInput name="Interview No" q="interviewRefNo" />
      <SearchInput name="First Name" q="firstname" />
      <SearchInput name="Last Name" q="lastname" />
    </div>
  );
};

export default FilterBanner;

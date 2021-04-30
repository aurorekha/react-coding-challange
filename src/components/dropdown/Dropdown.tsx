import React from "react";

type Dropdownprops = {
  handleDropdownSelect: () => {};
};

const Dropdown = ({ handleDropdownSelect }: Dropdownprops) => {
  return (
    <div className="dropdown__block">
      <label>
        <strong>Sort by:</strong>
      </label>
      <select name="hotelDropdown" onChange={handleDropdownSelect}>
        <option value="">Select</option>
        <option value="highToLow">Price High to low</option>
        <option value="lowToHigh">Price Low to high</option>
      </select>
    </div>
  );
};

export default Dropdown;

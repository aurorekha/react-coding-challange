import React from "react";

type Dropdownprops = {
  handleDropdownSelect: () => {};
};

const Dropdown = ({ handleDropdownSelect }: Dropdownprops) => {
  return (
    <div>
      <label>Sort by price:</label>
      <select name="hotelDropdown" onChange={handleDropdownSelect}>
        <option value="">Select</option>
        <option value="highToLow">High to low</option>
        <option value="lowToHigh">Low to high</option>
      </select>
    </div>
  );
};

export default Dropdown;

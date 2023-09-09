import React, { useState } from "react";
import styled from "@emotion/styled";

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid rgba(192, 192, 192, 0.6);
  background-color: ${({ isOpen }) => (isOpen ? "#f2f2f2" : "transparent")};
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #fff;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const SelectOption = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;
const options = ["small", "medium", "large"];

const CustomDropdown = (props) => {
  const { value, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      <SelectHeader isOpen={isOpen} onClick={toggleDropdown}>
        {value || "Select size"}
      </SelectHeader>
      <SelectOptions isOpen={isOpen}>
        {options.map((option) => (
          <SelectOption key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </SelectOption>
        ))}
      </SelectOptions>
    </SelectWrapper>
  );
};

export default CustomDropdown;

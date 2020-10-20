import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
const Select = (props) => {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={props.title}
        onSelect={(evt) => props.onClick(evt)}
      >
        {props.options.map((op, index) => {
          return (
            <Dropdown.Item key={op} as="button" eventKey={op}>
              {op}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default Select;

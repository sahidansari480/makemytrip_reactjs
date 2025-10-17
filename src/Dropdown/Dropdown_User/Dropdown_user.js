import React, { useState, useRef, useEffect } from "react";
import "../../CSS_file/Dropdown_user.css"; 

const Dropdown_User = ({ iconSrc, items = [] }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* Icon Button */}
      <img
        src={iconSrc}
        alt="menu icon"
        className={`dropdown-icon ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown Menu */}
      <div className={`dropdown-content ${open ? "show" : ""}`}>
        {items.length > 0 ? (
          items.map((item, i) => (
            <button
              key={i}
              className="dropdown-item"
              onClick={() => {
                item.onClick();
                setOpen(false); // close after click
              }}
            >
              {item.label}
            </button>
          ))
        ) : (
          <div className="dropdown-item disabled">No items</div>
        )}
      </div>
    </div>
  );
};

export default Dropdown_User;

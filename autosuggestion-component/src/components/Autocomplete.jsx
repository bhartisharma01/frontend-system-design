import {React, useState} from "react";

const Autocomplete = ( props ) => {
  const [inputValue, setInputValue] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("event value", inputValue);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder={props.placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={props.onBlur}
          style={props.customStyles}
        />
      </div>
    </>
  );
};

export default Autocomplete;

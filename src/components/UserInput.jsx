import { useState } from "react";

export default function UserInput({inputId, labelText, initialValue, onValueChange}) {
  const [inputValue, setInputValue] = useState(initialValue);

  function handleInputChange(e) {
    setInputValue(e.target.value);

    onValueChange(inputId, e.target.value);
  }

  return (
    <p>
      <label htmlFor={inputId}>{labelText}</label>
      <input id={inputId} type="number" required value={inputValue} onChange={handleInputChange} />
    </p>
  );
}

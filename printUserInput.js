import React, { useState } from 'react';

const DynamicForm = () => {
  const [heman, setHeman] = useState("");

  const handleInputChange = (event) => {
    setHeman(event.target.value);
  };

  const handleReset = () => {
    setHeman("");
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        value={heman}
        onChange={handleInputChange}
        placeholder="enter some text..."
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <h2>Current Input:</h2>
        <p>{`Display current input value here => ${heman}`}</p>
      </div>
    </div>
  );
};

export default DynamicForm;

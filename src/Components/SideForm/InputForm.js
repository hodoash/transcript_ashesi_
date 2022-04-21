import React, { useState } from "react";

// function InputForm() {
//     return (
//         <div>
//             this is the form section
//         </div>
//     )
// }

const InputForm = () => {
  const [name, setName] = useState(""); //add all the elemetns later
  const [dot, setDot] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const experience = { name, dot }; //add all the form fields here

    fetch("//the url of the post goes here", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    }).then(() => {
      console.log("uploaded to server succesfully");
      //what to do next....eg: history.push('/');
    });
  };

  return (
    <div className="FormInput">
      <h3>Transcript Data</h3>
      <form className="" onSubmit={handleSubmit}>
        <label className="">Year:</label>
        <select value={dot} onChange={(e) => setDot(e.target.value)}>
          <option value="mario">mario</option>
          <option value="second value">second value</option>
        </select>
        <label className="">Category:</label>
        <select value={dot} onChange={(e) => setDot(e.target.value)}>
          <option value="mario">mario</option>
          <option value="second value">second value</option>
        </select>
        <label className="">Brief Discription:</label>
        <input
          type="text"
          required
          maxLength={"40"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>Add to transcript</button>
      </form>
    </div>
  );
};
export default InputForm;

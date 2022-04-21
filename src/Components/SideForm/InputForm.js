import React, { useState } from "react";
import "./InputForm.css";

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
  const [slider, setSlider] = useState(false);

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
          maxLength={"120"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="">Number of Hours:</label>
        <input
          type="number"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="">Reference Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="">Reference Contact:</label>
        <input
          type="email"
          required
          maxLength={"40"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="">Add as a major Highlight:</label>
        <label className="switch">
          <input
            type="checkbox"
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
          />
          <span className="slider round"></span>
        </label>

        <button>Add to transcript</button>
      </form>
    </div>
  );
};
export default InputForm;

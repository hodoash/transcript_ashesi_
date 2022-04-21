import React, { useState, useCallback, useEffect } from "react";
import DragAndDrop from "../DragAndDrop";
// cuid is a simple library to generate unique IDs
import cuid from "cuid";
import "./InputForm.css";
import { Highlight } from "@material-ui/icons";

// function InputForm() {
//     return (
//         <div>
//             this is the form section
//         </div>
//     )
// }

const InputForm = () => {
  const [discription, setDiscriptiion] = useState(""); //add all the elemetns later
  const [hours, setHours] = useState("");
  const [refName, setRefName] = useState("");
  const [refContact, setRefContact] = useState("");
  const [year, setYear] = useState("2018");
  const [category, setCategory] = useState("SCHORLASHIP");

  const [slider, setSlider] = useState(false);
  const [image, setImage] = useState([]); //   const [isHighlight, setHighlight] = useState(false); //false

  const onDrop = useCallback((acceptedFiles) => {
    // Loop through accepted files
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
        setImage((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const experience = {
      year,
      category,
      discription,
      hours,
      refName,
      refContact,
      image,
    }; //add all the form fields here

    fetch("//the url of the post goes here", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    }).then(() => {
      console.log("uploaded to server succesfully");
      //what to do next....eg: history.push('/');
    });
  };

  //   useEffect(()=>{
  //     console.log("this happened because of slider");
  //     console.log(slider);
  //   },[slider])

  return (
    <div className="FormInput">
      <h3>Transcript Data</h3>
      <form className="" onSubmit={handleSubmit}>
        <label className="">Year:</label>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="year1">2018</option>
          <option value="year2">2019</option>
          <option value="year3">2020</option>
          <option value="year4">2021</option>
        </select>
        <label className="">Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="cat1">LEADERSHIP</option>
          <option value="cat2">CITIZENSHIP</option>
          <option value="cat3">SCHOLARSHIP</option>
        </select>
        <label className="">Brief Discription:</label>
        <input
          type="text"
          required
          maxLength={"120"}
          value={discription}
          onChange={(e) => setDiscriptiion(e.target.value)}
        />
        <label className="">Number of Hours:</label>
        <input
          type="number"
          required
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <label className="">Reference Name:</label>
        <input
          type="text"
          required
          value={refName}
          onChange={(e) => setRefName(e.target.value)}
        />
        <label className="">Reference Contact:</label>
        <input
          type="email"
          required
          maxLength={"40"}
          value={refContact}
          onChange={(e) => setRefContact(e.target.value)}
        />
        <label className="">Add as a major Highlight:</label>
        <label className="switch">
          <input
            type="checkbox"
            value={slider}
            onChange={(e) => setSlider((prevState) => !prevState)} //(e.target.value)}
          />
          <span className="slider round"></span>
        </label>

        {slider && (
          <div>
            <DragAndDrop onDrop={onDrop} accept={"image/*"} />
          </div>
        )}

        {/* <label className="">Add Data to Transcript</label> */}
        <button>Add to transcript</button>
      </form>
    </div>
  );
};
export default InputForm;

import React, { Component, useState, useCallback } from "react";
import DragAndDrop from "../DragAndDrop";
import { createExperiece } from "../../Redux/actions/experienceActions";
import { createTempExp, eraseTempExp } from "../../Redux/actions/tempExperienceAction";
import { connect } from "react-redux";
// cuid is a simple library to generate unique IDs
import cuid from "cuid";
import "./InputForm.css";
import { Highlight } from "@material-ui/icons";
import UploadedImage from "../UploadedImage";
// import { Component } from "react";

// function InputForm() {
//     return (
//         <div>
//             this is the form section
//         </div>
//     )
// }

class InputForm extends Component {
  // render=()=>()=>{
  state = {
    hours: "",
    refName: "",
    discription: "",
    refContact: "",
    year: "",
    category: "",
    isHighlight: false,
    //image_:""
  };
  handleChange = (e) => {
    console.log("albert teting change state ", e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
    this.props.createTempExp(this.state);
  };
  // const [discription, setDiscriptiion] = useState(""); //add all the elemetns later
  // const [hours, setHours] = useState("");
  // const [refName, setRefName] = useState("");
  // const [refContact, setRefContact] = useState("");
  // const [year, setYear] = useState("2018");
  // const [category, setCategory] = useState("SCHORLASHIP");
  // const [tempImage,setTempImage] = useState("");

  // const [isHighlight, setIsHighlight] = useState(false);
  // const [isImage,setIsImage]=useState(false);
  // const [image_, setImage] = useState([]); //   const [isHighlight, setHighlight] = useState(false); //false

  //  onDrop = useCallback((acceptedFiles) => {
  //   // Loop through accepted files
  //   acceptedFiles.map((file) => {
  //     // Initialize FileReader browser API
  //     const reader = new FileReader();
  //     // onload callback gets called after the reader reads the file data
  //     reader.onload = function (e) {
  //       // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
  //       // setImage((prevState) => [
  //       //   ...prevState,
  //       //   { id: cuid(), src: e.target.result },
  //       // ]);
  //       // setIsImage(true);
  //       //  console.log(image_);
  //       // setTempImage(e.target.result)

  //     };
  //     // Read the file as Data URL (since we accept only images)
  //     reader.readAsDataURL(file);
  //     // setIsImage(true);
  //     return file;
  //   });
  // }, []);

  handleSubmit = (e) => {
    e.preventDefault();
    // const experience = {

    //   year,
    //   category,
    //   discription,
    //   hours,
    //   refName,
    //   refContact,
    //   isHighlight,
    //   id:cuid()

    // }; //add all the form fields here
    // console.log("jhgfhgfdhgfdhgf")
    // console.log(image_)
    // const image={
    //   uid,
    //   eid,
    //   iLink:image_,
    //   id:cuid()

    // }
    
    this.props.createExperiece(this.state);
    this.props.eraseTempExp();
    // this.props.createTempExp({});//delete from temp Experience store
    //clear form
    this.setState({
      
    });

    // fetch("http://localhost:8000/experiences/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(experience),
    // }).then(() => {
    //   console.log("uploaded to server succesfully");
    //   //what to do next....eg: history.push('/');
    // });

    // fetch("//http://localhost:8000/images/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(image),
    // }).then(() => {
    //   console.log("uploaded to server succesfully");
    //   //what to do next....eg: history.push('/');
    // });
  };

  // useEffect(()=>{
  //   console.log("this happened because of image");
  //   console.log(image_);
  // },[image_])
  render() {
    return (
      <div className="p-6 ">
        <div className="FormInput">
          <h3 className=" pb-5 pt-2  text-2xl">Transcript Data</h3>
          <form className="block" onSubmit={this.handleSubmit}>
            <div className="flex my-1  flex-col">
              <label className="text-base py-2">Year</label>
              <select
                className="border-2 mb-2 text-grey-100 p-2 appearance-none rounded-md"
                value={this.year}
                id="year"
                onChange={this.handleChange.bind(this)}
              >
                <option value="">Select one</option>
                <option value="1">2018</option>
                <option value="2">2019</option>
                <option value="3">2020</option>
                <option value="4">2021</option>
              </select>
            </div>
            <div className="flex my-1 flex-col">
              <label className="text-base py-2">Category</label>
              <select
                className="border-2 mb-2 text-grey-100 p-2 appearance-none rounded-md"
                value={this.category}
                id="category"
                onChange={this.handleChange.bind(this)}
              >
                <option value="cat0">Select one</option>
                <option value="cat1">LEADERSHIP</option>
                <option value="cat2">CITIZENSHIP</option>
                <option value="cat3">SCHOLARSHIP</option>
              </select>
            </div>
            <div className="flex my-1 flex-col">
              <label className="text-base py-2">Brief Discription</label>
              <input
                className="border-2 mb-2 text-grey-100 p-2 appearance-none rounded-md"
                type="text"
                required
                placeholder="eg: name of NGO and role"
                maxLength={"120"}
                value={this.discription}
                id="discription"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="flex my-1 flex-col">
              <label className="text-base py-2">Number of Hours</label>
              <input
                className="border-2 mb-2 text-grey-100 p-2 appearance-none rounded-md"
                type="number"
                placeholder="54"
                required
                id="hours"
                value={this.hours}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="flex my-1 flex-col">
              <label className="text-base py-2">Reference Name</label>
              <input
                className="border-2 mb-2 text-grey-100 p-2 appearance-none rounded-md"
                type="text"
                placeholder="enter the name here"
                required
                id="refName"
                value={this.refName}
                onChange={this.handleChange.bind(this)}
              />
            </div>

            <div className="flex my-1 flex-col">
              <label className="text-base py-2">Reference Contact</label>
              <input
                className="border-2 mb-2 text-grey-100 p-2 appearance-none rounded-md"
                type="email"
                placeholder="john.doe@gmail.com"
                required
                id="refContact"
                maxLength={"40"}
                value={this.refContact}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="flex my-1 flex-row justify-between items-start">
              <label className="text-base py-2">Add as a major Highlight</label>
              <label className="switch mt-2">
                <input
                  className=""
                  type="checkbox"
                  id="isHighlight"
                  value={this.isHighlight}
                  onChange={this.handleChange.bind(this)} //(e.target.value)}
                />
                <span className="slider round"></span>
              </label>
            </div>

            {/* {this.state.isHighlight && (
            <div>
              <DragAndDrop onChange={this.handleChange} onDrop={this.onDrop} accept={"image/*"} />
              {this.isImage && <UploadedImage image={this.temp}/>}
            </div>
             
          )} */}

            {/* <label className="">Add Data to Transcript</label> */}
            <button>Add to transcript</button>
          </form>
        </div>
      </div>
    );
  }

  // };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createExperiece: (experience) => dispatch(createExperiece(experience)),
    createTempExp: (tempExp) => dispatch(createTempExp(tempExp)),
    eraseTempExp: (tempExp) => dispatch(eraseTempExp()),
  };
};
export default connect(null, mapDispatchToProps)(InputForm);

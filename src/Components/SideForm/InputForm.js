import React,{ Component,useState} from "react";
import DragAndDrop from "../DragAndDrop";
import { createExperiece } from "../../Redux/actions/experienceActions";
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
    state={
      hours:null,
      refName:"",
      discription:"",
      refContact:"",
      year:"",
      category:"SCHOLARSHIP",
      isHighlight:false,
      //image_:""
    };
    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }
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

  // const onDrop = useCallback((acceptedFiles) => {
  //   // Loop through accepted files
  //   acceptedFiles.map((file) => {
  //     // Initialize FileReader browser API
  //     const reader = new FileReader();
  //     // onload callback gets called after the reader reads the file data
  //     reader.onload = function (e) {
  //       // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
  //       setImage((prevState) => [
  //         ...prevState,
  //         { id: cuid(), src: e.target.result },
  //       ]);
  //       setIsImage(true);
  //       //  console.log(image_);
  //       setTempImage(e.target.result)

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
    this.props.createExperiece(this.state)
    

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
  render(){
    return (
      <div className="FormInput">
        <h3>Transcript Data</h3>
        <form className="" onSubmit={this.handleSubmit}>
          <label className="">Year:</label>
          <select value={this.year} id="year" onChange={this.handleChange}>
            <option value="1">2018</option>
            <option value="2">2019</option>
            <option value="3">2020</option>
            <option value="4">2021</option>
          </select>
          <label className="">Category:</label>
          <select value={this.category} id="category" onChange={this.handleChange}>
            <option value="cat1">LEADERSHIP</option>
            <option value="cat2">CITIZENSHIP</option>
            <option value="cat3">SCHOLARSHIP</option>
          </select>
          <label className="">Brief Discription:</label>
          <input
            type="text"
            required
            maxLength={"120"}
            value={this.discription}
            id="discription"
            onChange={this.handleChange}
          />
          <label className="">Number of Hours:</label>
          <input
            type="number"
            required
            id="hours"
            value={this.hours}
            onChange={this.handleChange}
          />
          <label className="">Reference Name:</label>
          <input
            type="text"
            required
            id="refName"
            value={this.refName}
            onChange={this.handleChange}
          />
          <label className="">Reference Contact:</label>
          <input
            type="email"
            required
            id="refContact"
            maxLength={"40"}
            value={this.refContact}
            onChange={this.handleChange}
          />
          <label className="">Add as a major Highlight:</label>
          <label className="switch">
            <input
              type="checkbox"
              id="isHighlight"
              value={this.isHighlight}
              onChange={this.handleChange} //(e.target.value)}
            />
            <span className="slider round"></span>
          </label>
  
          {/* {this.state.isHighlight && (
            <div>
              <DragAndDrop onChange={(e)=>setImage(e.target.value)} onDrop={onDrop} accept={"image/*"} />
              {isImage && <UploadedImage image={temp}/>}
            </div>
             
          )}
           */}
  
          {/* <label className="">Add Data to Transcript</label> */}
          <button>Add to transcript</button>
        </form>
      </div>
    );
  }
  
// };
  }
  
const mapDispatchToProps=(dispatch)=>{
   return{
     createExperiece :(experience)=>dispatch(createExperiece(experience))
   }
}
export default connect(null,mapDispatchToProps)(InputForm);

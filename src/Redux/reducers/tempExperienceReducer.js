const innitState = {
  // tempExp: [
  //   {
  //     hours: "",
  //     refName: "",
  //     discription: "",
  //     refContact: "",
  //     year: "",
  //     category: "",
  //     isHighlight: false,
  //   },
  // ],
  // hours: "",
  // refName: "",
  // discription: "",
  // refContact: "",
  // year: "",
  // category: "",
  // isHighlight: false,
};

const tempExperienceReducer = (state = {}, action) => {
  if (action.type === "CREATE_TEMP_EXPERIENCE") {
    console.log("creating temp in reducer", action.tempExp);
    return action.tempExp;
  }
  return state;
};
// const tempExperienceReducer = (state = innitState, action) => {
//     switch (action.type) {
//       case "UPDATE_HOURS":
//         return {
//           ...state,
//           tempExp:state.hours=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//         case "UPDATE_REFNAME":
//         return {
//           ...state,
//           tempExp:state.refName=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//         case "UPDATE_REFCONTACT":
//         return {
//           ...state,
//           tempExp:state.refContact=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//         case "UPDATE_DISCRIPTION":
//         return {
//           ...state,
//           tempExp:state.discription=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//         case "UPDATE_YEAR":
//         return {
//           ...state,
//           tempExp:state.year=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//         case "UPDATE_CATEGORY":
//         return {
//           ...state,
//           tempExp:state.category=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//         case "UPDATE_ISHIGHLIGHT":
//         return {
//           ...state,
//           tempExp:state.isHighlight=action.tempExp
//           // tempExp:[,action.tempExp,...state.tempExp]
//         };
//       default:
//         return state;
//     }
//   };

export default tempExperienceReducer;

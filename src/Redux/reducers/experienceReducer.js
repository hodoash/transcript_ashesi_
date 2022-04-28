const innitState = {
  experiences: [
    {
      year: 1,
      category: 2,
      discription: "Winner: Student Excellence Awards",
      hours: "40",
      refName: "Lebene Gbedawo",
      refContact: "lebene.bed@ashesi.edu.gh",
      isHighlight: 0,
      id: 1,
    },
    {
      year: 2,
      category: 2,
      discription: "Head of Communications Ashesi Start-up Launchpad",
      hours: "40",
      refName: "Lebene Gbedawo",
      refContact: "lebene.bed@ashesi.edu.gh",
      isHighlight: 0,
      id: 2,
    },
    {
      year: 3,
      category: 2,
      discription:
        "Participant- Harvard Model United Nations (Boston) & Model United Nations KNUST (Kumasi)",
      hours: "40",
      refName: "Lebene Gbedawo",
      refContact: "lebene.bed@ashesi.edu.gh",
      isHighlight: 0,
      id: 3,
    },
  ],
};

const experienceReducer = (state = innitState, action) => {
  switch (action.type) {
    case "CREATE_EXPERIENCE":
      console.log("created exp on db", action.experience);
      return state;
    case "CREATE+EXPERIENCE_ERROR":
      console.log("create experience error", action.err);
      return state;
    default:
      return state;
  }
};

export default experienceReducer;

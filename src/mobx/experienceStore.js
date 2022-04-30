// import cuid from "cuid";
import { observable, action, computed } from "mobx";

// export function createExperienceStore() {
//   return {
//     experiences: [],
//     addExperience(exp) {
//       this.experiences.push({
//         exp,
//         id: cuid(),
//       });
//       //add to db here or on top
//     },
//     removeExprience(id) {
//       this.experiences = this.experiences.filter(
//         (experiences) => experiences.id != id
//       );
//     },
//   };
// }

class expStore {
  @observable experiences = [
    {
      year: 1,
      category: 2,
      discription: "Winner: Student Excellence Awards from MobX",
      hours: "40",
      refName: "Lebene Gbedawo",
      refContact: "lebene.bed@ashesi.edu.gh",
      isHighlight: 0,
      id: 1,
    },
    {
      year: 2,
      category: 2,
      discription: "Head of Communications Ashesi Start-up Launchpad at MobX",
      hours: "40",
      refName: "Lebene Gbedawo",
      refContact: "lebene.bed@ashesi.edu.gh",
      isHighlight: 0,
      id: 2,
    },
  ];
}

const store = new expStore();
export default store;

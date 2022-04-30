import cuid from "cuid";

export function createExperienceStore() {
  return {
    experiences: [],
    addExperience(exp) {
      this.experiences.push({
        exp,
        id: cuid(),
      });
      //add to db here or on top
    },
    removeExprience(id) {
      this.experiences = this.experiences.filter(
        (experiences) => experiences.id != id
      );
    },
  };
}

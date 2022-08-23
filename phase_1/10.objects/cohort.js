const cohort = {
  name: "July 2022",
  id: 1234,
  students: ["brij", "ruben", "allen", "stephen"],
};

const july = (obj) => {
  let num = cohort.students.length;

  console.log(`${cohort.id} - ${cohort.name} - ${num}`);
};

july(cohort)

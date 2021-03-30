let obj1 = [
  {
    id: 1,
    name: "sarah",
  },
  { id: 2, name: "mishu" },
];

var aysha = obj1.map((data, index) => {
  console.log("the id and the data is ==", data, index);
  if (data.id === 1) {
    return { ...data, name: "mira" };
  } else {
    return data;
  }
});

console.log("print the object also it's type ==", aysha);

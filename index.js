let school = {
  name: "이강호",
  schoolNumber: 2212,
  major: "itContent"
}

let info = Object.keys(school)
for (let i = 0; i < info.length; i++) {
  console.log(info[i]);
}
for (let i of info) {
  console.log(i);
}
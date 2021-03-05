const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const dem = presidents.filter((presidents) => presidents.party === "D");
console.log(dem);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

//managed to do it, but not using If statement

const repSingle = presidents.filter(
  (presidents) => presidents.party === "R" && presidents.terms === 1
);

console.log(repSingle);

//3) return only the last three presidents

const lastThree = [...presidents.slice(presidents.length - 3)];

console.log(lastThree);
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const demDouble = presidents.filter(
  (presidents) => presidents.party === "D" && presidents.terms === 2
);

console.log(demDouble);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

/*function lynCheck(name, terms) {               <=== um... i tried
  if (name === "Lyndon Johnson") {
    if (terms === 2) {
      alert("LBJ served two terms");
    } else {
      alert("LBJ was one and done");
    }
    /* } else {
    alert(
      "That's not Lyndon B. Johnson"
    );
  }}*/

const lyndon = presidents.filter(
  (presidents) => presidents.name === "Lyndon Johnson"
);

if (lyndon.terms == 2) {
  alert("LBJ served two terms");
} else {
  alert("LBJ was one and done");
}

console.log(lyndon);

//sorry I know this is mad scuffed but hey, it works! :'D
//update: no it does not :(

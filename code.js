// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let monster = prompt("Name a kind of monster (singular):");
let place = prompt("Name a planet:");
let metal = prompt("Name a metal (plural):");
let action = prompt("Name an action (present tense):");
let object = prompt("Name an object (singular):");
let adjective = prompt("Name an adjective:");
let verb = prompt("Name a verb (past tense):");

document.write("Here is a story for you!<br>");
document.write(
  "Once upon a time, a " +
  adjective +
  " " +
  monster + 
  " roamed the planet of " +
  place +
  ". The " +
  monster +
  " was known to hoard " +
  metal +
  " and guard it fiercely. "
);
document.write(
  "One day, a brave adventurer came across the " +
  monster +
  " and tried " +
  action +
  " to get its attention. "
);
document.write(
  "But the " +
  monster +
  " remained unbothered, continuing to hold its " +
  metal +
  " tightly. The adventurer didn't give up and struck the " +
  monster +
  " with a " +
  object +
  ", causing it to " +
  verb +
  " in pain. "
);
document.write(
  "As the " +
  monster +
  " retreated, the adventurer seized the opportunity and collected the precious " +
  metal +
  " that was scattered everywhere. "
);
document.write(
  "The adventurer returned home, victorious and rich with " +
  metal +
  " from their encounter with the fearsome " +
  monster +
  "."
);
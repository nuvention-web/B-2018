import bread from "./bread";
import chicken from "./chicken";
import egg from "./egg";
import salad from "./salad";
import soup from "./soup";
import vegetable from "./vegetable";
import veggie from "./veggie";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// main reducers
export const recipes = shuffle([
  // ...bread,
  ...chicken,
  ...egg,
  ...salad,
  ...soup,
  ...vegetable,
  ...veggie
]);

//UI logic

function displayHideLogic(idToDisplay, idToHide1, idToHide2, idToHide3) {
  document.getElementById(idToDisplay).classList.remove("hidden");
  document.getElementById(idToHide1).classList.add("hidden");
  document.getElementById(idToHide2).classList.add("hidden");
  document.getElementById(idToHide3).classList.add("hidden");
}

window.onload = function () {

  document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();
    const animalResult = (document.querySelector("[name='inputAnimal']").value).trim().toLowerCase();
    if (animalResult === "turtles") {
      displayHideLogic("turtles", "pandas", "whales", "error");
    } else if (animalResult === "pandas") {
      displayHideLogic("pandas", "turtles", "whales", "error");
    } else if (animalResult === "whales") {
      displayHideLogic("whales", "pandas", "turtles", "error");
    } else {
      displayHideLogic("error", "turtles", "pandas", "whales");
    }
  };
};
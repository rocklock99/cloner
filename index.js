let displayContainer = document.querySelector("#displayContainer");
let selector = document.querySelector("#selector");

let cloneArray = [];

let num = 1;

let cloneObj = {
  id: num,
  name: "Mittens",
  pic: "./mittens.jpg",
};

cloneArray.push(cloneObj);
render();

function buttonHandler() {
  num += 1;
  let copy = { ...cloneObj, id: num };
  cloneArray.push(copy);
  render();
}

function render() {
  displayContainer.replaceChildren();
  selector.replaceChildren();
  for (let clone of cloneArray) {
    let cloneCard = document.createElement("div");
    cloneCard.classList.add("cloneCards");

    let petName = document.createElement("h2");
    petName.textContent = clone.name;
    cloneCard.appendChild(petName);

    let petId = document.createElement("p");
    petId.textContent = `ID: ${clone.id}`;
    cloneCard.appendChild(petId);

    let petImg = document.createElement("img");
    petImg.setAttribute("src", `${clone.pic}`);
    cloneCard.appendChild(petImg);

    let button = document.createElement("button");
    button.textContent = "Clone!";
    cloneCard.appendChild(button);

    button.addEventListener("click", buttonHandler);

    displayContainer.appendChild(cloneCard);

    const option = document.createElement("option");
    option.textContent = clone.id;
    option.value = clone.id;
    selector.appendChild(option);
  }
}

selector.addEventListener("change", (e) => {
  const cloneId = +e.target.value;
  console.log(cloneId);
  let selectedClone = cloneArray.filter((clone) => clone.id !== cloneId);
  cloneArray = [...selectedClone];
  render();
});

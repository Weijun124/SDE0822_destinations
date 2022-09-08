let form = document.getElementById("form");
let originValue = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const destination = document.getElementById("destination").value;
  const locationArea = document.getElementById("locationArea").value;
  const photo = document.getElementById("photo").value;
  const description = document.getElementById("description").value;
  originValue = [destination, locationArea, photo, description];
  cardCreated(originValue);
  form.reset();
});

function cardCreated() {
  const rightContainer = document.getElementsByClassName("rightDescription");
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.style.width = "18rem";
  rightContainer[0].append(cardContainer);
  imgCreated(cardContainer);
  informationCreated(cardContainer);
  buttonContainer(cardContainer);
}

function imgCreated(cardContainer) {
  let imgContainer = document.createElement("img");
  if (originValue[2].length !== 0) {
    imgContainer.setAttribute("src", `${originValue[2]}`);
  } else {
    imgContainer.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1661792808945-847fd0d6b78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    );
  }
  imgContainer.setAttribute("alt", `${originValue[0]} at ${originValue[1]}`);
  imgContainer.classList.add("card-img-top");
  cardContainer.append(imgContainer);
}

function informationCreated(cardContainer) {
  let informationContainer = document.createElement("div");
  informationContainer.classList.add("card-body");
  cardContainer.append(informationContainer);
  inforTitle(informationContainer);
  inforDescription(informationContainer);
}

function inforTitle(informationContainer) {
  let theTitle = document.createElement("h5");
  theTitle.classList.add("card-title");
  theTitle.innerText = `${originValue[0]}`;
  informationContainer.append(theTitle);
}

function inforDescription(informationContainer) {
  const theDescription = document.createElement("p");
  theDescription.classList.add("card-text");
  theDescription.innerText = `${originValue[3]}`;
  informationContainer.append(theDescription);
}

function buttonContainer(cardContainer) {
  let buttonKeeper = document.createElement("div");
  buttonKeeper.classList.add("button-container");
  cardContainer.append(buttonKeeper);
  searchBut(buttonKeeper);
  editButton(buttonKeeper);
  deleteBtn(buttonKeeper);
}

function searchBut(buttonKeeper) {
  let searchLocation = document.createElement("a");
  searchLocation.href = `https://www.google.com/maps/place/${originValue[1]}`;
  searchLocation.target = "_blank";
  searchLocation.type = "button";
  searchLocation.classList.add("btn", "btn-info");
  searchLocation.innerText = "Location";
  buttonKeeper.append(searchLocation);
}

function editButton(buttonKeeper) {
  let editCard = document.createElement("button");
  editCard.classList.add("btn", "btn-primary");
  editCard.innerText = "Edit";
  buttonKeeper.append(editCard);
  editCard.addEventListener("click", (e) => {
    const editPhoto=e.target.parentElement.parentElement.children[0];
    const editDesnation=e.target.parentElement.parentElement.children[1].children[0];
    const editDescription=e.target.parentElement.parentElement.children[1].children[1];
    const editLocation=e.target.previousSibling;

    
    const destinationValue = prompt("Edit: Destination", editDesnation.innerText);
    const locationAreaValue = prompt("Edit: Location", editLocation.href);
    const photoValue = prompt("Edit: Photo URLs", editPhoto.src);
    const descriptionValue = prompt("Edit: Descriptions", editDescription.innerText);


    if(editDesnation.innerText!==destinationValue&&destinationValue!==null){
      editDesnation.innerText=destinationValue
    }
    if(editLocation.href!==locationAreaValue&&locationAreaValue!==null){
      editLocation.href=locationAreaValue
    }
    if(editPhoto.src!==photoValue&&photoValue!==null){
      editPhoto.src=photoValue;
    }
    if(editDescription.innerText!==descriptionValue&&descriptionValue!==null){
      editDescription.innerText=descriptionValue;
    }
  })
}

function deleteBtn(buttonKeeper) {
  const deleteCard = document.createElement("button");
  deleteCard.classList.add("btn", "btn-danger");
  deleteCard.innerText = "Delete";
  buttonKeeper.append(deleteCard);
  deleteCard.addEventListener("click", (e) => {
    let confirmValue = confirm("Are you sure you want to delete this card?");
    if (confirmValue) {
      e.target.parentElement.parentElement.remove();
    }
  });
}

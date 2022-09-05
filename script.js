let form = document.getElementById("form");
let destination = document.getElementById("destination");
let locationArea = document.getElementById("locationArea");
let photo = document.getElementById("photo");
let description = document.getElementById("description");
let rightContainer = document.getElementsByClassName("rightDescription");
let checkValue = false;
let originValue = [destination, locationArea, photo,description];
let validEdit=[destination.value, locationArea.value, photo.value,description.value];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFunctions(originValue);
  if (checkValue !== true) {
    return;
  } else {
    cardCreated();
  }
});
function checkFunctions(valueArray) {
  const validValue = valueArray.map((x) => {
    let inValidValue=[];
    if (x.value.trim().length === 0) {
      alert(`Please enter a valid ${x.id}`);
      inValidValue.push(x.value);
    } 
    if(inValidValue.length===0){
      checkValue=true;
    }else{
      checkValue=false;
    }
  });
}

function cardCreated() {
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  cardContainer.style.width = "100%";
  rightContainer[0].append(cardContainer);
  imgCreated(cardContainer);
  informationCreated(cardContainer);
  buttonContainer(cardContainer);
}
function imgCreated(cardContainer) {
  let imgContainer = document.createElement("img");
  imgContainer.setAttribute("src", `${photo.value}`);
  imgContainer.setAttribute("alt", "destination Photo");
  imgContainer.classList.add("card-img-top");
  cardContainer.append(imgContainer);
}
function informationCreated(cardContainer) {
  let informationContainer = document.createElement("div");
  informationContainer.setAttribute(
    "class",
    "card-body,justify-content-center,align-items-center"
  );
  informationContainer.style.width = "100%";
  cardContainer.append(informationContainer);
  inforTitle(informationContainer);
  inforDescription(informationContainer);
}
function inforTitle(informationContainer) {
  let theTitle = document.createElement("h5");
  theTitle.classList.add("card-title");
  theTitle.innerText = `${destination.value.trim()}`;
  informationContainer.append(theTitle);
}
function inforDescription(informationContainer) {
  let theDescription = document.createElement("p");
  theDescription.classList.add("card-text");
  theDescription.innerText = `${description.value.trim()}`;
  informationContainer.append(theDescription);
}
function buttonContainer(cardContainer) {
  let buttonKeeper = document.createElement("div");
  buttonKeeper.setAttribute("class", "button-container");
  cardContainer.append(buttonKeeper);
  searchBut(buttonKeeper);
  editButton(buttonKeeper);
  deleteBtn(buttonKeeper, cardContainer);
}
function searchBut(buttonKeeper) {
  let searchLocation = document.createElement("a");
  searchLocation.href = `https://www.google.com/maps/place/${locationArea.value.trim()}`;
  searchLocation.target = "_blank";
  searchLocation.type = "button";
  searchLocation.setAttribute("class", "btn btn-info");
  searchLocation.innerText = "Location";
  buttonKeeper.append(searchLocation);
}
function editButton(buttonKeeper) {
  let editCard = document.createElement("button");
  editCard.type = "button";
  editCard.setAttribute("class", "btn btn-primary");
  let randomId = Math.floor(Math.random() * 20000);
  editCard.id = `edit${randomId}`;
  editCard.innerText = "Edit";
  buttonKeeper.append(editCard);
  let editB = document.getElementById(`edit${randomId}`);

  editB.addEventListener("click", (e) => {
    destinationValue = prompt("Edit: Destination");
    locationAreaValue = prompt("Edit: Location");
    photoValue = prompt("Edit: Photo URLs");
    descriptionValue = prompt("Edit: Descriptions");
    let validValue = [destinationValue, locationAreaValue, photoValue,descriptionValue];
    console.log(checkEdit(validValue))
    e.target.parentElement.parentElement.children[0].src = checkEdit(validValue)[2];
    e.target.parentElement.parentElement.children[1].children[0].innerText =
    checkEdit(validValue)[0];
    e.target.parentElement.parentElement.children[1].children[1].innerText =
    checkEdit(validValue)[3];
    e.target.parentElement.parentElement.children[2].href = `https://www.google.com/maps/place/${checkEdit(validValue)[1]}`;
  });
}
function deleteBtn(buttonKeeper, cardContainer) {
  let deleteCard = document.createElement("button");
  deleteCard.type = "button";
  deleteCard.setAttribute("class", "btn btn-danger");
  let randomId = Math.floor(Math.random() * 20000);
  deleteCard.id = `delete${randomId}`;
  deleteCard.innerText = "Delete";
  buttonKeeper.append(deleteCard);
  let deleteB = document.getElementById(`delete${randomId}`);
  deleteB.addEventListener("click", () => {
    let confirmValue = confirm("Are you sure you want to delete this card?");
    if (confirmValue) {
      cardContainer.remove();
    }
  });
}

function checkEdit(validValue) {
  let count=0;
  for(let value of validValue) {
    if(value!=null) {
      validEdit.splice(count,1,validValue[count])
      count++
    }else{
      count++
    }
  }
return validEdit;
}
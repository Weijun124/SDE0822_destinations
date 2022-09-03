let form = document.getElementById("form");
let destination = document.getElementById("destination");
let locationArea = document.getElementById("locationArea");
let photo = document.getElementById("photo");
let description = document.getElementById("description");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValue();
});

function inputValue() {
  let destinationValue = destination.value.trim();
  let locationAreaValue = locationArea.value.trim();
  let photoValue = photo.value.trim();
  let descriptionValue = description.value.trim();
  displayValue(
    destinationValue,
    locationAreaValue,
    photoValue,
    descriptionValue
  );
}

function displayValue(
  destinationValue,
  locationAreaValue,
  photoValue,
  descriptionValue
) {
  let rightBox = document.getElementsByClassName("right-description");
  let randomId = Math.floor(Math.random() * 2000);
  console.log(randomId);
  let rightContent = `
  <div class="card" style="width: 100%;" id="${randomId}">
    <img src="${photoValue}" class="card-img-top" alt="destination Photo" style="width: 100%;max-height:200px;" >
    <div class="card-body justify-content-center align-items-center">
        <h5 class="card-title d-flex justify-content-center align-items-center">${destinationValue}---${locationAreaValue}</h5>
        <p class="card-text flex-wrap" width="100%"">${descriptionValue}</p>
        <a href="https://www.google.com/search?q=${destinationValue}" class="btn btn-outline-primary"  style="width: 25%;margin-left:20%;">Search</a>
        <button class="btn btn-outline-danger" type="button" style="width: 25%;" onClick="remove(this)">Delete</button>
        <button class="btn btn-outline-danger" type="button" style="width: 25%;" onClick="editButton(this)">Edit</button>
    </div>
  </div>`;
  rightBox[0].innerHTML += rightContent;
}

function editButton(ele) {
  destinationValue = prompt("Edit: Destination");
  locationAreaValue = prompt("Edit: Location");
  photoValue = prompt("Edit: Photo URLs");
  descriptionValue = prompt("Edit: Descriptions");

  ele.parentElement.previousSibling.src = photoValue;
  ele.parentElement.children[0].innerText = `${destinationValue}---${locationAreaValue}`;
  ele.parentElement.children[1].innerText = `${descriptionValue}`;
  ele.parentElement.children[2].href = `https://www.google.com/search?q=${destinationValue}`;
}

function remove(ele) {
  ele.parentElement.parentElement.remove();
}
// function deleteButton(randomId) {
//   let deleteBtn = document.getElementById(`deleteBtn${randomId}`);
//   deleteBtn.addEventListener("click", (e) => {
//     e.target.parentElement.parentElement.remove();

// })}

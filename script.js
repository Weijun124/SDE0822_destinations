import { elementFactory,handleDelete,handleEdit } from "./helperFun.js";

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const destination = document.getElementById("destination").value;
  const locationArea = document.getElementById("locationArea").value;
  const photo = document.getElementById("photo").value;
  const description = document.getElementById("description").value;
  const rightContainer = document.getElementsByClassName("rightDescription");
  const defImg =
    "https://images.unsplash.com/photo-1661792808945-847fd0d6b78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  document.getElementById("form").reset();

  const cardContainer = elementFactory({
    eltType: "div",
    classNames: ["card"],
    parentElt: rightContainer[0],
    attrs: [{ name: "style", value: "width:18rem" }],
  });

  const imgContainer = elementFactory({
    eltType: "img",
    classNames: ["card-img-top"],
    parentElt: cardContainer,
    attrs: [
      { name: "alt", value: "can not find picture" },
      { name: "src", value: photo.length === 0 ? defImg : photo },
    ],
  });

  const informationContainer = elementFactory({
    eltType: "div",
    classNames: ["card-body"],
    parentElt: cardContainer,
  });

  const theTitle = elementFactory({
    eltType: "h5",
    classNames: ["card-title"],
    parentElt: informationContainer,
    text: `${destination}`,
  });

  const theDescription = elementFactory({
    text: description,
    eltType: "p",
    classNames: ["card-text"],
    parentElt: informationContainer,
  });

  const buttonKeeper = elementFactory({
    eltType: "div",
    classNames: ["button-container"],
    parentElt: cardContainer,
  });

  const searchLocation = elementFactory({
    eltType: "a",
    classNames: ["btn", "btn-info"],
    text: "Location",
    parentElt: buttonKeeper,
  });
  searchLocation.href = `https://www.google.com/maps/place/${locationArea}`;
  searchLocation.target = "_blank";

  const editCard = elementFactory({
    eltType: "button",
    classNames: ["btn", "btn-primary"],
    text: "Edit",
    parentElt: buttonKeeper,
    eventListener: {eventType:"click", eventHandler: handleEdit}
  });

  const deleteCard = elementFactory({
    eltType: "button",
    classNames: ["btn", "btn-danger"],
    text: "Delete",
    parentElt: buttonKeeper,
    eventListener: {eventType: "click", eventHandler : handleDelete},
  });
})

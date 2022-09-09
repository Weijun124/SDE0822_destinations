export function elementFactory({
  eltType,//eltType:"div"
  classNames,//classNames:["card"]
  parentElt,
  text,
  attrs,
  eventListener,
}) 

{
  if (!eltType) {
    return undefined;
  }
  const newElt = document.createElement(eltType);
  if (classNames) {
    newElt.classList.add(...classNames);
  }
  if (text) {
    newElt.innerText = text;
  }
  if (parentElt) {
    parentElt.appendChild(newElt);
  }
  if (attrs) {
    for (const attr of attrs) {
      const { name: arrtName, value: attrValue } = attr;
      newElt.setAttribute(arrtName, attrValue);
    }
  }
    if (eventListener) {
      const { eventType, eventHandler } = eventListener;
      newElt.addEventListener(eventType, eventHandler);
    }
  return newElt;
}
export function handleEdit(e) {
  const editPhoto = e.target.parentElement.parentElement.children[0];
  const editDesnation =
    e.target.parentElement.parentElement.children[1].children[0];
  const editDescription =
    e.target.parentElement.parentElement.children[1].children[1];
  const editLocation = e.target.previousSibling;

  const destinationValue = prompt("Edit: Destination", editDesnation.innerText);
  const locationAreaValue = prompt("Edit: Location", editLocation.href);
  const photoValue = prompt("Edit: Photo URLs", editPhoto.src);
  const descriptionValue = prompt(
    "Edit: Descriptions",
    editDescription.innerText
  );

  if (editDesnation.innerText !== destinationValue && destinationValue) {
    editDesnation.innerText = destinationValue;
  }
  if (editLocation.href !== locationAreaValue && locationAreaValue) {
    editLocation.href = locationAreaValue;
  }
  if (editPhoto.src !== photoValue && photoValue) {
    editPhoto.src = photoValue;
  }
  if (editDescription.innerText !== descriptionValue && descriptionValue) {
    editDescription.innerText = descriptionValue;
  }
}
export function handleDelete(e) {
  let confirmValue = confirm("Are you sure you want to delete this card?");
  if (confirmValue) {
    while (e.firstChild) {
      e.firstChild.remove();
    }
    e.target.parentElement.parentElement.remove();
  }
}

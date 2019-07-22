// let rootNode = document.getElementById("root");

let li = document.getElementsByTagName("li");
let done = document.getElementsByClassName("done");
let edit = document.getElementsByClassName("edit");

for (let i = 0; i < done.length; i++) {
  done[i].addEventListener("click", function(e) {
    let targetStyle = e.target.style.opacity;
    console.log(targetStyle, " - targetStyle");
    targetStyle === "0"
      ? (e.target.style.opacity = "1")
      : (e.target.style.opacity = "0");
  });
}
for (let i = 0; i < edit.length; i++) {
  edit[i].addEventListener("click", function(e) {
    let parentDiv = e.target.parentElement.parentElement;
    let span = e.target.previousElementSibling;
    console.log(e.target, " - e");
    console.log(span, " - span");
    let parentLi = e.target.parentElement.parentElement.parentElement;

    console.log(parentDiv, " - parentDiv");
    console.log(parentLi, " - parentLi");
    parentDiv.style.display = "none";

    let input = document.createElement("input");
    let button = document.createElement("i");
    let inputBlock = document.createElement("div");

    inputBlock.classList.add("inputBlock");

    let valueInput;

    input.setAttribute("type", "text");
    button.classList.add("material-icons");
    button.innerHTML = "save";
    console.log(input);
    console.log(button);
    parentLi.append(inputBlock);
    inputBlock.append(input);
    inputBlock.append(button);

    button.addEventListener("click", function() {
      valueInput = input.value;
      console.log(valueInput, " - valueInput");
      inputBlock.style.display = "none";
      parentDiv.style.display = "flex";

      span.innerHTML = valueInput;
    });
  });
}

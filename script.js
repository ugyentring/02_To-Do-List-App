const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//This function will generate li items whenever task is being added
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// cross click function
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

// This function will store the added task in the browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// This function will display the added task whenever we get into the app again
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()

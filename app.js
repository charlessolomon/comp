// const listDropdown = document.querySelector(".list-con");
// const list = document.querySelector(".list");

// listDropdown.addEventListener("click", () => {
//     const noteDrop = document.querySelector(".board-flex-drop");
//     if (noteDrop.classList.contains("show-note")) {
//         noteDrop.classList.remove("show-note");
//     }else if (iconDrop.classList.contains("show-alert")) {
//         iconDrop.classList.remove("show-alert");
//     }
//     list.classList.toggle("show");
// });

// const noteDropdown = document.querySelector(".btn-drop");
// const noteDrop = document.querySelector(".board-flex-drop");

// noteDropdown.addEventListener("click", () => {
//     if (list.classList.contains("show")) {
//         list.classList.remove("show");
//     }else if (iconDrop.classList.contains("show-alert")) {
//         iconDrop.classList.remove("show-alert");
//     }
//     noteDrop.classList.toggle("show-note");
// });

// const iconDropdown = document.querySelector(".alert-drop");
// const iconDrop = document.querySelector(".board-flex-dro");

// iconDropdown.addEventListener("click", () => {
//     if (noteDrop.classList.contains("show-note")) {
//         noteDrop.classList.remove("show-note");
//     }else if (list.classList.contains("show")) {
//         list.classList.remove("show");
//     }
//     iconDrop.classList.toggle("show-alert");
// });




function toggleDropdown(clickedElement, dropdownElement, otherDropdowns) {
    if (dropdownElement.classList.contains("show")) {
        dropdownElement.classList.remove("show");
    } else {
        otherDropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains("show")) {
                dropdown.classList.remove("show");
            }
        });
        dropdownElement.classList.add("show");
    }
}


const listDropdown = document.querySelector(".list-con");
const list = document.querySelector(".list");
const noteDropdown = document.querySelector(".btn-drop");
const noteDrop = document.querySelector(".board-flex-drop");
const iconDropdown = document.querySelector(".alert-drop");
const iconDrop = document.querySelector(".board-flex-dro");


listDropdown.addEventListener("click", () => {
    toggleDropdown(listDropdown, list, [noteDrop, iconDrop]);
});

noteDropdown.addEventListener("click", () => {
    toggleDropdown(noteDropdown, noteDrop, [list, iconDrop]);
});

iconDropdown.addEventListener("click", () => {
    toggleDropdown(iconDropdown, iconDrop, [list, noteDrop]);
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



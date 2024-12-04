
const menuButton = document.getElementById("menu-button");
const menu = document.querySelector("header nav");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize(); 
window.addEventListener("resize", handleResize);


function viewerTemplate(pic, alt) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>
  `;
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove();
  }
}

function viewHandler(event) {

  if (event.target.tagName === "IMG") {
    const clickedImage = event.target;
    const src = clickedImage.getAttribute("src");
    const alt = clickedImage.getAttribute("alt");


    const fullImageSrc = src.replace("-sm", "-full");

  
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, alt));

    
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
  }
}

//gal click
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

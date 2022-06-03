document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "../assets/img/img1bong.jpg",
  "../assets/img/img2pica.jpg",
  "../assets/img/img3seda.jpg",
  "../assets/img/img4feeding.jpg",
  "../assets/img/img5sustrato.jpg",
  "../assets/img/img1bong.jpg",
  "../assets/img/img2pica.jpg",
  "../assets/img/img3seda.jpg",
  "../assets/img/img4feeding.jpg",
  "../assets/img/img5sustrato.jpg",
  "../assets/img/img4feeding.jpg",
];

let imgPrice=[
  2500,
  1500,
  200,
  3000,
  3200,
  2500,
  1500,
  200,
  3000,
  3200,
  3000
]

let imgTitle =[
  "Bong de vidrio",
  "Picador de aluminio",
  "Papel de seda",
  "Sales x25g",
  "Sustrato x80 litros",
  "Bong",
  "Picador de aluminio",
  "Papel de seda",
  "Sales x25g",
  "Sustrato x80 litros",
  "Sales x25g",
]

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {
  
  let mainView = document.getElementById("mainView");
    mainView.innerHTML=`<div class="card card-carrousel" style="width: 18rem; border-radius: 40px">
    <div class="d-flex justify-content-center">
    <img class="card-img-top mt-2" style="width: 85%; border-radius:35px" src="${imgObject[mainImg]}" alt="Card image cap">
    </div>
    <div class="card-body">
      <h4 class="card-title mt-3" style="font-weight: bold">${imgTitle[mainImg]}</h4>
      <h3 class="card-text mt-3" >$ ${imgPrice[mainImg]}</h3>
      <div class="d-flex justify-content-center mt-4">
      <a href="#" class="btn btn-outline-success" style="border-radius: 20px" >+ Agregar al carrito</a>
      </div>
    </div>
  </div>`

  let leftView = document.getElementById("leftView");
  leftView.innerHTML=`<div class="card card-carrousel" style="width: 18rem; border-radius: 40px">
    <div class="d-flex justify-content-center">
    <img class="card-img-top mt-2" style="width: 85%; border-radius:35px" src="${imgObject[prevImg]}" alt="Card image cap">
    </div>
    <div class="card-body">
      <h5 class="card-title mt-3" style="font-weight: bold">${imgTitle[prevImg]}</h5>
      <p class="card-text mt-3" style="font-weight: bold">$ ${imgPrice[prevImg]}</p>
      <div class="d-flex justify-content-center mt-4">
      <a href="#" class="btn btn-outline-success" style="border-radius: 20px">+ Agregar al carrito</a>
      </div>
    </div>
  </div>`
  
  let rightView = document.getElementById("rightView");
  rightView.innerHTML=`<div class="card card-carrousel" style="width: 18rem; border-radius: 40px">
  <div class="d-flex justify-content-center">
  <img class="card-img-top mt-2" style="width: 85%; border-radius:35px" src="${imgObject[nextImg]}" alt="Card image cap">
  </div>
  <div class="card-body">
    <h5 class="card-title mt-3" style="font-weight: bold">${imgTitle[nextImg]}</h5>
    <p class="card-text mt-3" style="font-weight: bold">$ ${imgPrice[nextImg]}</p>
    <div class="d-flex justify-content-center mt-4">
    <a href="#" class="btn btn-outline-success" style="border-radius: 20px">+ Agregar al carrito</a>
    </div>
  </div>
</div>`
};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();
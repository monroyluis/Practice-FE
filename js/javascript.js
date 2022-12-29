const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
const menuHamIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const aside = document.querySelector (".product-detail");
const cardsContainer = document.querySelector (".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu (){
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: "Bike",
  price:"720",
  image: "./images/pexels-philipp-m-100582.jpg",
});
productList.push({
  name: "Apple M2",
  price: "1650",
  image: "./images/M2_Apple_MacBook_Pro_14_Mac_Air_2022.jpeg",
});
productList.push({
  name: "Beach chair",
  price:"220",
  image: "./images/pexels-jonas-ferlin-beachchair.jpg",
});
productList.push({
  name: "Chair",
  price:"240",
  image: "./images/pexels-hormel-2762247.jpg",
});
productList.push({
  name: "Expresso Machine",
  price:"840",
  image: "./images/cafetera-expresso-breville-870.jpeg",
});
productList.push({
  name: "Taylor Made golf bag",
  price: "350",
  image: "./images/TaylorMadegolf.jpeg",
});


function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement ("div");
    productCard.classList.add("product-card");
    
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    
    const productInfo = document.createElement ("div");
    productInfo.classList.add("product-info");
    
    const productInfoDiv = document.createElement ("div");
    
    const productPrice = document.createElement ("p");
    productPrice.innerText ='$' + product.price;
    
    const productName = document.createElement ("p");
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement ("figure");
    const productImgCart = document.createElement ("img");
    productImgCart.setAttribute("src","./images/icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
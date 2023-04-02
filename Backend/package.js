
// *********************************************(Login/Signup)*********************************************


let loggedInUserName=JSON.parse(localStorage.getItem("loggedInUserName"))||[];  
if(loggedInUserName==0){
document.querySelector('#inner__login-signup__button').innerText="LOGIN / SIGNUP";
}
else{
document.querySelector('#inner__login-signup__button').innerText=loggedInUserName;
}
let modelbtn = document.getElementById('navbar__city__button');
let modelbg = document.querySelector('.rm-city-select__background')
let modelcloss = document.querySelector('#close-city-selector-model');




// *****************************************************(cityselect)*********************************************



modelbtn.addEventListener("click", function () {
    modelbg.classList.add('model_active');
})
modelcloss.addEventListener("click", function () {
    modelbg.classList.remove('model_active');
    window.location.reload();
})

let cityselect = document.querySelector('#city__name__boxes');
let cityNameLS;
cityselect.addEventListener('click', function (event) {
    cityNameLS = event.target.innerText
    localStorage.setItem("cityNameLS", JSON.stringify(cityNameLS));
})
let cityPrint = JSON.parse(localStorage.getItem("cityNameLS")) || " ";
document.querySelector('#print_city_name').innerText = cityPrint;



//******************************************************(data)************************************************* */



let packege = [
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/bedroom-v1_new.jpg",
        item_name: "Bedroom",
        item_price: "1699",
        image_quantity: "3",
        cartID: "Bedroom",
        quantity: "1",
    },
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/living-room-v2.jpg",
        item_name: "Living Room",
        item_price: "1499",
        image_quantity: "2",
        cartID: "Living Room",
        quantity: "1",
    },
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/appliances.jpg",
        item_name: "Appliances",
        item_price: "799",
        image_quantity: "3",
        cartID: "Appliances",
        quantity: "1",
    },
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/study-room-v1.jpg",
        item_name: "Work From Home (WFH)",
        item_price: "899",
        cartID: "Work From Home (WFH)",
        quantity: "1",
    },
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/dining-v1.jpg",
        item_name: "Kitchen & Dining",
        item_price: "1299",
        image_quantity: "3",
        cartID: "Kitchen & Dining",
        quantity: "1",
    },
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/smart-packages.jpg",
        item_name: "Smart Home",
        item_price: "599",
        image_quantity: "3",
        cartID: "Smart Home",
        quantity: "1",
    },
    {
        img_url: "https://www.rentomojo.com/public/images/category/package-bg/fitness-packages.jpg",
        item_name: "Fitness & Exercise",
        item_price: "999",
        image_quantity: "3",
        cartID: "Fitness & Exercise",
        quantity: "1",
    }
]
let container_item_class = document.querySelector('.container_item');




//*****************************************(read and rendering data)******************************************* */



packege.forEach(function (ele) {
    let item_div = document.createElement('div');
    let productImg = document.createElement('img');
    productImg.src = ele.img_url;
    let productName = document.createElement('h3');
    productName.innerText = ele.item_name;
    let child_div = document.createElement('div');

    let price_div = document.createElement('div');
    let productPrice = document.createElement('span');
    productPrice.innerText = "Rs." + ele.item_price + "/mo";
    price_div.append(productPrice);

    let addToCart = document.createElement("button");
    addToCart.innerText = "Add To Cart";
    addToCart.addEventListener("click", () => {
        AddToCartFunction(ele);
    })

    let imageQ_div = document.createElement('div');
    imageQ_div.append(addToCart);
    child_div.append(price_div, imageQ_div);

    item_div.append(productImg, productName, child_div);

    container_item_class.append(item_div);
})



// ***********************************************(add to cart)************************************************



let LSdata = JSON.parse(localStorage.getItem("allCartData")) || []
function AddToCartFunction(ele) {

    let alreadyIncart = 0;
    LSdata.forEach(function (fEle) {
        if (fEle.cartID == ele.cartID) {
            alreadyIncart = 1;
            return;
        }
    })
    if (alreadyIncart == 0) {
        Swal.fire('Packege added to cart')
        LSdata.push(ele);
        localStorage.setItem("allCartData", JSON.stringify(LSdata));
        return;
    }
    else {
        Swal.fire('Packege already added to cart')
        return;
    }

}


//***************************************************(read more)************************************************ */



let lessMore = document.querySelector('#readmorebtn');
lessMore.addEventListener('click', myFunction);
function myFunction() {
    var dots = document.getElementById("less");
    var moreText = document.getElementById("more");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        lessMore.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        lessMore.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}



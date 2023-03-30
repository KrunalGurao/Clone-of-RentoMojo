    
    // *******************************************(city_choose)************************************************
    


    let modelbtn = document.getElementById('navbar__city__button');
    let modelbg = document.querySelector('.rm-city-select__background')
    let modelcloss = document.querySelector('#close-city-selector-model');

    modelbtn.addEventListener("click", function () {
        console.log("hello")
        modelbg.classList.add('model_active');
    })
    modelcloss.addEventListener("click", function () {
        modelbg.classList.remove('model_active');
        window.location.reload();
    })



    //**************************************************(login/signup)**************************************************



    let startModelBTN = document.querySelector('#login-signup__button');
    let modelBG_ON_OFF = document.querySelector('.logInOut_container');
    let stopModelBTN = document.querySelector('.closeBTN');

    startModelBTN.addEventListener('click', function () {
        modelBG_ON_OFF.classList.add('logInOut_model_active');
    })
    stopModelBTN.addEventListener('click', function () {
        modelBG_ON_OFF.classList.remove('logInOut_model_active');
    })

    

    //********************************************(mob. num count)********************************************** */



    let numberCount = document.querySelector('#monNumber');
    numberCount.addEventListener('input', () => {
        let print = document.querySelector('#monNumber').value.length;
        document.querySelector('#updateNUM').innerText = print;
    })



    //*********************************************(login data) ************************************************/



    let credentialLogInData = JSON.parse(localStorage.getItem("UserData")) || [];
    let continueBTN = document.querySelector('.continueBTN');
    let monNumber = document.querySelector('#monNumber');

    continueBTN.addEventListener('click', () => {
        let flage = 0;
        credentialLogInData.forEach(function (ele) {
            if (ele.user_number == monNumber.value && flage == 0) {
                let print1 = ele.user_name
                localStorage.setItem("loggedInUserName",JSON.stringify(print1));
                flage = 1;
            }
        })
        if (flage == 0 || flage=="") {
            Swal.fire({
                icon: 'error',
                title: 'Unable to move forword',
                text: 'Invalid Mobile Number',
              })
              setTimeout(() => {
                window.location.href = "login.html"
              }, 3500);
            
        }
        else {
            Swal.fire('Welcome to Rental Mania')
            setTimeout(() => {
              window.location.href="index.html"
            }, 3500);
        }
    })

let loggedInUserName=JSON.parse(localStorage.getItem("loggedInUserName"))||[];  
if(loggedInUserName==0){
document.querySelector('#inner__login-signup__button').innerText="LOGIN / SIGNUP";
}
else{
document.querySelector('#inner__login-signup__button').innerText=loggedInUserName;
}



// **********************************************(city_selection)*******************************************

  
    let cityselect = document.querySelector('#city__name__boxes');
    let cityNameLS;
    cityselect.addEventListener('click', function (event) {
        cityNameLS = event.target.innerText
        localStorage.setItem("cityNameLS", JSON.stringify(cityNameLS));
    })

    let cityPrint = JSON.parse(localStorage.getItem("cityNameLS")) || " ";
    document.querySelector('#print_city_name').innerText = cityPrint;


 

// *****************************************************(slider)***************************************************




    let carouselSlide = document.querySelector('.carousel-slider');

    let carouselImages = document.querySelectorAll('.carousel-slider > img'); 
    let prebtn = document.querySelector('#prebtn');
    let nextbtn = document.querySelector('#nextbtn');
    let counter = 1;
    let size = carouselImages[1].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    nextbtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })
    prebtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    })
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'last-image_clone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'first-image_clone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })




    // *************************************************(read_more)*************************************************


    
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
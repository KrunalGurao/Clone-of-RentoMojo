document.querySelector("#submit").addEventListener("click", checkFunction);
let check = JSON.parse(localStorage.getItem("otp"))
function checkFunction(event) {
    takeInput = document.querySelector("#otpbox").value;
    event.preventDefault();
    if (takeInput == check) {
        Swal.fire('Your order has been placed')
        setTimeout(() => {
            window.location.href="index.html";
        },2500);
       
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Unable to move forword',
            text: 'Wrong OTP entered',
          })
    }
}
let data = JSON.parse(localStorage.getItem("payAmount"))
document.querySelector("#submitButton").value = "Pay" + " " + "Rs." + " " + data;
console.log(data)

document.querySelector("form").addEventListener("submit", myfun)
function myfun(event) {
    event.preventDefault();
    let takeCard = document.querySelector("#cardNumber").value;
    let takeCvv = document.querySelector("#cvvNum").value;
    let takeExpiryDate = document.querySelector("#expiryDate").value;
    let takeName = document.querySelector("#name").value;

    console.log(takeCard, takeCvv, takeName, takeExpiryDate)

    if (takeCard == "" || takeCvv == "" || takeExpiryDate == "" || takeName == "") {
        Swal.fire({
            icon: 'error',
            title: 'Unable to move forword',
            text: 'Please fill all the details!',
          })
    }
    else {
        if (takeCard == "123456789" || takeCvv == "007") {
            let timerInterval
Swal.fire({
  title: 'Verifying details!',
  html: 'verifying details in <b></b> milliseconds...',
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
});
            localStorage.setItem("otp", JSON.stringify("1432"));
            document.querySelector('#container button').style.backgroundColor="rgb(71,207,115)  ";
           
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Unable to move forword',
                text: 'Wrong Credentails',
              })
        }
    }

}

let inputEvent = document.querySelector('#cardNumber');
let checkValue = 0;
inputEvent.addEventListener('input', () => {
    checkValue++;
    if (checkValue == 4) {
        let inputBoxValues = document.querySelector('#cardNumber').value;
        inputBoxValues += " ";
        document.querySelector('#cardNumber').value = inputBoxValues;
        checkValue = 0;
    }

})
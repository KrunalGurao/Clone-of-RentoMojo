let stopModelBTN = document.querySelector('.closeBTN');
stopModelBTN.addEventListener('click', function () {
   window.location.href="index.html";
})
let numberCount = document.querySelector('#mobnum');
numberCount.addEventListener('input', () => {
    let print = document.querySelector('#mobnum').value.length;
    document.querySelector('#updateNUM').innerText = print;
})
let LSdata = JSON.parse(localStorage.getItem("UserData")) || [];
let username = document.querySelector('#username');
let useremail = document.querySelector('#useremail');
let usermobile = document.querySelector("#mobnum");
let continueBTN = document.querySelector('.continueBTN');

//***************************************************************************************************** */

continueBTN.addEventListener('click', () => {
    
  let data={
    user_name:username.value,
    user_email:useremail.value,
    user_number:usermobile.value,
  }    
  LSdata.push(data)

  if(username.value==""||useremail.value==""||usermobile.value==""){
    Swal.fire({
      icon: 'error',
      title: 'Unable to move forword',
      text: 'Please fill all the details!',
    })
  }
  else{
      localStorage.setItem("UserData",JSON.stringify(LSdata));
      Swal.fire('Welcome to Rental Mania')
      window.location.href="index.html"
  }

})

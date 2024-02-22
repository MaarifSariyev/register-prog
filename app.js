let nameInput = document.getElementById("name")
let alertText = document.querySelector(".alert")

let surNameInput = document.getElementById("surname");
let surAlertText = document.querySelector(".sur-alert")

let phoneInput = document.getElementById("number")
let numAlertText = document.querySelector(".num-alert")

let mailInput = document.getElementById("email")
let mailAlertText = document.querySelector(".mail-alert")

let passInput = document.getElementById("password");
let passwordAlertText =document.querySelector(".password-alert");

let repeatPasswordInput = document.getElementById("rpassword")

let submitBtn = document.getElementById("submit")

let eyeImg = document.querySelector(".eyeImage");

var a;

changeType = function(){
  if(a==1){
    eyeImg.src = "./New folder (8)/images.jpg"
    passInput.type = "password"
    a = 0
  }
  else{
    eyeImg.src = "./New folder (8)/download.jpg"
    passInput.type = "text"
    a = 1
  }
}

eyeImg.addEventListener("click",changeType)


nameInput.addEventListener("keyup",function () {
   console.log(nameInput.value.length);
   if (nameInput.value.length == 0) {
    alertText.textContent = "Name is required "
    nameInput.style.borderColor = "red"
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = "grey"
   }
  
   else if(nameInput.value.length > 0 && nameInput.value.length<4){
     alertText.textContent = "Name must be minimum 3 character "
     nameInput.style.borderColor = "red"
     submitBtn.disabled = true
     submitBtn.style.backgroundColor = "grey"
   }

   else if(nameInput.value.length >=2){
    alertText.textContent = " "
    nameInput.style.borderColor = "green"
    submitBtn.disabled = false
    submitBtn.style.backgroundColor = "#FE3737"
   }
})

surNameInput.addEventListener("keyup" ,function () {
   console.log(nameInput.value.length);
   if (surNameInput.value.length == 0) {
    surAlertText.textContent = "Surname is required "
    surNameInput.style.borderColor = "red"
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = "grey"
   }
  
   else if(surNameInput.value.length >0 && nameInput.value.length<4){
    surAlertText.textContent = "Surname must be minimum 3 character "
    surNameInput.style.borderColor = "red"
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = "grey"
   }

  if (surNameInput.value.length >3) {
    surAlertText.textContent = " "
    surNameInput.style.borderColor = "green"
    submitBtn.disabled = false
    submitBtn.style.backgroundColor = "#FE3737"
  }
} )


phoneInput.addEventListener("keyup" ,function () {
    console.log(nameInput.value.length);
    if (phoneInput.value.length == 0) {
        numAlertText.textContent = "Phone is required "
        phoneInput.style.borderColor = "red"
        submitBtn.disabled = true
        submitBtn.style.backgroundColor = "grey"
    }

    else{
      numAlertText.textContent = " "
      phoneInput.style.borderColor = "green"
      submitBtn.disabled = false
      submitBtn.style.backgroundColor = "#FE3737"
    }
   
   
 } )


 mailInput.addEventListener("keyup" ,function () {
    console.log(nameInput.value.length);
   

    console.log(mailInput.value.split(""))

     if (mailInput.value.includes("@")) {
        mailAlertText.textContent = " "
        mailInput.style.borderColor = "green"
        submitBtn.disabled = false
        submitBtn.style.backgroundColor = "#FE3737"
    }
    
    else if (!mailInput.value.includes("@")){
        mailAlertText.textContent = "Please write your email "
        mailInput.style.borderColor = "red"
        submitBtn.disabled = true
        submitBtn.style.backgroundColor = "grey"
    }

    if (mailInput.value.length == 0) {
        mailAlertText.textContent = "Email is required "
        mailInput.style.borderColor = "red"
        submitBtn.disabled = true
        submitBtn.style.backgroundColor = "grey"
    }
   
    
 } )


 const requirenments = 
 [
 {
   regex : /[A-Z]/, index : 0
 },
 {
   regex : /[a-z]/, index : 1
 }
 ]

 passInput.addEventListener("keyup" ,function () {
  console.log( passInput.value.length);
  if ( passInput.value.length == 0) {
    passwordAlertText.textContent = "Password is required "
    passInput.style.borderColor = "red"
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = "grey"
  }

  else if(passInput.value.length < 8){
    passwordAlertText.textContent = "At least 8 symbol"
    passInput.style.borderColor = "red"
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = "grey"
  }

  else{
    passwordAlertText.textContent = " "
    passInput.style.borderColor = "green"
    submitBtn.disabled = false
    submitBtn.style.backgroundColor = "#FE3737"
    
  }
 
 
} )
 
repeatPasswordInput.addEventListener("keyup" ,function () {
  if (repeatPasswordInput.value == passInput.value ) {
    repeatPasswordInput.style.borderColor = "green"
    submitBtn.disabled = false
    submitBtn.style.backgroundColor = "#FE3737"
  }

  else{
    repeatPasswordInput.style.borderColor = "red"
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = "grey"
  }
  
 
 
} )








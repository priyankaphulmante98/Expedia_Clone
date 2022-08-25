var form = document.querySelector("form");

form.addEventListener("submit" ,function(event){

    event.preventDefault();

    var data ={
        email : form.email.value,
        name: form.name.value,
        surname : form.surname.value,
       password: form.password.value,

    }
// console.log(data);
    localStorage.setItem("userData", JSON.stringify(data));

           window.location.href = "valid.html";
})

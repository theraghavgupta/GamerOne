"use strict";
var username=0;
var pass=0;
var verify;
const username_input= document.getElementById("userBox");
const password_input= document.getElementById("passBox");
const login_input=document.getElementById("logButton")

login_input.addEventListener('click', function check(){
    username= username_input.value;
    pass=password_input.value;
    console.log(username_input.value);
    //console.log(password_input.value);
    if((username== "raghav") && (pass=="login"))
    {  open('Profile.html')
        console.log("Aaaiye!")}
    else
    {window.alert("Wrong Credentials!")
        console.log("Maa chuda");}
   
    username=0;
    pass=0;
});

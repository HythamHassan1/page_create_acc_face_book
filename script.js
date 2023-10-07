function fromvalidate(){

    var error = document.getElementById("error");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;

    var text = "" ;


    if(name.length == ""){
        text = "Put Full Name";
        error.innerHTML = text;
        return false ;
    }

   
    else if(email.indexOf("@") == -1){
        text = "Set conditions @";
        error.innerHTML = text;
        return false ;
    }
    else if(password.length < 5 && password == ""){

        text = "The password is weak";
        error.innerHTML = text;
        return false ;
    }
    else if( confirm_password.length < 5 && password == ""){

        text = "The password no true";
        error.innerHTML = text;
        return false ;
    }
   
    else{
        text = "Done"
        error.innerHTML = text;
        error.style.color = "green"
        return true ;

    }
  
}



// LOGIN

function loginvalidate(){
    var email_2 = document.getElementById("email_2").value;
    var passwor_2 = document.getElementById("passwor_2").value;
    var error_2 = document.getElementById("error_2");

    var text_2 = ""

    if(email_2.indexOf("@") == -1){

        text_2 = "Set conditions @";
        error_2.innerHTML = text_2;
        return false ;
    }
    else if(passwor_2.length < 3){
        text_2 = "The password is weak";
        error_2.innerHTML = text_2;
        return false ;
    }
    else{
        text_2 = "Done";
        error_2.innerHTML = text_2;
        error_2.style.color = "green"
        return true ;
       
    }
}

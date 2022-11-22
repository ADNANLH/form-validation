var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var email = document.getElementById('email').value;
var telephone = document.getElementById('telephone').value;
var clubs = document.getElementById("Club(s)-select");

var regex = /^[a-z]{1,30}$/ig;
var regex = /^[a-z]+\.[a-z]+\@ofppt.ma$/ig;
var regex = /^[0]+[5-7]+\d{8}$/ig;
document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    if(firstname === '') {
        document.getElementById('name').innerHTML = 'Nome is required.';
        document.getElementById('firstname').style.borderColor="red";

    }else if (regex.test(firstname)) {
        document.getElementById('name').innerHTML = '';
        document.getElementById('firstname').style.borderColor="#09c372";

       
    }else if (firstname.length>30){
        document.getElementById('name').innerHTML = 'your first name too long';
        
    }else {
        document.getElementById('name').innerHTML = 'dont use numers or chifre';
        document.getElementById('firstname').style.borderColor="red";
    }

    if(lastname === '') {
        document.getElementById('namelast').innerHTML = 'Nome is required.';
        document.getElementById('lastname').style.borderColor="red";

    }else if (regex.test(lastname)) {
        document.getElementById('namelast').innerHTML = '';
        document.getElementById('lastname').style.borderColor="#09c372";   
    }else if (lastname.length>30){
        document.getElementById('namelast').innerHTML = 'your last name too long';
        
    }else {
        document.getElementById('namelast').innerHTML = 'dont use numers or chifre';
        document.getElementById('lastname').style.borderColor="red";

    }
    
    if(email === '') {
        document.getElementById('paraemail').innerHTML = 'Email is required.';
        document.getElementById('email').style.borderColor="red";

    }else if (regex.test(email)) {
        document.getElementById('paraemail').innerHTML = '';
        document.getElementById('email').style.borderColor="#09c372";

    }else {
        document.getElementById('paraemail').innerHTML = 'Email Non Valid.';
        document.getElementById('email').style.borderColor="red";
    }
    
    if(telephone === '') {
        document.getElementById('paratele').innerHTML = 'Telephone is required.';
        document.getElementById('telephone').style.borderColor="red";

    }else if (regex.test(telephone)) {
        document.getElementById('paratele').innerHTML = '';
        document.getElementById('telephone').style.borderColor="#09c372";

        
    }else if (telephone.length>10){
        document.getElementById('paratele').innerHTML = 'just 10 chiffres.';
    }else {
        document.getElementById('paratele').innerHTML = 'Telephone Non Valid.';
        document.getElementById('telephone').style.borderColor="red";   
    }

           
    if (document.getElementById('female').checked) {
        document.getElementById("paragenre").innerHTML = '';
    }else if(document.getElementById('male').checked) {
        document.getElementById("paragenre").innerHTML = '';
    }else {
        document.getElementById("paragenre").innerHTML = "select something pls";
    }

    if (document.getElementById('DW101').checked) {
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DW102').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DW103').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DW104').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
        
    }else if(document.getElementById('DM101').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
       
    }else if(document.getElementById('DM102').checked) {
        
        document.getElementById("AFFICHE").innerHTML = '';
      
    }else {
        document.getElementById("AFFICHE").innerHTML = "SELECT SOMETHING"
    };
    
    var count = 0
    for (let i = 0; i < clubs.options.length; i++) {
        if ( clubs.options[i].selected ) {
            count++;
        }else if (count <= 3 && count != 0) {
            document.getElementById("paraclb").innerHTML = "";    
        }else if (count === 0) {
            document.getElementById("paraclb").innerHTML = "select something";
           
        }else {
            document.getElementById("paraclb").innerHTML = "you limited in 3";

        }
    } 


});
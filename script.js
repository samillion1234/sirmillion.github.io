const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});
let menu =document.querySelector('#menu-icon');
let navlist =document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classLis.remove('active');
};


function emailSend(){

	var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
	var phone = document.getElementById('message').value;
	

	var messageBody = "Name " + userName +
    "<br/> Email " + email  +
	"<br/> Messsage " + message;
	
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "samillion4584@gmail.com",
    Password : "85DB97482FB2AA2F86F3821D60F99EAD70CA",
    To : 'sirmillion4545@gmail.com',
    From : "samillion4584@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("successfully", "message sent!", "success");
  	}
  	else{
  		swal("Error", "message not sent!", "error");
  	}
  }
);
}


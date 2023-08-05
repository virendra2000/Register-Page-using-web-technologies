function validate() {
var fname = document.querySelector('#fname');
var uname = document.querySelector('#username');
var email = document.querySelector('#mail');
var mobile = document.querySelector('#mobileno');
var pass = document.querySelector('#id_password');
var cpass = document.querySelector('#cpassw');
if((fname==='') || (uname==='') || (email==='') || (mobile==='') || (pass==='') || (cpass==='')) {
    window.alert('Fill All the Field Compulsory');
}
if(fname===uname) {
  window.alert('Full Name & Username is Same , Set Different Username');
}
if(pass.value != cpass.value) {
  window.alert("Confirm Password Doesn't Match");
}
userpattern = /[A-Za-z0-9#?!%$&*@-]/g;
if(!uname.value.match(userpattern)) {
  alert("Username Validation Failed : Start With Uppercase Character and contain digits 0-9 and special symbol");
}
emailpatt = /[@.]/g;
if(!email.value.match(emailpatt)) {
  alert("Email Validation Failed : Email Should contain '@' and '.'");
}
var upper = /[A-Z]/g;
	if(!pass.value.match(upper)) {
		alert("Password should contain 1 Uppercase Character");
	}
	var lower = /[A-Z]/g;
	if(!pass.value.match(lower)) {
		alert("Password should contain 1 Lowercase Character");
	}
	var digit = /[0-9]/g;
	if(!pass.value.match(digit)) {
		alert("Password should contain 1 Digit");
	}
	var specialchar = /[#?!%$&*@-]/g;
	if(!pass.value.match(specialchar)) {
		alert("Password should contain 1 Special Character");
	}
	if(!pass.value.length>=8) {
		alert("Password should be 8 Character");
	}
}
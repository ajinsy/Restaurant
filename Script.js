let form=document.getElementById("StudentForm");

form.addEventListener("submit",function (event) {

    event.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;

    document.getElementById("output").innerHTML=`
    <Strong>Name:</Strong>${name}<br>
    <Strong>Email:</Strong>${email}<br>
    <Strong>Age:</Strong>${age}<br>
`;
form.reset();

});
function validate(){
    var fullName = document.getElementById("FullName").value;
    var employeeID = document.getElementById("EmployeeID").value;
    var passWord = document.getElementById("password").value;

 if(document.form.staff.selectedIndex== ""){
     alert("please select your position!")
 }

    if(document.form.city.selectedIndex==""){
        alert ("please select a branch!");
        return false;
    }
    

if(fullName== null || fullName== "") {
    alert("Full name is required!")
}    
    
if (employeeID== null || employeeID== ""){
    alert("please enter EmployeeID");
    return false;
}
if(passWord== null || passWord== ""){
    alert("please enter password");
    return false;
}


window.open('login.html')


}
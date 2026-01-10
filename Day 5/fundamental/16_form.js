
function submitForm(){
    var fullname = document.myform.fullname.value;
    var address = document.myform.address.value;
    console.log("Full Name: " + fullname);
    console.log("Address: " + address);

    document.getElementById("result").innerHTML = "ชื่อ: " + fullname + "<br>ที่อยู่: " + address;
}



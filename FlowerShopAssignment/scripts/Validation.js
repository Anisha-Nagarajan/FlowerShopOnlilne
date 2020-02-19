function ValidateCardNo() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (document.getElementById("CardNo").value.trim() == "") {
        document.getElementById("reqCardNo").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("CardNo").value.match(regex)) {
        document.getElementById("lblCardNo").style.display = "inline";
        document.getElementById("reqCardNo").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("reqCardNo").style.display = "none";
        document.getElementById("lblCardNo").style.display = "none";
    }
       
}
function ValidateSecurityCode() {
    var regex = /[0-9]{3}/;
    if (document.getElementById("SecurityCode").value.trim() == "") {
        document.getElementById("reqSecurityCode").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("SecurityCode").value.match(regex)){
        document.getElementById("lblSecurityCode").style.display = "inline";
        document.getElementById("reqSecurityCode").style.display = "none";
        flag = false;
    }
    else {
        document.getElementById("reqSecurityCode").style.display = "none";
        document.getElementById("lblSecurityCode").style.display = "none";
    }
       
}
//function ValidateExpiry() {
//    var month = document.getElementById("month").selectedIndex;
//    var year = document.getElementById("year").selectedIndex;
//    if ((month == "") || (year == "")) {
//        document.getElementById("lblexpiry").style.display = "inline";
//        flag= false;
//    }
//    else {
//        document.getElementById("lblexpiry").style.display = "none";
//    }
//}

function ValidateName() {
    var regex = /^[A-Za-z]+$/;
    if (document.getElementById("CardHolder").value.trim() == "") {
        document.getElementById("reqCardHolder").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("CardHolder").value.match(regex)){
        document.getElementById("lblCardHlder").style.display = "inline";
        document.getElementById("reqCardHolder").style.display = "none";
    flag = false;
}
    else {
        document.getElementById("reqCardHolder").style.display = "none";
        document.getElementById("lblSecurityCode").style.display = "none";
    }
        
}
function ValidateAddress1() {
    var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("address1").value.trim() == "") {
        document.getElementById("reqaddress1").style.display = "inline";
        flag = false;
    }
    else if (!document.getElementById("address1").value.match(regex)) {
        document.getElementById("reqaddress1").style.display = "none";
        document.getElementById("lbladdress1").style.display = "inline";
        flag = false;
    }
    else {
        document.getElementById("reqaddress1").style.display = "none";
        document.getElementById("lbladdress1").style.display = "none";
    }
       

}
function ValidateAddress2() {
    var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (!document.getElementById("address2").value.trim() == "") {
        if (!document.getElementById("address2").value.match(regex)) {
            document.getElementById("lbladdress2").style.display = "inline";
            flag = false;
        }
        else
            document.getElementById("lbladdress2").style.display = "none";
    }

}
function ValidateAddress3() {
    var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (!document.getElementById("address3").value.trim() == "") {
        if (!document.getElementById("address3").value.match(regex)) {
            document.getElementById("lbladdress3").style.display = "inline";
            flag = false;
        }
        else
            document.getElementById("lbladdress3").style.display = "none";
    }
}
function ValidateCity() {
    var regex = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
    if (document.getElementById("town").value.trim() == "") {
        document.getElementById("reqtown").style.display = "inline";
        flag = false;
    }
    else
        if (!document.getElementById("town").value.match(regex)) {
            document.getElementById("reqtown").style.display = "none";
        document.getElementById("lbltown").style.display = "inline";
        flag = false;
    }
        else {
            document.getElementById("reqtown").style.display = "none";
            document.getElementById("lbltown").style.display = "none";
        }
        
}
function ValidateRegion() {
    var regex = /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
    if (!document.getElementById("region").value.trim() == "") {
        if (!document.getElementById("region").value.match(regex)) {
            document.getElementById("lblregion").style.display = "inline";
            flag = false;
        }
        else
            document.getElementById("lblregion").style.display = "none";
    }
}
function ValidatePostCode() {
    var regex = /^(\d{4}|\d{6})$/;
    if (document.getElementById("postcode").value.trim() == "") {
        document.getElementById("reqpostcode").style.display = "inline";
        flag = false;
    }
    else
        if (!document.getElementById("postcode").value.match(regex)) {
            document.getElementById("reqpostcode").style.display = "none";
            document.getElementById("lblpostcode").style.display = "inline";
            flag = false;
        }
        else {
            document.getElementById("reqpostcode").style.display = "none";
            document.getElementById("lblpostcode").style.display = "none";
        }
}
function ValidateTelephone() {
    var regex = /^\d{10}$/;
    if (!document.getElementById("telephone").value.trim() == "") {
        if (!document.getElementById("telephone").value.match(regex)) {
            document.getElementById("lbltelephone").style.display = "inline";
            flag = false;
        }
        else
            document.getElementById("lbltelephone").style.display = "none";
    }
}
function ValidateFax() {
    var regex = /[\+? *[1-9]+]?[0-9 ]+/;
    if (!document.getElementById("fax").value.trim() == "") {
        if (!document.getElementById("fax").value.match(regex)) {
            document.getElementById("lblfax").style.display = "inline";
            flag = false;
        }
        else
            document.getElementById("lblfax").style.display = "none";
    }
}
function ValidateEmail() {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("email").value.trim() == "") {
        document.getElementById("reqemail").style.display = "inline";
        flag = false;
    }
    else
        if (!document.getElementById("email").value.match(regex)) {
            document.getElementById("reqemail").style.display = "none";
            document.getElementById("lblemail").style.display = "inline";
            flag = false;
        }
        else {
            document.getElementById("reqemail").style.display = "none";
            document.getElementById("lblemail").style.display = "none";
        }
}
function validatePayment() {
    flag = true;
    ValidateCardNo();
    ValidateSecurityCode();
    ValidateName();
    ValidateAddress1();
    ValidateAddress2();
    ValidateAddress3();
    ValidateCity();
    ValidateRegion();
    ValidatePostCode();
    ValidateTelephone();
    ValidateFax();
    ValidateEmail();
    if (flag == true)
        alert("Payment Successful");

}
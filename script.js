let x = 1;

function addnum(){
    x = x+1;
    updatenum();
}

function subnum(){
    x = x-1;
    if (x < 0){
        x++;
    }
    updatenum();
}

function updatenum(){
    document.getElementById("numbutton").innerHTML = x;
}

function checkx(){
    if (x != 0){
        location.href="Checkout.html";
    }
}

updatenum();


function mycalculate() {
    let x = parseInt(document.getElementById("numb1").value)
    let y = parseInt(document.getElementById("numb2").value)

    document.getElementById("add").innerHTML = "The addition value is " + ( x + y );
    document.getElementById("sub").innerHTML = "The subration value is " + ( x - y );
    document.getElementById("multi").innerHTML = "The multiplication value is " + ( x * y );
    document.getElementById("div").innerHTML = "The division value is " + ( x / y );


    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    
}
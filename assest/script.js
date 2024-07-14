function btn(val){
    let inputValue = document.getElementById("field").value;
    document.getElementById("field").value = inputValue + document.getElementById(val).value;
}

function equal(){
    let inputValue = document.getElementById("field").value;
    let output = eval(inputValue);
    document.getElementById("field").value = output;
}

function allClear(){
    document.getElementById("field").value = "0"

}
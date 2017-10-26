var str =[];
var y =[];
window.onload = function what(){
    setup();
};
function setup() {
    if(document.getElementById("inputDiv")!=null){
        z =document.getElementById("inputDiv");
        document.getElementById("inputDiv").innerHTML ="";    
    }else{
        z = document.createElement("div");
        z.setAttribute("id", "inputDiv");
        document.body.appendChild(z);
    }
    delete y;
    var x = document.getElementById("citinumber").value;    
    console.log("toalciti", x);
    var T = x*(x-1)/2;
    console.log("toalStr", T);
    
    for (var i = 0; i < T; i++) {
        
         y[i] = document.createElement("input");
         y[i].setAttribute("id", i);
         y[i].setAttribute("class", "inputOfLength");
        console.log("y:",i, y[i]);
        z.appendChild(y[i]);
    }
}
function getinput() {
    var x = document.getElementById("citinumber").value;
    var T = x*(x-1)/2;
    for(var i=0;i<T;i++){
        str[i] = document.getElementById(i).value;
        console.log("str",i,str[i]);
    }
}
function clear() {
    var inputs = document.getElementsByTagName('input');
    while (inputs.length) inputs[0].parentNode.removeChild(inputs[0]);
}
function justdoit() {
    var x = document.getElementById("citinumber").value;    
    bestsum = 0;
    var xuatphat = str[0];
    for (var i; i< x;i++){
        if (str[i] < str[i+1]) ;
    }

}
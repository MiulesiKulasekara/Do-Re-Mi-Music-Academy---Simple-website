
var btn = document.getElementById("joinButton").addEventListener("click" , function(){
    alert("Your details are recorded.");
    change();
});

function change(){
    var btnj = document.getElementById("joinButton");
    btnj.innerHTML = "Submited"
    btnj.style.backgroundColor = "#525252";
}
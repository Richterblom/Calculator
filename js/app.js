const output_div = document.querySelector(".output");
const result_div = document.querySelector(".result");
const keys_btn = document.querySelectorAll("button");

// keyword enter:
document.addEventListener("keyup", function(event) {
    if (event.keyCode != 13) {
        for (var i = 0; i < keys_btn.length; i++) {
            var id = keys_btn[i].getAttribute("data-id");

            if (id == event.key) {
                keys_btn[i].click();
            }
        }
    }
    else {
        document.getElementById("equal").click();
    }
}, false);


keys_btn.forEach(key => {
    key.addEventListener("click",calculate);
});

function calculate(){
   let btnTxt =this.innerText;

   if(btnTxt === "CE"){
    output_div.innerText = "";
    result_div.innerText = "0";
    return;
   }
   if(btnTxt === "DEL"){
    output_div.textContent = output_div.textContent.substr(0,output_div.textContent.length-1);
    return;
   }
   if(btnTxt === "="){
    result_div.innerText =eval(output_div.innerText).toFixed(2);

   }else{
    output_div.textContent += btnTxt;
    return;
   }
}
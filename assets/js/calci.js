/*(
  document.onreadystatechange = () => {
    if(document.readyState === "complete") {
      const model = {

      };
      const view = {
        init :() => {

        },
        
      };
      const controller ={
        init : () => {
          view.init();
        },
      };
      controller.init();
    }
  }
)();*/
function dis(num) {
  document.getElementById("text").value=document.getElementById("text").value+num
}
function solve() {
  var exp=document.getElementById("text").value;
  
  document.getElementById("text").value = eval(exp);
}
function clr() {
  document.getElementById("text").value="";
}

function add(){
    let num1= document.getElementById("num-1" ).value
    let num2= document.getElementById("num-2").value
  var Sum = Number(num1)+Number(num2)
  document.getElementById("total").value=Sum
    console.log(Sum)
    
}
add()

function sub(){
  let num1= document.getElementById("num-1" ).value
  let num2= document.getElementById("num-2").value
  var Sub = Number(num1)-Number(num2)
  document.getElementById("total").value=Sub
  console.log(Sub)

}
sub()

function multiply(){
  let num1= document.getElementById("num-1" ).value
  let num2= document.getElementById("num-2").value
  var Multiply = Number(num1)*Number(num2)
  document.getElementById("total").value=Multiply
  console.log(Multiply)

}
multiply()

function division(){
  let num1= document.getElementById("num-1" ).value
  let num2= document.getElementById("num-2").value
  var Division = Number(num1)/Number(num2)
  document.getElementById("total").value=Division
  console.log(Division)

}
division()




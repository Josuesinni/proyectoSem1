function div(){
    var txtnum1 = document.getElementById("n1").value;
    var txtnum2 = document.getElementById("n2").value;
    //Validación    
    if (txtnum1=="Primer número" && txtnum2=="Segundo número") {
        var inputNombre = document.getElementById("n3");
        inputNombre.value = "Resultado";
    }else{
        var division;
        division = txtnum1/txtnum2;
        var inputNombre = document.getElementById("n3");
        inputNombre.value = division;
    }
}
function rest(){
  var txtnum1 = document.getElementById("n1").value;
  var txtnum2 = document.getElementById("n2").value;
  //Validación    
  if (txtnum1=="Primer número" && txtnum2=="Segundo número") {
    var inputNombre = document.getElementById("n3");
    inputNombre.value = "Resultado";
  }else{
    var resta;
    resta = txtnum1-txtnum2;
    var inputNombre = document.getElementById("n3");
    inputNombre.value = resta;
  }
}
function sum(){
  var txtnum1 = document.getElementById("n1").value;
  var txtnum2 = document.getElementById("n2").value;
  //Validación    
  if (txtnum1=="Primer número" && txtnum2=="Segundo número") {
    var inputNombre = document.getElementById("n3");
    inputNombre.value = "Resultado";
  }else{
    var resta;
    resta = txtnum1+txtnum2;
    var inputNombre = document.getElementById("n3");
    inputNombre.value = resta;
  }
}
function mult(){
  var txtnum1 = document.getElementById("n1").value;
  var txtnum2 = document.getElementById("n2").value;
  //Validación    
  if (txtnum1=="Primer número" && txtnum2=="Segundo número") {
    var inputNombre = document.getElementById("n3");
    inputNombre.value = "Resultado";
  }else{
    var resta;
    resta = txtnum1*txtnum2;
    var inputNombre = document.getElementById("n3");
    inputNombre.value = resta;
  }
}
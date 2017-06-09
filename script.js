var opt1 = document.getElementById("cupcake");
var opt1func = function(){
  document.getElementById("choose5").style.cursor = "default";
  document.getElementById("choose5").classList.add("choose2");
  document.getElementById("choose_opt5").classList.add("choose_opt2");
  document.getElementById("fillings1").classList.add("backRed");
  document.getElementById("container1").style.transitionDelay = "0s";
  document.getElementById("container1").style.height = "600px";
  document.getElementById("container1_2").style.width = "200px";
  document.getElementById("pur1").style.marginTop = "200px";
  document.getElementById("pur2").style.marginTop = "400px";
  document.getElementById("bigflavors").style.visibility = "visible";
  document.getElementById("bigflavors").style.opacity = "1";
  document.getElementById("bigflavors").style.marginLeft = "515px";
  document.getElementById("bigflavors").style.marginTop = "-600px";
  document.getElementById("bigflavors").style.position = "absolute";
  document.getElementById("cupcake").style.zIndex = "2";
  document.getElementById("cake").style.zIndex = "1";
  document.getElementById("pie").style.zIndex = "1";
  document.getElementById("bigflavors").style.transitionDelay = ".4s";
}

opt1.addEventListener("click", opt1func);


//OPTION 2

var opt2 = document.getElementById("pie");
var opt2func = function(){
  document.getElementById("choose3").style.cursor = "default";
  document.getElementById("choose3").classList.add("choose2");
  document.getElementById("choose_opt3").classList.add("choose_opt2");
  document.getElementById("fillings1").classList.add("backRed");
  document.getElementById("pie").style.zIndex = "2";
  document.getElementById("cupcake").style.zIndex = "1";
  document.getElementById("cake").style.zIndex = "1";
  document.getElementById("container1").style.transitionDelay = "0s";
  document.getElementById("container1").style.height = "600px";
  document.getElementById("container1_2").style.width = "200px";
  document.getElementById("pur1").style.marginTop = "200px";
  document.getElementById("pur2").style.marginTop = "400px";
  document.getElementById("bigflavors").style.marginLeft = "515px";
  document.getElementById("bigflavors").style.marginTop = "-600px";
  document.getElementById("bigflavors").style.position = "absolute";
  document.getElementById("bigflavors").style.transitionDelay = ".4s";
  document.getElementById("bigflavors").style.opacity = "1";
  document.getElementById("bigflavors").style.visibility = "visible";
}
opt2.addEventListener("click", opt2func);

//OPTION 3

var opt3 = document.getElementById("cake");
var opt3func = function(){
  document.getElementById("choose").style.cursor = "default";
  document.getElementById("choose").classList.add("choose2");
  document.getElementById("choose_opt").classList.add("choose_opt2");
  document.getElementById("fillings1").classList.add("backRed");
  document.getElementById("cake").style.zIndex = "2";
  document.getElementById("cupcake").style.zIndex = "1";
  document.getElementById("pie").style.zIndex = "1";
  document.getElementById("container1").style.transitionDelay = "0s";
  document.getElementById("container1").style.height = "600px";
  document.getElementById("container1_2").style.width = "200px";
  document.getElementById("pur1").style.marginTop = "200px";
  document.getElementById("pur2").style.marginTop = "400px";
  document.getElementById("bigflavors").style.marginLeft = "515px";
  document.getElementById("bigflavors").style.marginTop = "-600px";
  document.getElementById("bigflavors").style.position = "absolute";
  document.getElementById("bigflavors").style.transitionDelay = ".4s";
  document.getElementById("bigflavors").style.opacity = "1";
  document.getElementById("bigflavors").style.visibility = "visible";
}
opt3.addEventListener("click", opt3func);

//TOGGLE

var container2 = document.getElementsByClassName("container2");
var circle = document.getElementsByClassName("circle");
var ok = document.getElementsByClassName("ok");
var fruit = document.getElementsByClassName("fruit");
var filter = document.getElementsByClassName("filter");
var array = [];
var arrayFinish = [];

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var flattened = args.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  var uniqueArray = flattened.filter(function(item, pos) {
    return flattened.indexOf(item) == pos;
  });
  return uniqueArray;
}

for(let i = 0; i < container2.length; i++){
  container2[i].addEventListener("click", function(){
    circle[i].classList.toggle("circle2");
    circle[i].classList.toggle("size2");
    ok[i].classList.toggle("size4");
    ok[i].classList.toggle("ok2");
    fruit[i].classList.toggle("pcolor");
    filter[i].classList.toggle("backcolor");
  });
}

// REMOVE

var remove = document.getElementsByClassName("remove");

for(let m = 0; m < remove.length; m++){
  remove[m].addEventListener("click", function(){
    for(let j = 0; j < container2.length; j++){
      circle[j].classList.remove("circle2");
      circle[j].classList.remove("size2");
      ok[j].classList.remove("size4");
      ok[j].classList.remove("ok2");
      fruit[j].classList.remove("pcolor");
      filter[j].classList.remove("backcolor");
    };
  });
}

//BACK 1

var back = document.getElementById("link1");
var back1 = function(){
  document.getElementById("choose").style.cursor = "pointer";
  document.getElementById("choose3").style.cursor = "pointer";
  document.getElementById("choose5").style.cursor = "pointer";
  document.getElementById("choose").classList.remove("choose2");
  document.getElementById("choose3").classList.remove("choose2");
  document.getElementById("choose5").classList.remove("choose2");
  document.getElementById("choose_opt").classList.remove("choose_opt2");
  document.getElementById("choose_opt3").classList.remove("choose_opt2");
  document.getElementById("choose_opt5").classList.remove("choose_opt2");
  document.getElementById("container1").style.width = "800px";
  document.getElementById("container1").style.transition = ".4s";
  document.getElementById("container1").style.transitionDelay = ".4s";
  document.getElementById("container1").style.height = "200px";
  document.getElementById("container1_2").style.width = "800px";
  document.getElementById("pur1").style.marginTop = "0px";
  document.getElementById("pur2").style.marginTop = "0px";
  document.getElementById("bigflavors").style.position = "absolute";
  document.getElementById("bigflavors").style.transition = ".4s";
  document.getElementById("bigflavors").style.opacity = "0";
  document.getElementById("bigflavors").style.visibility = "hidden";
  array = [];
}
back.addEventListener("click", back1);

//NEXT

var alertFilling = document.getElementById("alertFilling");
var fillOk = document.getElementById("fillOk");

function next(){
  document.getElementById("fil2").classList.add("filVisible2");
  document.getElementById("fil").classList.remove("filVisible");
  document.getElementById("fil").classList.remove("backFil2");
  document.getElementById("fillings2").classList.add("backRed");
  document.getElementById("fillings1").classList.remove("backRed");
  
  for(let j = 0; j < fruit.length; j++) {
    if(fruit[j].classList.contains("pcolor")){
      array.push(fruit[j].innerHTML);
      uniteUnique(array);
      //console.log(array);
    }
  }
  
  if(array.length == "0") {
    alertFilling.style.display = "flex";
    alertFilling.style.opacity = "1";
    alertFilling.style.animation = "show .5s";
    back3();
  };
}

fillOk.onclick = function(){
  alertFilling.style.display = "none";
}

//BACK 2

var back2 = document.getElementById("link3");
var back3 = function(){
  document.getElementById("fil2").classList.remove("filVisible2");
  document.getElementById("fil").classList.add("filVisible");
  document.getElementById("fil").classList.add("backFil2");
  document.getElementById("fillings2").classList.remove("backRed");
  document.getElementById("fillings1").classList.add("backRed");
  form.classList.remove("viewForm");
  blockHover.style.animation = "cancelBlockHover .5s";
  blockHover.style.zIndex = "0";
  cleanFields();
  array = [];
  arrayFinish = [];
}
back2.addEventListener("click", back3);

//FINISH

var formP = document.getElementById("formP");
var form = document.getElementById("form");
var deliver = document.getElementById("deliver");
var store = document.getElementById("store");
var address = document.getElementById("divAddress");
var addressText = document.getElementById("addressText");
var choose = document.getElementsByClassName("choose");
var choose_opt = document.getElementsByClassName("choose_opt");
var blockHover = document.getElementById("blockHover");

function finish(){
  blockHover.className = "blockHover";
  blockHover.style.animation = "blockHover .5s";
  blockHover.style.zIndex = "1";
  
  for(let k = 0; k < fruit.length; k++) {
    if(fruit[k].classList.contains("pcolor")){
      arrayFinish.push(fruit[k].innerHTML);
      uniteUnique(arrayFinish);
      console.log(arrayFinish);
    }
  }
  
  for(let t = 0; t < choose.length; t++){
    if(choose[t].classList.contains("choose2")) {
      formP.innerHTML = choose_opt[t].innerHTML + " filled with " + array.slice(0, array.length-1).join(", ") + " and " + array.slice(-1) + " and topped with " + arrayFinish.slice(0, arrayFinish.length-1).join(", ") + " and " + arrayFinish.slice(-1) + ".";
  
      if(array.length == 1 && arrayFinish.length > 1) {
        formP.innerHTML = choose_opt[t].innerHTML + " filled with " + array[0] + " and topped with " + arrayFinish.slice(0, arrayFinish.length-1).join(", ") + " and " + arrayFinish.slice(-1) + ".";
      }
      else if(array.length > 1 && arrayFinish.length == 1) {
        formP.innerHTML = choose_opt[t].innerHTML + " filled with " + array.slice(0, array.length-1).join(", ") + " and " + array.slice(-1) + " and topped with " + arrayFinish[0] + ".";
      }
      else if(array.length == 1 && arrayFinish.length == 1) {
        formP.innerHTML = choose_opt[t].innerHTML + " filled with " + array[0] + " and topped with " + arrayFinish[0] + ".";
      }
      else if(array.length == 1 && arrayFinish.length == 0) {
        formP.innerHTML = choose_opt[t].innerHTML + " filled with " + array[0] + " and no toppings.";
      }
      else if(array.length > 1 && arrayFinish.length == 0) {
        formP.innerHTML = choose_opt[t].innerHTML + " filled with " + array.slice(0, array.length-1).join(", ") + " and " + array.slice(-1) + " and no toppings.";
      }
    }
  }
  
  function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  formP.innerHTML = capitalize(formP.innerHTML);
  form.className = "viewForm";
}

// FINISH ENDS HERE

deliver.addEventListener("click", function(){
  address.className = "viewAddress";
});

store.addEventListener("click", function(){
  address.className = "divAddress";
  addressText.value = "";
});

// CANCEL

var cancel = document.getElementById("cancel");
var no = document.getElementById("no");
var yes = document.getElementById("yes");
var modalCancel = document.getElementById("modalCancel");

cancel.onclick = function(){
  modalCancel.style.display = "flex";
  modalCancel.style.opacity = "1";
  modalCancel.style.animation = "show .5s";
}

no.onclick = function(){
  modalCancel.style.display = "none";
}

yes.onclick = function(){
  back1();
  back3();
  form.classList.remove("viewForm");
  modalCancel.style.display = "none";
  blockHover.classList.remove("blockHover");
  cleanFields();
}

// SUBMIT

var submit = document.getElementById("submit");
var submitOK = document.getElementById("submitOK");
var modalSubmit = document.getElementById("modalSubmit");
var submitQuestion = document.getElementById("submitQuestion");
var questionNo = document.getElementById("questionNo");
var questionYes = document.getElementById("questionYes");
var submitP = document.getElementById("submitP");
var numInput = document.getElementById("numInput");
var numInputP = document.getElementById("numInputP");
var nameP = document.getElementById("nameP");
var email = document.getElementById("email");
var emailP = document.getElementById("emailP");
var addressP = document.getElementById("addressP");
var addressText = document.getElementById("addressText");

function cleanFields(){
  numInput.value = "0";
  store.checked = false;
  deliver.checked = false;
  addressText.value = "";
  document.getElementById("name").value = "";
  email.value = "";
  numInputP.style.opacity = "0";
  radioP.style.opacity = "0";
  nameP.innerHTML = "Full name";
  nameP.style.color = "white";
  emailP.innerHTML = "E-mail";
  emailP.style.color = "white";
  addressP.innerHTML = "Address"
  addressP.style.color = "white";
}

function submitShow(){
  submitQuestion.style.display = "flex";
  submitQuestion.style.opacity = "1";
  submitQuestion.style.animation = "show .5s";
  submitP.innerHTML = "Do you want to submit your order?";
  questionNo.innerHTML = "no";
  questionYes.style.display = "inline";
}

submit.onclick = function(){
  // CHECK IF QUANTITY IS SET
  if(numInput.value == "0" || numInput.value == ""){
    numInputP.innerHTML = "You must choose a quantity";
    numInputP.style.opacity = "1";
    submitQuestion.style.display = "none";
  } else {
    numInputP.style.opacity = "0";
  }
  // CHECK IF DELIVERY/RETRIEVE OPTION IS SELECTED
  if(store.checked == false && deliver.checked == false){
    radioP.innerHTML = "You must choose an option";
    radioP.style.opacity = "1";
    submitQuestion.style.display = "none";
  } else {
    radioP.style.opacity = "0";
  }
  // CHECK IF NAME IS PROVIDED
  if(document.getElementById("name").value == ""){
    nameP.innerHTML = "Full name must be provided";
    nameP.style.color = "#efc867";
    submitQuestion.style.display = "none";
  } else {
    nameP.innerHTML = "Full name";
    nameP.style.color = "white";
  }
  // CHECK IF E-MAIL IS PROVIDED
  if(email.value == ""){
    emailP.innerHTML = "E-mail must be provided";
    emailP.style.color = "#efc867";
    submitQuestion.style.display = "none";
  } else {
    emailP.innerHTML = "E-mail";
    emailP.style.color = "white";
  }
  // CHECK IF ADDRESS IS PROVIDED
  if(deliver.checked == true && addressText.value == ""){
    addressP.innerHTML = "Address must be provided"
    addressP.style.color = "#efc867";
    submitQuestion.style.display = "none";
  } else if (deliver.checked == true && addressText.value !== ""){
    addressP.innerHTML = "Address"
    addressP.style.color = "white";
  }
  if(numInput.value > "0" && (store.checked == true || (deliver.checked == true && addressText.value !== "")) && document.getElementById("name").value !== "" && email.value !== ""){
    numInputP.style.opacity = "0";
    radioP.style.opacity = "0";
    nameP.innerHTML = "Full name";
    nameP.style.color = "white";
    emailP.innerHTML = "E-mail";
    emailP.style.color = "white";
    addressP.innerHTML = "Address"
    addressP.style.color = "white";
    submitShow();
  }
}

questionNo.onclick = function(){
  submitQuestion.style.display = "none";
}

questionYes.onclick = function(){
  submitP.innerHTML = "Thank you! Your order was placed.";
  questionYes.style.display = "none";
  questionNo.innerHTML = "OK";
  form.classList.remove("viewForm");
  blockHover.classList.remove("blockHover");
  cleanFields();
  back1();
  back3();
}
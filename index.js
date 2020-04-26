
var myNodelist = document.getElementsByClassName("ajouter");
for( let i=0;i<myNodelist.length;i++)
{      console.log(myNodelist.length);
    myNodelist[i].addEventListener('click', function(ev) {
    let item=ev.target.parentElement.childNodes[4];
    let cln = item.cloneNode(true);
    cln.innerHTML+='<button type="button" class="close" aria-label="Close"><span  onclick="suprimer(this)" aria-hidden="true">&times;</span>';
    let premove = document.getElementById("remove");
    if(premove){
   premove.remove();
    }
  

    let  nombre =document.getElementById("cole").appendChild(cln);
    c = document.getElementById("cole").childElementCount;
    document.getElementsByClassName("total-count")[0].innerHTML = c; 

    if (document.getElementsByClassName("total-count")[0].textContent==2)
    {  
      let spbuttonmodel = document.createElement("button");
      spbuttonmodel.textContent= `Generer votre facture`;
      spbuttonmodel.id = "generfacture";
      document.getElementsByClassName("total-count")[0].innerHTML = c; 
      document.getElementsByClassName('modal-footer')[1].appendChild(spbuttonmodel);
    }
    
    if (document.getElementsByClassName("total-count")[0].textContent==2)
    {
document.getElementsByClassName("modal-footer")[1].childNodes[3].addEventListener("click",calculersomme);
    }
    
    ev.target.classList.add('disabled');
    ev.target.classList.add('rouge')
    console.log(ev.target.classList[2]);
          if (document.getElementsByClassName("total-count")[0].textContent>=2)
          {  
    if(document.getElementById("generfacture").textContent=='payer votre facture')
{
 document.getElementById("generfacture").innerHTML='<button class="col-md-3 offset-md-4 col-sm-1" data-toggle="modal" data-target="#modalRegisterForm">payer votre facture</button>'
}  }

})

}

/*addEventListener("click", calculersomme);*/
/*var myNodelist = document.getElementsByTagName("close");*/
function suprimer(e){
	e.parentElement.parentElement.remove();
}
/* add event lisner at count */
let evenementtotal = document.getElementById("cole");
evenementtotal.addEventListener('click', function(ev){
console.log(ev.target)
document.getElementsByClassName("total-count")[0].innerHTML = ev.target.childElementCount;
})


/*getElementsByClassName*/ 
function calculersomme()
{
  if (c > 3 && document.getElementsByClassName("modal-footer")[1].childNodes[3].textContent!='payer votre facture')
{ let all = document.getElementById('cole');
let sum = 0;
console.log(all.children.length)
for (let i = 0; i < all.children.length; i++) {
  if (all.children[i].getElementsByTagName('span')[0].textContent)
  {var valprix= parseInt(all.children[i].getElementsByTagName('span')[0].textContent);
 sum = sum + valprix;
 /* console.log(all.children[i].getElementsByTagName('span')[i].textContent +" "+ sum);*/}
}
    
  console.log("bonjour " + all.children[0].tagName);
let spanmodel = document.createElement("span");
spanmodel.classList.add("colorred");
spanmodel.textContent=`votre facture est ${sum}$`;
document.getElementById('paiementfacture').textContent=`votre facture est ${sum}$`;

document.getElementById('cole').appendChild(spanmodel);
document.getElementsByClassName("modal-footer")[1].childNodes[3].innerHTML= '<button class="col" data-toggle="modal" data-target="#modalpayement">payer votre facture</button>';
}
if (c <= 3)
{
  swal("Oops!", "vous n'avez pas atteindre le nombre minimum d'achat!", "error");}}
function myFunction() {
 let x =  document.getElementById('cole')
 console.log(x.innerHTML = '')
 document.getElementsByClassName("total-count")[0].innerHTML = 0; 
}
/*
var modal = document.getElementById('PopUpModal');
document.getElementById("closeModale").onclick = function() {
  modal.style.display = "none";
}
function showOverlay() {
  $('.overlay').show()
}
setTimeout(showOverlay, 5000)
*/
// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
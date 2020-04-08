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
 })

}

/* add event lisner at count */
let evenementtotal = document.getElementById("cole");
evenementtotal.addEventListener('click', function(ev){
console.log(ev.target)
document.getElementsByClassName("total-count")[0].innerHTML = ev.target.childElementCount;

})
/*addEventListener("click", calculersomme);*/
/*var myNodelist = document.getElementsByTagName("close");*/
function suprimer(e){
	e.parentElement.parentElement.remove();
}


/*getElementsByClassName*/ 
function calculersomme()
{
  if (c > 3)
{ let all = document.getElementById('cole');
var sum = 0;
console.log(all.children.length)
for (let i = 0; i < all.children.length; i++) {
  if (all.children[1].getElementsByTagName('span')[0].textContent)
  {let valprix= parseInt(all.children[1].getElementsByTagName('span')[0].textContent);
  sum = sum + valprix;
  console.log(all.children[i].getElementsByTagName('span')[i].textContent +" "+ sum);}
}
    
  console.log("bonjour " + all.children[0].tagName);
let spanmodel = document.createElement("span");
spanmodel.textContent=`votre facture est ${sum}$`;
document.getElementById('cole').appendChild(spanmodel);
}
if (c <= 3)
{
  swal("Oops!", "vous n'avez pas atteindre le nombre minimum d'achat!", "error");}}
function myFunction() {
 console.log("hello word");
 console.log("hhhhhhhhhh");
 let x =  document.getElementById('cole')
 console.log(x.innerHTML = '')
 document.getElementsByClassName("total-count")[0].innerHTML = 0; 
}

/*var all = document.getElementsByClassName('rouge');

for (var i = 0; i < all.length; i++) {
  all[i].style.color = 'red';}
// Listeners/*
cargarEventListeners();
function cargarEventListeners() {
  // Dispara cuando se presiona "Agregar Carrito"
  cursos.addEventListener('click', comprarCurso);
  // Cuando se elimina un curso del carrito
  carrito.addEventListener('click', eliminarCurso);
  // Al Vaciar el carrito
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
  // Al cargar el documento, mostrar LocalStorage
  document.addEventListener('DOMContentLoaded', leerLocalStorage);
}
/*
// Funciones
// Función que añade el curso al carrito
function comprarCurso(e) {
  e.preventDefault();
  // Delegation para agregar-carrito
  if(e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement;
    // Enviamos el curso seleccionado para tomar sus datos
    leerDatosCurso(curso);
  }
}*/
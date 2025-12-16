//Debounce ->tum bakte rahe tak chup rehta tum kuch der nai bakey toh in bakta

function debounce(fn,delay){
  let timer;//initially undefined tumhare har ek click pe ek banra samajh bhai
  return function(){
    clearTimeout(timer);
    timer=setTimeout(fn,delay);
  };
}
document.querySelector('#search').addEventListener('input',debounce(function(){
  console.log("chala re baba iney");
},400)
)


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

//Throttling
function throttle(fn,delay){
  let last=0;
  return function(){
    const now = Date.now();
    if(now-last>=delay){
      last=now;
      fn();
    }
  }

}
window.addEventListener("mousemove",throttle(function(){
  console.log("hila re iney");
},2000)
)
//Har 2 second move karey toh ich chalna typa stuff
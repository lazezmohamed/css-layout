var total=0;
document.getElementById('totalsum').innerText=total;
function remove(event){
    var btn = event.target;
    btn.parentElement.parentElement.remove();
}

function bigMAc(){
  total=total+200;
  document.getElementById('totalsum').innerText=total;}
function flipFlops(){
  total=total+799;
  document.getElementById('totalsum').innerText=total;}
  function fighter(){
    total=total+600;
    document.getElementById('totalsum').innerText=total;}

var panels=document.querySelectorAll('.panel');

panels.forEach(function(panel){
  panel.addEventListener('click',function(){
    removeAllClass();
    panel.classList.add('active');
  })
})
function removeAllClass(){
panels.forEach(function(panel){
  panel.classList.remove('active');
})
}

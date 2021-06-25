let form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    let all = event.target.querySelectorAll('input, select, textarea');
   let data = {};
   for(let elem of all){
       data[elem.name] = elem.value;
   } 
   localStorage.setItem('obj',JSON.stringify(data));
   console.log(JSON.stringify(data));
})


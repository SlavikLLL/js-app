let buttonSumbit = document.getElementById('buttonSumbit');
buttonSumbit.addEventListener('click',function(){
    let dataElem = localStorage.getItem('obj');
    let ul = document.getElementById('ulCol');
    if(dataElem){
        let ParseData = JSON.parse(dataElem);
        for(let item in ParseData){
            let li = document.createElement('li');
            
            li.innerHTML =  ParseData[item];
            ul.append(li);
        }
    }
    else{
        alert("Ошибка");
    }
})
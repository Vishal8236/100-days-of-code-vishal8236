var records = document.getElementById('records');
var search = document.getElementById('search-input');

var data = [1,2,3,1,5,5,4,2,3,2];

//show data on html page
const showData = (data) =>{
  records.innerHTML = '';
  data.map((d)=>{
    let div = document.createElement('div');
    div.classList = 'item';
    
    let span = document.createElement('span');
    span.innerText = `Box#${d}`;
  
    div.appendChild(span);
    
    records.appendChild(div);
  });
}

showData(data);

//get search query from input box
const searchFun = (data, query) =>{
  return data.filter((e) => e == query);
}

search.addEventListener('keyup', ()=>{
  let query = document.getElementById('search-input').value;
  if(query == '')
  {
    showData(data);
  }
  else{
    let searchData = searchFun(data, query);
    showData(searchData);
  }
})
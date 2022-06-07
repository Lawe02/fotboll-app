async function myFunction() {
    let response = await fetch('/data');
    if (!response.ok){
        throw new Error(response.status);
    }
    const data = await response.json()
    return data;
}
myFunction()
.then(data => {
    
    data.forEach((row) => {
    const lst = document.createElement('li');
    lst.textContent = `id: ${row.record.id} name: ${row.record.fields.Name}`;
    document.getElementById('test').appendChild(lst);
    })
});

function w3_open() {
  document.getElementById("main").style.marginLeft = "30%";
  document.getElementById("mySidebar").style.width = "30%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}



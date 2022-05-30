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
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

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

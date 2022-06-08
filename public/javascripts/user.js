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
    const lst = document.createElement('div');
    lst.className = 'w3-panel w3-round w3-light-blue w3-center w3-col m8 w3-padding-24';
    lst.textContent = `id: ${row.record.id} name: ${row.record.fields.Name} goals: ${row.record.fields.Goals} assists: ${row.record.fields.assists} games: ${row.record.fields.games}`;
    document.getElementById('test').appendChild(lst);
    });

    function createOption(){
      var options = document.getElementById('håt');
      options.innerHTML = '';
      data.forEach((element) => {
        var option = `
                      <option value="${element.record.id}">${element.record.fields.Name}</option>
                    `
          options.innerHTML += option;
          });
        }
        createOption();
            
});

function w3_open() {
  document.getElementById("main").style.marginLeft = "35%";
  document.getElementById("mySidebar").style.width = "35%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}         
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}



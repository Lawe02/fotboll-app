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
    lst.textContent = `Namn: ${row.record.fields.Name} Mål: ${row.record.fields.Goals} Framspelningar: ${row.record.fields.assists} Matcher: ${row.record.fields.games} Position: ${row.record.fields.position} `;
    document.getElementById('test').appendChild(lst);
    });

    function createOption(){
      var options = document.getElementsByClassName('w3-select');
      data.forEach((element) => {
        var option = `
                      <option value="${element.record.id}">${element.record.fields.Name}</option>
                    `
          for(var i = 0; i < options.length; i++){
            options[i].innerHTML += option;
          }
          });
        }
        createOption();
            
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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


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
   
  function buildTable(){
      var table = document.getElementById('ulRecords');
      table.innerHTML = '';
      data.forEach((element) =>{
          var row = `<t>
                        <td>${element.record.fields.Name}</td>
                        <td>${element.record.fields.Goals}</td>
                        <td>${element.record.fields.assists}</td>
                        <td>${element.record.fields.games}</td>
                    </tr>`
      table.innerHTML += row;
      });
      }
      buildTable();
      });
   
function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }

  function sourtBale(n) {
    var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;

  function arrow(rrow){
    var c = table.getElementsByTagName("TH");
    var h = c[n].innerHTML;
    var r = h.substring(0, h.length-1);
    table.getElementsByTagName("TH")[n].innerHTML = `${r} ${rrow}`
  }
  arrow('&#x2207'); 

  
    dir = "asc"; 


    while (switching) {

      switching = false;
      rows = table.rows;
 

      for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
       

        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
    
          shouldSwitch = true;
          break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) { 
          shouldSwitch = true;
          break;
          }
        }
      }
      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        
        switchcount ++;      
      } else {
        

        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
          arrow('&#x2206');
        }
      }
    }
  }

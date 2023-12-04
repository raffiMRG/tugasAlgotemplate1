function eventBubleScore() {
  var table, rows, switching, i, x, y, shouldSwitch;
  let asc = 1;
  table = document.getElementById("bubleTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = parseInt(rows[i].getElementsByTagName("td")[2].innerText);
      y = parseInt(rows[i + 1].getElementsByTagName("td")[2].innerText);
      // console.log(x);
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function eventBubleName() {
  var table, rows, switching, i, x, y, shouldSwitch;
  let asc = 1;
  table = document.getElementById("bubleTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1].innerText;
      y = rows[i + 1].getElementsByTagName("td")[1].innerText;
      // console.log(x);
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function eventBubleId() {
  var table, rows, switching, i, x, y, shouldSwitch;
  let asc = 1;
  table = document.getElementById("bubleTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = parseInt(rows[i].getElementsByTagName("td")[0].innerText);
      y = parseInt(rows[i + 1].getElementsByTagName("td")[0].innerText);
      // console.log(x);
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
function sequentialEvent() {
    let input, filter, table, tr, td, i, txtValue, found;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    found = false;

    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1]; // Change index to match the column you want to search
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.backgroundColor = "#f2f2f2";
          document.getElementById("searchResult").innerText = "Result found: " + txtValue;
          found = true;
          console.log("ok true");
        } else {
          tr[i].style.backgroundColor = "";
        }
      }
    }

    if (!found) {
      console.log("ok false");
      document.getElementById("searchResult").innerText = "No result found.";
    }
  }
function searchTable() {
    var input, filter, table, tr, td, i, txtValue, low, high, mid, target;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    low = 0;
    high = tr.length;
    target = filter;

    console.log("ok");
    
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      console.log("low = ", low, ", high = ", high, ", mid = ", mid);
      td = tr[mid].getElementsByTagName("td")[1]; // Change index to match the column you want to search
      console.log(td.innerText);
      // txtValue = td.textContent || td.innerText;
      txtValue = td.innerText;

      if (txtValue.toUpperCase() === target) {
        tr[mid].style.backgroundColor = "#f2f2f2";
        document.getElementById("searchResult").innerText = "Result found: " + txtValue;
        return;
      } else if (txtValue.toUpperCase() < target) {
        low = mid + 1;
        console.log("increment ok");
      } else {
        high = mid - 1;
        console.log("decrement ok");
      }
    }

    for (i = 1; i < tr.length; i++) {
      tr[i].style.backgroundColor = "";
    }

    document.getElementById("searchResult").innerText = "No result found.";
  }
  // const btnCari = document.querySelector('.btnCari');

    // btnCari.addEventListener("click", searchTable);

    // const search = document.querySelector('#binaryIvent');

    // search.addEventListener('click', function (){
    //   console.log("ok");
    // });

    function binaryIvent() {
        var input, filter, table, tr, td, i, txtValue, low, high, mid, target;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        console.log(filter);
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        low = 1;
        high = tr.length;
        target = filter;
        
        for (i = 1; i < tr.length; i++) {
          tr[i].style.backgroundColor = "white";
          console.log(i);
        }

        while (low <= high) {
          mid = Math.floor((low + high) / 2);
          console.log("low = ", low, ", high = ", high, ", mid = ", mid);
          td = tr[mid].getElementsByTagName("td")[1]; // Change index to match the column you want to search
          console.log(td.innerText);
          // txtValue = td.textContent || td.innerText;
          txtValue = td.innerText;
  
          if (txtValue.toUpperCase() === target) {
            tr[mid].style.backgroundColor = "#f2f2f2";
            document.getElementById("searchResult").innerText = "Hasil ditemukan : " + txtValue;
            return;
          } else if (txtValue.toUpperCase() < target) {
            low = mid + 1;
            console.log("increment ok");
          } else {
            high = mid - 1;
            console.log("decrement ok");
          }
          // console.log("low = "+ low + ", high = " + high);
          console.log(tr[1].getElementsByTagName("td")[1]);
        }
  
        for (i = 1; i < tr.length; i++) {
          tr[i].style.backgroundColor = "white";
          console.log(i);
        }
  
        document.getElementById("searchResult").innerText = "HASIL TIDAK DITEMUKAN!!!";
      }
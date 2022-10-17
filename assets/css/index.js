 let newButton = document.querySelector(".button");
 let search = document.querySelector("#search");
 let input = document.querySelector("#search input");
 let newTbody = document.querySelector("tbody");

 newButton.addEventListener("click", function() {
     let name = document.getElementById("name").value;
     let price = document.getElementById("price").value;
     let count = document.getElementById("count").value;
     let category = document.getElementById("category").value;

     if (!name.trim().length) {
         alert("Pleace complete input")
     } else {
         if (!count.trim().length) {
             alert("Pleace complete input")
         } else {
             if (!category.trim().length) {
                 alert("Pleace complete input")
             } else {
                 if (!price.trim().length) {
                     alert("Pleace complete input")
                 } else {
                     newTbody.innerHTML +=
                         `<tr>
                            <td>${name}</td>
                            <td>${price}</td>
                            <td>${count}</td>
                            <td>${category}</td>
                                 </tr>`
                 }



             }

         }
     }

 })

 document.getElementById(`input`).onkeyup = function() {
     var query = this.value.toUpperCase();
 }
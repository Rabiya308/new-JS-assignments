// /////////question no 1//////////

        
        //   function displayFormData() {
        //     var name = document.getElementById('name').value;
        //     var email = document.getElementById('email').value;
        //     var password = document.getElementById('password').value;
            
        //     var displayDiv = document.getElementById('display-data');
            
        //     var formData = "<p><strong>Name:</strong> " + name + "</p>" +
        //                    "<p><strong>Email:</strong> " + email + "</p>" +
        //                    "<p><strong>Password:</strong> " + password + "</p>";
            
        //     displayDiv.innerHTML = formData;
        // }

        // ////question no 2////////
//         function readMore(){
        
//         let moreText = "Lorem ipsum dolor sit amet consectetur adipisicing elit Aut impedit eos cupiditate sunt maiores soluta obcaecati architecto magni tempore distinctio in consectetur culpa facilis dolorum officiis sapiente nulla assumenda Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, incidunt quibusdam expedita asperiores modi recusandae est possimus dignissimos dicta quae."
//         let text = document.getElementById('text')
//         text.innerHTML = moreText 
// }



// //////question no 3/////////
let formEl = document.querySelector("form");
let tbodyEl = document.querySelector("tbody");
let tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let text = document.getElementById("text").value;
  tbodyEl.innerHTML += `
      <tr>
          <td>${name}</td>
          <td>${text}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
  `;
}
function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        let btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("Add", onAddWebsite);
      tableEl.addEventListener("click", onDeleteRow);
      tableEl.addEventListener("click", onAddWebsite);
      
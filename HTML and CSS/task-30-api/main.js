let apiUrl = "https://dummyjson.com/products";
const table = document.querySelector(".container");
fetch(apiUrl, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((element) => {
      table.innerHTML += `
       <div class="card">
        <div class="header">
          <img src="${element.thumbnail}" alt="Jones Gail">
        </div>
        <div class="content">
          <h3>Jones Gail</h3>
          <p>The lorem text the section contain contains header having open.</p>
          <button>View More</button>
        </div>
      </div>
     `;
    })
  );

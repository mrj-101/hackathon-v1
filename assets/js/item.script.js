fetch("http://54.169.154.143:3096/food-menus", {
    method: 'GET',
    redirect: 'follow'
})
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let data = '';
        result.forEach(food => {
            data += `
            <div class="card" style="width: 18rem; ">
            <img src="${food.image}" class="card-img-top mt-2" style="height: 200px; object-fit: cover;" alt="xxx">
            <div class="card-body">
              <h6 class="card-title text-danger">${food.price}</h6>
              <h5 class="card-title">${food.name} (${food.name_en})</h5>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <a href="#" class="text-white">Order</a>
              </button>
              <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p class="card-text">${food.description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            </div>
          </div>`
        });
        document.getElementById('food-list').innerHTML = data;
    })
    .catch(error => console.log('error', error));
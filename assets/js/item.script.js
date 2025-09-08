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
              <p class="card-text">${food.description}</p>
              <a href="#" class="btn btn-primary">Order</a>
            </div>
          </div>`
        });
        document.getElementById('food-list').innerHTML = data;
    })
    .catch(error => console.log('error', error));
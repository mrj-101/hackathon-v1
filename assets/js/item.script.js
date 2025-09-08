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
            <img src="${food.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="xxx">
            <div class="card-body">
              <h6 class="card-title">${food.price}</h6>
              <h5 class="card-title">${food.name} (${food.name_en})</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        });
        document.getElementById('food-list').innerHTML = data;
    })
    .catch(error => console.log('error', error));
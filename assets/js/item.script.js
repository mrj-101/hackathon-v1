document.addEventListener('DOMContentLoaded', async function () {
    let url = 'http://54.169.154.143:3096/food-menus';
    // let url = './json/hotels.json';
    await fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            renderHotelRoom(json);
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
})
function renderHotelRoom(foods) {
    let data_area = document.querySelector('#data_area');
    if (foods.length > 0) {
        let data = ``
        foods.forEach(f => {
            data += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 mx-auto" style="width: 17rem;">
                    <img src="${f.image}" class="card-img-top object-fit-cover" style="height: 200px;" alt="${f.name}">
                    
                    <div class="card-body d-flex flex-column">
                    <p class="card-text">
                        <strong>${f.name} (${f.name_en})</strong><br>
                        ${f.description}<br>
                        <strong>ราคา: </strong> ${f.price} บาท
                    </p>

                    <!-- ปุ่มอยู่ล่างสุด -->
                    <div class="mt-auto text-center">
                        <button type="button" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#modal-${f.id}">
                        รายละเอียด
                        </button>
                        <a href="#" class="btn btn-secondary text-white">สั่งอาหาร</a>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Modal แยกออกมาจากการ์ด -->
                <div class="modal fade" id="modal-${f.id}" tabindex="-1" aria-labelledby="modalLabel-${f.id}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content px-3">
                        <div class="modal-header-row">
                            <h1 class="modal-title fs-5 my-3" id="modalLabel-${f.id}">รายละเอียด</h1>
                            <img src="${f.image}" class="card-img-top mt-2 rounded-3" style="height: 300px; object-fit: cover;" alt="${f.name}">
                            <h6 class="card-title text-danger pt-2  pb-2">${"ราคา"} ${f.price} ${"บาท"}</h6>
                            <h5 class="card-title text-black">${f.name} (${f.name_en})</h5>
                            <p class="card-text">${f.description}</p>
                            <hr>
                        </div>
                        <div class="modal-body">
                            <h6>วัตถุดิบหลัก</h6>
                            <p class="card-text">${f.ingredients}</p>
                            <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <i class="bi bi-exclamation-triangle-fill me-2"></i>
                            <span>⚠ ห้ามผู้ที่มีอาการแพ้ <strong>"${f.allergens}"</strong> รับประทานโดยเด็ดขาด</span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                            <button type="button" class="btn btn-primary">บันทึก</button>
                        </div>
                    </div>
                </div>
                </div>
            `
        });
        data_area.innerHTML = data
    } else {
        console.log(`No data`)
    }
}

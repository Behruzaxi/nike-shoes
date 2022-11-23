fetch("http://localhost:1234/data")
    .then(res => res.json())
    .then(data => {
        data.forEach(elem => {
            console.log(elem.name);
            let div = document.createElement('div')
            div.classList.add("col-3")
            div.innerHTML = `    
      <div class="air" style="width: 300px;">
      <img src="./img/dc36a688-526a-40a7-b412-40e734a74487.webp" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="niketex">${elem.name}</h5>
        <p class="niketex">Size:${elem.description}</p>
        <p class="niketex">Size:Price:${elem.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`

            let row = document.querySelector('.cartClick');
            row = appendChild(div)
        });
    })
//so'rovlar
fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(data => data.json())
.then(json => rend(json))

function rend (json) {
  console.log(json);
  json.map((item) => {
    let ar = document.createElement(`article`)
    ar.innerHTML = `<img src="images/blut.jpg" alt="post">
    <div class ="content">
      <h2>${item.title}</h2>
       <p>${item.body}</p>
       </div>`
      //  document.querySelelctor(`.grid`).append(ar)
  })
}
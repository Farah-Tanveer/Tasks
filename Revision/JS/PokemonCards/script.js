let main = document.getElementById("main");
let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0GzJpm0E1HI8xRfs4xRmN6MW7z1abuEfQg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVhr9f9fbvn4XuKIhSLRhzmq_PCKkK_a2Sg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3D9LSO75_GBzUhMdM8b3jIESA9qze68iGQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNgANlr6ZbhCTlvMjeSbjkIu5QZuhs-fcOg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduTFu8DwWo8Ivaypkj-8D9dKUYP8shS2C_Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7go1DpBhMV03Z1xuQyfb0eYaEWGWnJa8_Nw&s"];
        let s = ""
    for(let i=1;i<=60;i++){
        let r = Math.floor(Math.random()*6)
        s+=`<div class="card">
                <img src="${arr[r]}">
            </div>`
    }
main.innerHTML=s;
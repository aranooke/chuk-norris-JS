function main() {
    // Перменные
    var [img1,img2] = [document.getElementById("img1"),document.getElementById("img2")];
    var cite = document.getElementById("cite");
    var joke = document.getElementById("date");
    let button = document.getElementById("submit");
    // EVENT Обработка
    button.addEventListener("click",()=>{
        fetch("https://api.chucknorris.io/jokes/random").
        then((res)=>{
            return res.json();
        }).then((data)=> {

            let d = data;
            let icon = d.icon_url;
            img1.src = "img/chuck.png";
            img2.src = "img/chuck.png";
            console.log(data);
            cite.innerText = `${d.value}`;
            joke.innertext = `Joke created at ${d.created_at}`;
        })
})
}
main();  
let img = document.getElementById("img");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    imgnum = 10;
    addnewimgs();
})

function addnewimgs() {
    for (let images = 0; images < imgnum; images++) {
        const newele = document.createElement("img");
        newele.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*5000)}`;
        img.appendChild(newele);

    }

};
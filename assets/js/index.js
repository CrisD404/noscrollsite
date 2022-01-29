let getModels =  () => {
    return fetch("assets/js/json/products.json")
    .then(r => r.json());
}


let setModel = (models, index) => {
    let img = document.getElementById("product_img");
    let title = document.getElementById("product_title");
    let desc = document.getElementById("product_desc");

    title.innerHTML = models[index].name;
    desc.innerHTML = models[index].desc;
    img.setAttribute("src", models[index].img);
    localStorage.setItem("modelIndex", index);
}


let selectModel = async (index) => {
    let models = await getModels().then(r => r.models);
    document.getElementsByClassName("num-act")[0].classList.remove("num-act");
    setModel(models, index);
    document.getElementsByClassName("num")[index].classList.add("num-act");
    localStorage.setItem("modelIndex", index);
}

(async ()=>{
    let modelIndex = 0, index, element;
    let models = await getModels().then(r => r.models);
    setModel(models, modelIndex);

    setInterval(() => {
        modelIndex = localStorage.getItem("modelIndex");
        document.getElementsByClassName("num-act")[0].classList.remove("num-act");
        setModel(models, modelIndex);
        document.getElementsByClassName("num")[modelIndex].classList.add("num-act");
        index = modelIndex == 3 ? 0 : parseInt(modelIndex) + 1;
        localStorage.setItem("modelIndex", index);
    }, 3000);
    



})()
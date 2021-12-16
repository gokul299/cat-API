const generate_btn = document.querySelector(".generate_btn");
generate_btn.addEventListener("click", getImgs);

async function getImgs() {
    try {
        const catsImgDiv = document.querySelector(".catsImgDiv");
        catsImgDiv.innerHTML = ``;
        const data = await fetch("https://thatcopy.pw/catapi/rest/");
        const imgs = await data.json();
        const imgUrl = imgs.url;

        const imgEle = document.createElement("img");
        imgEle.setAttribute("src", `${imgUrl}`);
        imgEle.classList.add("showcase")

        catsImgDiv.append(imgEle);
    }
    catch (error) { (console.log(error)) };
}
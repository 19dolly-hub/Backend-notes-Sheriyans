const factBtn = document.getElementById("fact-btn");
const fact = document.getElementById("fact");
const loader = document.getElementById("loader");

factBtn.addEventListener("click", () => {
    loader.style.display = "block";
    fetch("/fetchData")
    .then(res => res.json())
    .then(data => {
        // console.log(JSON.parse(data));
        // data = JSON.parse(data);
        loader.style.display = "none";
        fact.textContent = data.fact;
    })
    .catch(error => console.log(error));
});
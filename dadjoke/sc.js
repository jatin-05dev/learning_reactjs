let url = "https://icanhazdadjoke.com/";
let btn = document.getElementById("c");
let output = document.getElementById("msin");
let d = () => {
    output.innerText = "Fetching joke... 😂";
    fetch(url, {
        headers: { Accept: "application/json" }
    })
        .then((res) => { return res.json() })
        .then((da) => {
            console.log(da);
            output.innerText = da.joke;
        })
        .catch((err) => {
            console.log(err);
            output.innerText = "Oops! Failed to load joke 😢";
        });
};
// Load one joke when page opens------------------------------------
d();
// Load new joke on button click
btn.addEventListener("click", d);
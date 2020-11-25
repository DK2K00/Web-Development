const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function()
{
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

function randomColor()
{
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;

    const total = r+g+b;
    if(total < 200)
    {
        h1.style.color = "white";
    }
    else
    {
        h1.style.color = "black";
    }

    return `rgb(${r},${g},${b})`;
}
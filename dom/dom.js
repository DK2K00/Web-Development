const i = document.querySelector("p")
// i.style.color = "red";

console.log(i.getAttribute("class"));
i.classList.add("purple");
console.log(i.getAttribute("class"));

const para = document.createElement("p");
para.innerHTML = "This is some extra text";
para.style.color = "red";
i.appendChild(para);

console.log(i.parentElement);
console.log(i.children);
i.prepend(para);
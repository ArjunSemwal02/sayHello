const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener('click', () => {
    const yourName = prompt('Enter your Name');
    spanElement.textContent = yourName;
})
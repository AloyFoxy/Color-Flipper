const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const valueColor = document.querySelector('#valueColor');
const background = document.querySelector('#background')
const wrapperInfo = document.querySelector('#wrapperInfo')

btn.addEventListener('click', () => {
    let min = 1000;
    let max = 9999;
    // const random = Math.floor(100 + Math.random() * 900);

    const random = Math.floor(Math.random() * 16777215).toString(16);

    let color = (`#${random}`)
    let gradientFrom = `from-[${random}]`;
    let gradientTo = `to-[${random}]`;

    console.log(color)
    // background.classList.remove(...background.classList)
    valueColor.innerHTML = color;
    background.style.backgroundColor = color;
    btn.classList.remove('border-slate-800')
    wrapperInfo.classList.remove('border-slate-800')


})
const btn = document.querySelector('#btn');
const valueColor = document.querySelector('#valueColor');
const background = document.querySelector('#background')
const wrapperInfo = document.querySelector('#wrapperInfo')

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    let color = (`#${random}`)

    background.style.backgroundColor = color;

    valueColor.innerHTML = color;

    btn.classList.remove('border-slate-800')
    wrapperInfo.classList.remove('border-slate-800')


})
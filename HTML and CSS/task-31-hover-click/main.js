
const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".tab-indicator");


function changeTab(index) {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[index].classList.add('active');
    
    const tabWidth = tabs[index].offsetWidth;
    const tabLeft = tabs[index].offsetLeft;
    indicator.style.width = tabWidth + "px";
    indicator.style.transform = `translateX(${tabLeft-5}px)`;
    
    content.innerHTML = `<p>${tabContents[index]}</p>`;
}

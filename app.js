const menuItems = document.querySelectorAll('.menu a[href^="#')
menuItems.forEach (item => {
    item.addEventListener('click',scrollToidOnclick)
});
//63 591 1119
function scrollToidOnclick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 64,
        behavior:"smooth",
    })
}

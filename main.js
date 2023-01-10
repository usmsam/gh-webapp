let tabs = document.querySelectorAll('.button'),
    panels = document.querySelectorAll('.panel');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        panels.forEach(panel => panel.classList.remove('active'));
        panels[index].classList.add('active')
    })
})
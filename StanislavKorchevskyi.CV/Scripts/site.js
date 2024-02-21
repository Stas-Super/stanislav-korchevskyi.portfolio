console.log('script are working!')

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = (e) => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHight;
        let id = sec.getAttribute('id');
        console.log('sections');
        if (top >= offset && top < offset + hight) {
            navLinks.forEach(links => {
                console.log('links');
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
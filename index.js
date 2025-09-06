const LxText = document.querySelector(".products .js-text");
const LxH4 = document.querySelector(".contacts .js-h4");
const LxIcon = document.querySelectorAll(".contacts .js-icon");

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inview");
        }
    });
}, {threshold: 0.5});

observer.observe(LxText);
observer.observe(LxH4);
LxIcon.forEach(icon =>{
    observer.observe(icon);
});
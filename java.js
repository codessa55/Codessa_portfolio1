document.addEventListener("DOMContentLoaded", () => {

    // =====================
    // Mobile Menu
    // =====================

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // =====================
    // Scroll Reveal
    // =====================

    const reveals = document.querySelectorAll(".reveal");

    function reveal() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {
                item.classList.add("active");
            }

        });

    }

    reveal();

    window.addEventListener("scroll", reveal);

    // =====================
    // Active Navigation
    // =====================

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            if (window.scrollY >= section.offsetTop - 150) {

                current = section.id;

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // =====================
    // Navbar Glass Effect
    // =====================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(20,20,20,.75)";
            header.style.backdropFilter = "blur(20px)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

        } else {

            header.style.background = "transparent";
            header.style.boxShadow = "none";

        }

    });

    // =====================
    // Mouse Parallax
    // =====================

    const blobs = document.querySelectorAll(".blob");

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - .5) * 40;
        const y = (e.clientY / window.innerHeight - .5) * 40;

        blobs.forEach((blob, index) => {

            blob.style.transform =
                `translate(${x*(index+1)}px,${y*(index+1)}px)`;

        });

    });

    // =====================
    // Floating Profile Image
    // =====================

    const image = document.querySelector(".image-box");

    if(image){

        let angle = 0;

        setInterval(() => {

            angle += 0.02;

            image.style.transform =
            `translateY(${Math.sin(angle)*8}px)`;

        },20);

    }

    // =====================
    // Typing Effect
    // =====================

    const typing = document.querySelector(".typing");

    if(typing){

        const words = [

            "Frontend Developer",
            "Programming Educator",
            "Content Creator",
            "Always Learning"

        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type(){

            const current = words[wordIndex];

            if(!deleting){

                typing.textContent =
                current.substring(0,charIndex++);

                if(charIndex > current.length){

                    deleting = true;

                    setTimeout(type,1200);

                    return;

                }

            }else{

                typing.textContent =
                current.substring(0,charIndex--);

                if(charIndex < 0){

                    deleting = false;

                    wordIndex = (wordIndex+1)%words.length;

                }

            }

            setTimeout(type,deleting?60:120);

        }

        type();

    }

});
const body = document.body;

function navbarMenu() {
    const menuButton = document.querySelector(".menu-button");
    const navbar = document.querySelector(".navbar-links");
    var menuOpen = false;

    menuButton.addEventListener('click', () => {
        menuOpen = !menuOpen;
        menuButton.src = menuOpen ? "./Assets/icons-close.svg" : "./Assets/menu-icon.svg";
        body.style.overflowY = menuOpen ? "hidden" : "scroll";
        navbar.classList.toggle('mobile-nav');
    });
}

function modalHandler() {
    const modalOpener = document.querySelector(".modal-opener");
    const modalCloser = document.querySelector(".modal-closer");
    const modal = document.querySelector(".appointment-modal");
    modalOpener.addEventListener("click", openModal);
    modalCloser.addEventListener("click", closeModal);

    function openModal() {
        body.style.overflowY = "hidden";
        modal.style.display = "block";
    }

    function closeModal() {
        body.style.overflowY = "scroll";
        modal.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target == modal) {
            closeModal();
        }
    }
}



function videoPlayer() {

    const video = document.getElementById("video");
    const playButton = document.querySelector(".video-play-button");

    playButton.addEventListener("click", () => {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener("playing", () => {
        playButton.style.opacity = 0;
    });

    video.addEventListener("pause", () => {
        playButton.style.opacity = 1;
    });

    video.addEventListener("ended", () => {
        if (video.ended) {
            video.currentTime = 0;
        }
    });
}



function carousel() {
    new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 32.5,
        centerSlide: 'true',
        grabCursor: 'true',
        navigation: {
            nextEl: ".next-card-button",
            prevEl: ".prev-card-button",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
}

navbarMenu();
modalHandler();
videoPlayer();
carousel();
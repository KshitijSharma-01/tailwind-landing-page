const navDialog = document.getElementById("nav-dialog")

function handlemenu() {
    navDialog.classList.toggle("hidden")
}

const initialTranslateLTR = -48 * 4
const initialTranslateRTL = 36 * 4

function setupIntersectionObservation(element, isLTR, speed) {
    const intersectioncallback = (entires) => {
        const isIntersecting = entires[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener("scroll", scrollHandler)
        } else {
            document.removeEventListener("scroll", scrollHandler)
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectioncallback)

    intersectionObserver.observe(element)

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR
        } else {
            totalTranslate = -(translateX + initialTranslateRTL)
        }

        element.style.transform = `translateX(${totalTranslate}px)`
    }
}

const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2")
const line3 = document.getElementById("line3")
const line4 = document.getElementById("line4")

setupIntersectionObservation(line1, true, 0.15)
setupIntersectionObservation(line2, false, 0.15)
setupIntersectionObservation(line3, true, 0.15)
setupIntersectionObservation(line4, true, 0.9)

const dtElements = document.querySelectorAll("dt")
dtElements.forEach(element => {
    element.addEventListener("click", () => {
        const ddId = element.getAttribute("aria-controls");
        const ddElements = document.getElementById(ddId);
        const ddArrowIcom = element.querySelectorAll("i")[0];

        ddElements.classList.toggle("hidden");
        ddArrowIcom.classList.toggle("-rotate-180")
    })
})

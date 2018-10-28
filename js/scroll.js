const pixelsTag = document.querySelector("div.pixels") // putting constants up here (outside of fucntions) makes them accessible to all functions below
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("h3.client")
const pageTag = document.querySelector("div.pagination")
const headerTag = document.querySelector("header")

// when i scroll the page, update the pixels tag to be how far
// we've scrolled
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset
    pixelsTag.innerHTML = pixels + "px"
})

// when i scroll the page, increase the width of the progress bar
// accordingly. Note: we could comnine this function with the above
// function but we may want to reuse this code in another project so
// we'll keep it separate so we can copy and paste it.
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollableDistance = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollableDistance

    progressTag.style.width = `${100 * percentage}%`
})

// when i scroll the page, see how far down the page we've scrolled
// then for each section, check whether we've passed it and if we have...
// then update the text in the header
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    sections.forEach(section => {   // for each section, check to see if we've passed it
        if (section.offsetTop - 150 <= pixels) {
            clientTag.innerHTML = section.getAttribute ("data-client")
            pageTag.innerHTML = section.getAttribute("data-pagination")

            if (section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white")
                progressTag.classList.add("white")
            }
            else {
                headerTag.classList.remove("white")
                progressTag.classList.remove("white")
            }
        }
    })
})

// when we scroll the page, make things parallax
// we want to move certain tags based on how far they are from an anchor point
// what is the anchor? it's the middle of the section
// how far should we parallax? A ratio of the middle distance scrolled to the middle point of the anchor
// when we're in the middle of the page, the shapes are in the right place
document.addEventListener("scroll", function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)
    
        sections.forEach(section => {
            const topSection = section.offsetTop
            const midSection = topSection + (section.offsetHeight / 2)

            const distanceToSection = midViewport - midSection

            const parallaxTags = section.querySelectorAll(`[data-parallax]`) // get any tag with data-parallax

            // loop over eached parallaxed tag
            parallaxTags.forEach(tag => {
                const speed = parseFloat(tag.getAttribute("data-parallax")) // parseFloat turn string into decimal number
                tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
        })
    })
})
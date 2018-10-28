const pixelsTag = document.querySelector("div.pixels") // putting constants up here (outside of fucntions) makes them accessible to all functions below
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("h3.client")
const pageTag = document.querySelector("div.pagination")

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
        if (section.offsetTop < pixels) {
            clientTag.innerHTML = "Test123"
            pageTag.innerHTML = "3 / 4"
        }
    })

})
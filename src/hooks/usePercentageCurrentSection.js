import useWindowVerticalPosition from "./useWindowVerticalPosition";

function usePercentageCurrentSection(selector) {
    //gets the page node by its class
    const page = document.querySelector(selector)
    if (!page) return "null"
    //defines the page dimentions
    const yInitial = page.offsetTop

    //defines the height of the viewport
    const windowHeight = window.innerHeight

    //calls the hook to get the current vertical position
    const yPosition = Math.ceil(useWindowVerticalPosition());
    
    //defines the vertical position relative to the page
    const yPositionRelative = yInitial - yPosition
    
    //defines the percentage scrolled in the current section
    const ypositionPercentage = 1 - (yPositionRelative / windowHeight)

    return ypositionPercentage
}

export default usePercentageCurrentSection
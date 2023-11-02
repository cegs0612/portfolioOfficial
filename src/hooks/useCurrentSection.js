import useWindowVerticalPosition from "./useWindowVerticalPosition";

function useCurrentSection() {
    //gets all the sections of the page with the class .page
    const pages =Array.from(document.querySelectorAll('.page'));
    //defines the needed characteristics in a new array
    
    const pagesInfo = pages.map(element => ({
        pageId: element.id,
        pageHeight: element.clientHeight,
        yInitial: element.offsetTop,
        yFinal: element.offsetTop + element.clientHeight
    }));
    
    //calls the hook, to get the vertical position of the window
    const yPosition = Math.ceil(useWindowVerticalPosition());
    
    //gets the id of the current section, when vertical position is between the initial and final vertical values of the section
    let currentSection = null;
    for (let i = 0; i < pagesInfo.length; i++) {
        const element = pagesInfo[i];
        if (yPosition >= element.yInitial && yPosition < element.yFinal) {
            currentSection = element.pageId;
            break;  
        }
    }
   
    return currentSection;
}

export default useCurrentSection
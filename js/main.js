
function showSection(sectionId){
    let sections=document.querySelectorAll('.section')
    sections.forEach((section)=> section.classList.remove('active'))
    let activeSection=document.getElementById(sectionId)
    if(activeSection)
        activeSection.classList.add('active')
}
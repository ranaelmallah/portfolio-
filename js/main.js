
function showSection(sectionId){
    let sections=document.querySelectorAll('.section')
    sections.forEach((section)=> section.classList.remove('active'))
    let activeSection=document.getElementById(sectionId)
    if(activeSection)
        activeSection.classList.add('active')
}

window.addEventListener('load',()=>{
    setTimeout(()=>{
        document.getElementById('loading-screen').classList.add('.fade-out')
        setTimeout(()=>{
            document.getElementById('loading-screen').style.display='none'
            document.getElementById('content').style.display='flex'
        },500)
    },2000)
})
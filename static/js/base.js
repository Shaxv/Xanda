const sideBarCollapse = (x) =>{
    const overlay = document.getElementById("overlay")
    const sideBar = document.getElementById("collections")
    
    if (x == "be"){
        overlay.classList.add("active")
        sideBar.classList.add("active")
    }
    else{
        overlay.classList.remove("active")
        sideBar.classList.remove("active")
    }
}
//
// Base
//

const errorHandler = (item) =>{
    item.style.borderRadius = "5px"

    item.animate([
        {boxShadow: 'none'},
        {boxShadow: '0 0 0 0.20rem rgba(232, 94, 108, 0.7)'},
        {boxShadow: '0 0 0 0.20rem rgba(232, 94, 108, 0.7)'},
        {boxShadow: 'none'},
        {boxShadow: '0 0 0 0.20rem rgba(232, 94, 108, 0.7)'},
        {boxShadow: '0 0 0 0.20rem rgba(232, 94, 108, 0.7)'},
        {boxShadow: 'none'},
    ], {
        duration: 850,
        iterations: 1,
    })
    
    setTimeout(function(){
        item.style.borderRadius = "0"
    }, 850)
}

//
// Sidebar
//

const sideBarCollapse = (x) =>{
    if (x == "be"){
        $("#overlay").animate({
            visibility: 'visible',
            opacity: '1',
        }, 50, function(){
            $("#overlay").addClass("active")
        })

        $("#collections").animate({
            marginLeft: '0',
            visibility: 'visible',
            opacity: '1',
        }, 50, function(){
            $("#collections").addClass("active")
        })
    }
    else{
        $("#overlay").animate({
            visibility: 'hidden',
            opacity: '0',
        }, 50, function(){
            $("#overlay").removeClass("active")
        })

        $("#collections").animate({
            marginLeft: '-280px',
            visibility: 'hidden',
            opacity: '0',
        }, 50, function(){
            $("#collections").removeClass("active")
        })
    }
}

const searchSubmit = () =>{
    errorHandler($("#searchInput")[0])
}
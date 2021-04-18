
//
// Base
//

const errorHandler = (item) =>{
    item.style.borderRadius = "6px"

    item.animate([
        {boxShadow: 'none'},
        {boxShadow: '0 0 0 0.15rem rgba(232, 94, 108, 0.75)'},
        {boxShadow: '0 0 0 0.17rem rgba(232, 94, 108, 0.75)'},
        {boxShadow: 'none'},
        {boxShadow: '0 0 0 0.17rem rgba(232, 94, 108, 0.75)'},
        {boxShadow: '0 0 0 0.15rem rgba(232, 94, 108, 0.75)'},
        {boxShadow: 'none'},
    ], {
        duration: 850,
        iterations: 1,
    })
    
    setTimeout(function(){
        item.style.borderRadius = "0"
    }, 840)
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
    } else {
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
    if ($("#searchInput").val() == ""){
        $("#searchInput").focus()
        errorHandler($("#searchInput")[0])
    } else {
        alert($("#searchInput").val())
    }
}

const openSearch = () =>{
    $("#searchForm").attr("onsubmit", "searchSubmit(); return false;")

    $("#searchLi").addClass("border-right")

    $("#searchInput").css("z-index", "1")
    $("#searchInput").animate({
        margin: '0 12px 0 10px',
        visibility: 'visible',
        opacity: '1',
        borderBottom: '1.4px solid rgba("217, 218, 255, 0.4")',
    }, 50, function(){
        $("#searchInput").addClass("active")
    })
}

window.onload = function(event){
    console.log(event);
    var myId = document.getElementById("test");
    myId.onclick = handleClick;
    
    var obj_lit = {
        firstname: 'Jeppe',
        lastname: 'Jippunen',
        age: 28,
        childs[]
    }
    
    obj_lit.childs[0] = "Hippu";
}
                
function handleClick(event){
    console.log(event);
    event.target.style.opacity = 0;
    event.target.style.fontStyle = "Arial";
}

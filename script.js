const NONE = 'none';
var currentSubMenuDisplayed = NONE;
var currentMenuDisplayed = NONE;

function display(id) {
    document.getElementById(id).style.display='block';
}

function remove(id) {
    if(currentSubMenuDisplayed == NONE)
    document.getElementById(id).style.display= NONE;
}

function toggleKeepDisplayed(id, menuId) {
    console.log(id);
    if(currentSubMenuDisplayed == id) {
        currentSubMenuDisplayed = NONE;
        currentMenuDisplayed = NONE;
        remove(id);
        document.getElementById(menuId).style.backgroundColor = '#58747b';
    } else {
        if (currentSubMenuDisplayed != NONE) {
            remove(currentSubMenuDisplayed);
            document.getElementById(menuId).style.backgroundColor = '#58747b';
        }
        currentSubMenuDisplayed = id;
        currentMenuDisplayed = menuId;
        display(id);
        document.getElementById(menuId).style.backgroundColor = '#145867';
    }
}
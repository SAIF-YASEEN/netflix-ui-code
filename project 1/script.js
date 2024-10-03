function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}




function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("visible");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        const menus = document.getElementsByClassName("menu-content");
        for (let i = 0; i < menus.length; i++) {
            const openMenu = menus[i];
            if (openMenu.classList.contains('visible')) {
                openMenu.classList.remove('visible');
            }
        }
    }
}


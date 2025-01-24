let menu = document.querySelector('#menu-btn');  // Sélectionner le bouton hamburger
let navbar = document.querySelector('.menu');  // Sélectionner la barre de navigation

// Lorsque le bouton hamburger est cliqué
menu.onclick = () =>{
    menu.classList.toggle('fa-times');  // Ajouter ou supprimer la classe 'fa-times' pour changer l'icône du menu
    navbar.classList.toggle('active');  // Ajouter ou supprimer la classe 'active' pour afficher/masquer le menu
};

// Lorsque l'utilisateur fait défiler la page
window.onscroll = () =>{
    menu.classList.remove('fa-times');  // Retirer la classe 'fa-times' si l'utilisateur fait défiler la page
    navbar.classList.remove('active');  // Masquer le menu si l'utilisateur fait défiler la page
}

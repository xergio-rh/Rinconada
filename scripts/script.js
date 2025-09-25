document.addEventListener('DOMContentLoaded', () => {
    // Código para el modal de películas (el que ya tienes) ...

    // --- NUEVO CÓDIGO PARA EL MENÚ DE CATEGORÍAS ---

    const categoriasLink = document.getElementById('categorias-link');
    const categoriasMenu = document.getElementById('categorias-menu');

    categoriasLink.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace de navegación salte a otra página
        categoriasMenu.classList.toggle('dropdown-show');
    });

    // Oculta el menú si el usuario hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (!categoriasLink.contains(event.target) && !categoriasMenu.contains(event.target)) {
            categoriasMenu.classList.remove('dropdown-show');
        }
    });


    // --- NUEVO CÓDIGO PARA EL MENÚ DE PERFIL ---
  const profileLink = document.getElementById('profile-link');
  const profileMenu = document.getElementById('profile-menu');

  profileLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que la página se recargue
    profileMenu.classList.toggle('dropdown-show-profile');
  });

  // Oculta el menú si el usuario hace clic fuera de él
  window.addEventListener('click', (event) => {
    if (!profileLink.contains(event.target) && !profileMenu.contains(event.target)) {
      profileMenu.classList.remove('dropdown-show-profile');
    }
  });




   // --- NUEVO CÓDIGO PARA LA BARRA DE BÚSQUEDA ---
   const searchLink = document.getElementById('search-link');
   const searchInputWrapper = document.getElementById('search-input-wrapper');

   searchLink.addEventListener('click', (event) => {
       event.preventDefault(); // Evita el comportamiento por defecto del enlace
       searchInputWrapper.classList.toggle('active');
       searchInputWrapper.querySelector('.search-input').focus(); // Opcional: enfoca el input al abrir
   });

   // Oculta la barra si el usuario hace clic fuera de ella
   window.addEventListener('click', (event) => {
       const searchContainer = document.querySelector('.search-bar-container');
       if (!searchContainer.contains(event.target)) {
           searchInputWrapper.classList.remove('active');
       }
   });

});


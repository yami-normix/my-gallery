const imagesContainer = document.querySelector('.images-container');
const images = document.querySelectorAll('.img');
const main = document.querySelector('main');


// Agregar un evento de clic a cada imagen
images.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.add('img-big');
    const button = document.createElement('button')
    button.classList.add('btn');
    button.textContent = 'Regresar';
    main.appendChild(button);
    button.addEventListener('click', () => {
        image.classList.remove('img-big');
        button.remove();
        images.forEach((img) => {
            img.style.display = 'block';
            imagesContainer.style.border = '1px solid #000';
        });
    });

    
    // Ocultar las demás imágenes
    images.forEach((img) => {
      if (img !== image) {
        img.style.display = 'none';
        imagesContainer.style.border = 'none';
        
      }
    });
  });
});




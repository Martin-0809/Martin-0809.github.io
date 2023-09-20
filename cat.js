const stars = document.querySelectorAll('.star');

const setStarInitXPosition = (star) => {
  const START_WIDTH = 24;
  const windowWidth = window.innerWidth;
  const starLeftPosition = Math.random() * windowWidth) - START_WIDTH;
  star.style.left = `${starLeftPosition}px`;
};
/* setStarInitXPosition */

window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.moon');
    const moonMoveSpeed = Number(moon.dataset.speed);
    
    moon.style.transform = `translateY(${scrollPositionY * moonMoveSpeed}px)`;
  });
  /* setStarInitXPosition */

window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.moon');
    const moonMoveSpeed = Number(moon.dataset.speed);
    
    moon.style.transform = `translateY(${scrollPositionY * moonMoveSpeed}px)`;
  });window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const moon = document.querySelector('.moon');
    const stars = document.querySelectorAll('.star');
    const parallaxScrollingElements = [moon, ...stars];
  
    parallaxScrollingElements.forEach((element) => {
      const elementMoveSpeed = Number(element.dataset.speed);
      element.style.transform = `
        translateY(${scrollPositionY * elementMoveSpeed}px)
      `;
    });
  });
  
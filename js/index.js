const slider = document.getElementById('slider');
const slideWidth = slider.offsetWidth; // More reliable than window.innerWidth

function scrollSlider(direction) {
  slider.scrollBy({
    left: direction * slideWidth,
    behavior: 'smooth',
  });
}

setInterval(() => {
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  
  if (slider.scrollLeft + slideWidth >= maxScrollLeft) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
  }
}, 5000);

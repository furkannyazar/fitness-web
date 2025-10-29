window.sr = ScrollReveal();

sr.reveal('.animation-left', {
  duration: 1000,
  origin: 'left',
  distance: '10rem',
  delay : 300,
  reset : true
});

sr.reveal('.animation-right', {
    duration: 1000,
    origin: 'right',
    distance: '10rem',
    delay : 400,
    reset : true
  });

  sr.reveal('.animation-top', {
    duration: 1000,
    origin: 'top',
    distance: '10rem',
    delay : 150,
    reset : true
  });

  sr.reveal('.animation-bottom', {
    duration: 1000,
    origin: 'bottom',
    distance: '10rem',
    delay : 150,
    reset : true
  });

ScrollReveal({ reset: true });

ScrollReveal().reveal('.item1',{delay:100});
ScrollReveal().reveal('.item2',{delay:200});
ScrollReveal().reveal('.item3',{delay:300});
ScrollReveal().reveal('.item4',{delay:400});
ScrollReveal().reveal('.item5',{delay:500});
ScrollReveal().reveal('.item6',{delay:600});
ScrollReveal().reveal('.item7',{delay:700});
ScrollReveal().reveal('.item8',{delay:800});
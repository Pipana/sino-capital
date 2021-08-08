  (()=>{
    // Animenu toggle
    if (document.querySelector('.animenu__toggle')) {
      document.querySelector('.animenu__toggle').addEventListener('click', (ev) => {
        ev.currentTarget.classList.toggle('animenu__toggle--active');
        document.querySelector('.animenu__nav').classList.toggle('animenu__nav--open');
      });
    }
  })()

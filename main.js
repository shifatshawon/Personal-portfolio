document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});
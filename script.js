const modal = document.querySelector('.modal-container');

function openModal() {
  modal.classList.add('active');

  const body = document.querySelector('body');
  body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('active');
}
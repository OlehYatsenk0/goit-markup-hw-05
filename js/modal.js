(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector('[data-modal-open]'),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector('[data-modal-close]'),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle('is-open');
    }
})();
  // Открыть модальное окно
document.querySelector('[data-modal-open]').addEventListener('click', function() {
  document.querySelector('.backdrop').classList.add('open');
});

// Закрыть модальное окно
document.querySelector('[data-modal-close]').addEventListener('click', function() {
  document.querySelector('.backdrop').classList.remove('open');
});
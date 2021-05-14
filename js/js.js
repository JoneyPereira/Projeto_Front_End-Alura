document.querySelectorAll('.collapse-title').forEach((el) =>
  el.addEventListener('click', function () {
    el.closest('.collapse').classList.toggle('open');
  })
);
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('.trigger');
  const menu = dropdown.querySelector('.menu');
  const labelSpan = trigger.querySelector('span:first-child');

  // Toggle dropdown
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdowns.forEach(d => { if (d !== dropdown) d.classList.remove('open'); });
    dropdown.classList.toggle('open');
  });

  // Update button text on selection
  menu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      labelSpan.textContent = item.textContent;
      dropdown.classList.remove('open');
    });
  });
});

// Close all dropdowns when clicking outside
document.addEventListener('click', () => {
  dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
});

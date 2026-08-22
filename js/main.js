/**
 * Aartha Axis - Main Execution Hub & Filter Systems
 */
document.addEventListener('DOMContentLoaded', () => {
  // Document filter for notice.html
  const filterButtons = document.querySelectorAll('.filter-btn');
  const docCards = document.querySelectorAll('.doc-item');

  if (filterButtons.length && docCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        docCards.forEach((card) => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
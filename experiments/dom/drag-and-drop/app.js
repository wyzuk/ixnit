// HTML5 Drag and Drop experiment
// What I learned:
//    otherwise the 'drop' event will never fire! (Such a weird HTML5 API design)

const cards = document.querySelectorAll('.card');
const columns = document.querySelectorAll('.column');

let draggedCard = null;

cards.forEach(card => {
  card.addEventListener('dragstart', (e) => {
    draggedCard = card;
    card.classList.add('dragging');
    e.dataTransfer.setData('text/plain', card.id);
  });

  card.addEventListener('dragend', () => {
    draggedCard = null;
    card.classList.remove('dragging');
  });
});

columns.forEach(col => {
  col.addEventListener('dragover', (e) => {
    e.preventDefault(); // Crucial! Allows dropping
    col.classList.add('drag-over');
  });

  col.addEventListener('dragleave', () => {
    col.classList.remove('drag-over');
  });

  col.addEventListener('drop', (e) => {
    e.preventDefault();
    col.classList.remove('drag-over');

    if (draggedCard) {
      col.appendChild(draggedCard);
    }
  });
});

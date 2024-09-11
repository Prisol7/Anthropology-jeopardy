const questions = {
    'box-1a': 'Question for 100 in Category 1',
    'box-2a': 'Question for 100 in Category 2', 
    'box-3a': 'Question for 100 in Category 3', 
    'box-4a': 'Question for 100 in Category 4', 
    'box-1b': 'Question for 200 in Category 1',
    'box-2b': 'Question for 200 in Category 2', 
    'box-3b': 'Question for 200 in Category 3', 
    'box-4b': 'Question for 200 in Category 4', 
    'box-1c': 'Question for 300 in Category 1',
    'box-2c': 'Question for 300 in Category 2', 
    'box-3c': 'Question for 300 in Category 3', 
    'box-4c': 'Question for 300 in Category 4', 
    'box-1d': 'Question for 400 in Category 1',
    'box-2d': 'Question for 400 in Category 2', 
    'box-3d': 'Question for 400 in Category 3', 
    'box-4d': 'Question for 400 in Category 4', 
    'box-1e': 'Question for 500 in Category 1',
    'box-2e': 'Question for 500 in Category 2', 
    'box-3e': 'Question for 500 in Category 3', 
    'box-4e': 'Question for 500 in Category 4', 
}; 

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const boxId = this.id
        const question = questions[boxId];
        document.getElementById('popup-content').textContent = question;
        document.getElementById('popup-overlay').style.display = 'block';
        document.getElementById('popup-card').style.display = 'block';
    });
});

document.getElementById('popup-overlay').addEventListener('click', function() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-card').style.display = 'none';
}); 
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // Close the popup here
      const popupOverlay = document.getElementById('popup-overlay');
      popupOverlay.style.display = 'none';
      const popup = document.getElementById('popup-card');
      popup.style.display = 'none';
    }
  });
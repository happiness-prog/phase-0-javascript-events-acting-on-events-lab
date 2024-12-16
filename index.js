// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (left > 0) { 
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10); // Parse current left position
    const gameWidth = 400; 
    const dodgerWidth = 40; 
  
  
    if (left + dodgerWidth < gameWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  
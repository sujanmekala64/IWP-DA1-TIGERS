
document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const selectedChoice = document.getElementById('Field106').value;
    
    
    alert(`Selected choice: ${selectedChoice}`);
  });
  
  
// Tiger data (associative array)
const tigers = {
    "1": ["Rajah", "Shere Khan"],
    "2": ["Amur", "Valentina"],
    "3": ["Akela", "Kali"],
  };
  
  const tigerAgeInput = document.getElementById('tiger-age');
  const showTigersButton = document.getElementById('show-tigers');
  const resultsDiv = document.getElementById('results');
  
  showTigersButton.addEventListener('click', function() {
    const enteredAge = parseInt(tigerAgeInput.value);
  
    // Clear previous results
    resultsDiv.textContent = "";
    resultsDiv.classList.remove('empty');
  
    if (tigers.hasOwnProperty(enteredAge)) {
      const tigerNames = tigers[enteredAge];
      resultsDiv.textContent = `Tigers at age ${enteredAge}: ${tigerNames.join(', ')}`;
    } else {
      resultsDiv.textContent = `No tigers found at age ${enteredAge}`;
      resultsDiv.classList.add('empty');
    }
  });
  
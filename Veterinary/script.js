const doctorNameInput = document.getElementById('doctor-name');
const doctorNameForm = document.getElementById('vet-info');

doctorNameInput.addEventListener('input', function() {
    if (/\d/.test(this.value)) {
        this.classList.add('error');
    } else {
        this.classList.remove('error');
    }
});

doctorNameForm.addEventListener('submit', function(event) {
    if (doctorNameInput.classList.contains('error')) {
        event.preventDefault();
        alert("Doctor's name cannot contain numbers!");
    }
});

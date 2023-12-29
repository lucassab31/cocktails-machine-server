function loadSpinner() {
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'flex';
}

function hideSpinner() {
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
}

function swalError(text) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text,
    });
}

function swalSuccess(text, callback) {
    Swal.fire({
        icon: 'success',
        title: "Succès",
        text: text,
        timer: 2000,
        timerProgressBar: true,
    }).then((result) => {
        callback();
    });
}
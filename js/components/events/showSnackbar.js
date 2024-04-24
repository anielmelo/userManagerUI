const snackbar = document.querySelector('#snackbar')

export const showSnackbar = (message, type) => { 
    if (type === 'false') {
        snackbar.className = 'show-error';
    } else {
        snackbar.className = 'show-success';
    }

    snackbar.innerText = message;

    setTimeout(function(){ 
        snackbar.className = snackbar.className.replace(snackbar.className, '');
        snackbar.innerText = '';
    }, 3000);
}

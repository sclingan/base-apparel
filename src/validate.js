/* Check input as valid email but prevent default pop up */
document.addEventListener('invalid', function(e){
    return function(e){
    e.preventDefault();
    };
});




/* Check for valid email */
export default function submitData(e) {
    // prevent default pop-up
    e.preventDefault();
    const email = document.getElementById('email').value;
    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
    const errors = Array.from(document.getElementsByClassName('error-hidden'));
    let answer = regex.test(email);
    if(answer) {
        // If valid email
        let form = document.getElementById('submit-email');
        // remove any error messages
        form.remove(errors);
        // show confirmation message on success
        const confirm = document.getElementById('confirm');
        confirm.classList.remove('confirm-hidden');
        confirm.classList.add('confirmation');
      
    } else {
        // show error icon and alert for invalid email
        errors[0].classList.remove('error-hidden');
        errors[0].classList.add('error-icon');
        errors[1].classList.remove('error-hidden')
        errors[1].classList.add('error');
    }
}


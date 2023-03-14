
document.addEventListener('invalid', function(e){
    return function(e){
    e.preventDefault();
    };
});





export default function submitData(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
    const errors = Array.from(document.getElementsByClassName('error-hidden'));
    var answer = regex.test(email);
    if(regex.test(email)) {
        console.log('submitted');
        window.location.reload();
      
    } else {
        errors[0].classList.remove('error-hidden');
        errors[0].classList.add('error-icon');
        errors[1].classList.remove('error-hidden')
        errors[1].classList.add('error');
    }
}


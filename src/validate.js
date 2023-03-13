
document.addEventListener('invalid', function(e){
    return function(e){
    e.preventDefault();
    };
});





export default function submitData(e) {
    e.preventDefault();
    const email = document.getElementById('email');
    console.log(email.innerHTML);
    const errors = Array.from(document.getElementsByClassName('error-hidden'));
    errors[0].classList.remove('error-hidden');
    errors[0].classList.add('error-icon');
    errors[1].classList.remove('error-hidden')
    errors[1].classList.add('error');
}
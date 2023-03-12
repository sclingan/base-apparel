// const email = Array.from(document.getElementsByTagName('input'));
// console.log(email);

document.addEventListener('invalid', function(e){
    return function(e){
    e.preventDefault();
    };
});


const button = document.getElementsByTagName('button');

// button[0].addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e);
//     // make icon and text apear
// })
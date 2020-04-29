const calculator = document.getElementsByClassName('container');
const keys = document.getElementsByClassName('containerKeys');

keys.addEventListener('click', e =>{
    const key = e.target;
    const action = key.dataset.action
    if(e.target.matches('button')){
        if(!action){
            console.log('number key!');
        }
    }
})
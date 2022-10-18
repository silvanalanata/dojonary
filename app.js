function login(element){
    if (element.value == 'Login'){
      element.value = 'Logout';
      element.innerText = 'Logout';
    }
    else{
        element.value = 'Login';
        element.innerText = 'Login';
    }
}

  

function remover(element){
    element.remove();
}
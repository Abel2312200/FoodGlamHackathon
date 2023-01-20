$('.carousel').carousel({
    interval: 2000
  })

  const form = document.querySelector('form');
  const inputName = document.querySelector('#inputName');
  const inputPhone = document.querySelector('#inputPhone');
  const inputMessage = document.querySelector('#messages');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Récupérer les valeurs des champs de formulaire
    const name = inputName.value;
    const phone = inputPhone.value;
    const message = inputMessage.value;
    // Stocker les valeurs dans le LocalStorage
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('message', message);

    console.log('ok')
  });  
  

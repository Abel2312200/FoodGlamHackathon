$('.carousel').carousel({
  interval: 2000
})
//akou jean vivien debut
//formulaire contact
//initialisation du  formulaire Message
let listMessageContact = []
//------------------------------------------------------------

let buttonContact = document.querySelector('#buttonContact')
//-----------------------------------------------------------
//ajout des differents messages a la liste des messages des utilisateurs
buttonContact.addEventListener('click', (e) => {
  let nomContact = document.querySelector('.nomContact').value
  let emailContact = document.querySelector('.emailContact').value
  let textareaContact = document.querySelector('.textareaContact').value
  e.preventDefault()
  listMessageContact.push({ information: `${nomContact}`, email: `${emailContact}`, message: `${textareaContact}` });
  console.log(listMessageContact);
  localStorage.listMessageContact = JSON.stringify(listMessageContact);
  nomContact.innerTex=" "
  // emailContact=" "
  // textareaContact=" "
})

// ecriture dans un tableau du contenu des differents messages recu par les utilisateurs
//fonction a utiliser par l'administrateur qfin d'afficher le contenu du message
var localObjectListMessageContact = localStorage.listMessageContact;
function confectionTableauMessage() {// fonction a appeler dans la page admin
  let tableauMessage = `
                  <tr>
                  <th> nom & Prenom</th>
                  <th> email</th>
                  <th> message</th>
                  </tr>`;
  for (const element of   JSON.parse(localObjectListMessageContact)) {

    tableauMessage += `<tr>
                      <td>${element.information}</td>
                      <td>${element.email}</td>
                      <td>${element.message}</td>
                  </tr>`
  }

  console.log(Total)

  //appel le tableau
  affichageTableauMessage(tableauMessage)

}
//------------------------------------------------------------------------
function affichageTableauMessage(tableauMessage) {
  const menus = document.querySelector('#menus')
  const tableau = document.createElement('table')
  tableau.innerHTML = tableauMessage;
  menus.append(tableauMessage);
}

//section  retourne des resultat reservation champ reerver a la page administrateur a apporter des modifications
//information
// le input nom et prenom doit avoir pour classe nomReservation
// le input telephone doit avoir pour classe  telephoneReservation
// le input nombre de personne doit avoir pour classe nombreReservation
let listReservation = []
//------------------------------------------------------------

let buttonReservation = document.querySelector('#buttonReservation')
//-----------------------------------------------------------
//ajout des differents messages a la liste des messages des utilisateurs
buttonReservation.addEventListener('click', (e) => {
  let nomReservation = document.querySelector('.nomReservation').value
  let telephoneReservation = document.querySelector('.telephoneReservation').value
  let nombrePersonReservation = document.querySelector('.nombreReservation').value
  e.preventDefault()
  listReservation.push({ information: `${nomReservation}`, contact: `${telephoneReservation}`, nombre: `${nombrePersonReservation}` });
  console.log(listReservation);
  //pour le stockage dans le local storage pour l'acces a la page admis
  localStorage.listReservation = JSON.stringify(listReservation);

})
// ecriture dans un tableau du contenu des differents messages recu par les utilisateurs
//fonction a utiliser par l'administrateur qfin d'afficher le contenu du message en tant que objet stocker dans le local storage
var localObjectListReservation = localStorage.listReservation;
//affiche le contenu dans la console
console.log(JSON.parse(localObjectListReservation));
function confectionTableauReservation() {//fonction a appéllé dans la page admin 
  let tableauReservation = `
                  <tr>
                  <th> nom & Prenom</th>
                  <th> email</th>
                  <th> message</th>
                  </tr>`;
  for (const element of JSON.parse(localObjectListReservation )) {

    tableauReservation += `<tr>
                      <td>${element.information}</td>
                      <td>${element.contact}</td>
                      <td>${element.nombre}</td>
                  </tr>`
  }

  console.log(tableauReservation)

  //appel le tableau
  affichageTableauReservation(tableauReservation)

}
//------------------------------------------------------------------------
function affichageTableauReservation(tableauReservation) {
  const menus = document.querySelector('#tableauReservation')
  const tableau = document.createElement('table')
  tableau.innerHTML = tableauReservation;
  menus.append(tableau);
  tableau.setAttributes("border", 2);
}

//akou jean vivien fin
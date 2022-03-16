const modalOpen = document.querySelector('.preview-button'),
      modal = document.querySelector('.modal-overlay'),

      closeModal = document.querySelector('.form'),
      userName = document.querySelector('.user-name'),
      userEmail = document.querySelector('.user-email'),
      userMesagge = document.querySelector('.user-message');
let userObj = window.localStorage;
let userArr = [userEmail, userMesagge, userName];

function formValidation(elem, condition){
  if(elem.value !=  " " && condition){
    elem.style.border = "1px solid green";
    userObj.setItem(elem.className, elem.value);
  }else{
    elem.style.border = "1px solid red";
  }
};

function clearData(elem){
  for(let i = 0; i < elem.length; i++){
    elem[i].value = '';
    elem[i].style.border = 0;
  }
};

modalOpen.addEventListener('click', function(e){
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  clearData(userArr);
});

closeModal.addEventListener('submit', function(e){
  e.preventDefault();

  userObj.clear();
  formValidation(userName, userName.value.match(/[a-z, а-я]/gm));
  formValidation(userEmail, userEmail.value.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'));
  formValidation(userMesagge, userMesagge.value.length > 1)
  if (userObj.hasOwnProperty('user-name') && userObj.hasOwnProperty('user-email') && userObj.hasOwnProperty('user-message')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';

    for(let i=0; i<userObj.length; i++) {
      let key = userObj.key(i);
      console.log(`${key}: ${userObj.getItem(key)}`);
    }
  }
});
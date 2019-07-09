let email = prompt('your e-mail, please');
let passUser = 'UserPass';
let passAdmin = 'AdminPass';
let changePassUser = null;
let changePassAdmin = null;
let minEmailLength = 6;
let minPassLength = 5;

switch (true) {
  case email === '':
    alert('Canceled');
    break;
  case email === null:
    alert('Canceled');
    break;

  case email.length < minEmailLength:
    alert('don`t know any emails having name length less than 6 symbols');
    break;

  case email === 'user@gmail.com':
    passUser === prompt('your password, please')
      ? changePassUser = confirm('Do you want to change your password?')
      : alert('Wrong password');
    if (changePassUser === true) {
      if (passUser === prompt('your OLD password, please')) {
        let newPassUser = null,
            newPassUser2 = null;
        newPassUser = prompt('Enter your NEW password, please');

        newPassUser.length < minPassLength
          ? alert('It’s too short password. Sorry.')
          : newPassUser2 = prompt('Enter your NEW password AGAIN, please');

          if(newPassUser2.length >= minPassLength) {
            if(newPassUser === newPassUser2){
              passUser = newPassUser2;
              alert('You have successfully changed your password.'); 
            } else {
              alert('You wrote the wrong password.');
            }
          } else {
            alert('It’s too short password. Sorry.')
          }
        changePassUser = null;
      } else {
        alert('Wrong password');
      }
      console.log(changePassUser);
    } 
    if (changePassUser === false) {
      alert('You have failed the change')
    }
    
    break;

  case email === 'admin@gmail.com':
      passAdmin === prompt('your password, please')
        ? changePassAdmin = confirm('Do you want to change your password?')
        : alert('Wrong password');
      if (changePassAdmin === true) {
        if (passAdmin === prompt('your OLD password, please')) {
          let newPassAdmin = null,
              newPassAdmin2 = null;

          newPassAdmin = prompt('Enter your NEW password, please');
  
          newPassAdmin.length < minPassLength
            ? alert('It’s too short password. Sorry.')
            : newPassAdmin2 = prompt('Enter your NEW password AGAIN, please');
  
            if(newPassAdmin2.length >= minPassLength) {
              if(newPassAdmin === newPassAdmin2){
                passAdmin = newPassAdmin2;
                alert('You have successfully changed your password.'); 
              } else {
                alert('You wrote the wrong password.');
              }
            } else {
              alert('It’s too short password. Sorry.')
            }
          changePassAdmin = null;
        } else {
          alert('Wrong password');
        }
      }
      if (changePassAdmin === false) { 
        alert('You have failed the change')
      }
      break;

  default:
    alert('I don`t know you');
}

function correct(id){
document.getElementById(id).style.color = "green";
}

const usersName = () => {

    const nameInput = document.getElementById('name').value;
    const nameResult = document.getElementById('nameResult');

    let result;
    if(  isNaN(nameInput) == true) {
   result = 'correct name';
   correct('nameResult');
    }else {
   result = 'incorrect name';
   }
   nameResult.textContent = result;

}

const usersLastName = () => {

      const lastNameInput = document.getElementById('lastName').value;
      const lastNameResult = document.getElementById('lastNameResult');

     let result2;
     if(  isNaN(lastNameInput) == true) {
    result2 = 'correct last name';
    correct('lastNameResult');
     }else {
    result2  = 'incorrect last name';
    }
    lastNameResult.textContent = result2;
 }

const usersBirthday = () => {

    const birthdayInput = document.getElementById('birthday').value;
    const birthdayResult = document.getElementById('birthdayResult');

   let date = new Date().getTime();
   let date2 = new Date(birthdayInput).getTime();
   let dateYear= (((((date - date2)/1000)/60)/60)/24)/360;
    let result3;

   if ( dateYear >= 18){
   result3 = 'correct date';
   correct('birthdayResult');
   }else {
   result3 = 'incorrect date';
   }

    birthdayResult.textContent= result3;
}

const usersEmail = () => {

     const emailInput = document.getElementById('email').value;
     const emailResult = document.getElementById('emailResult');
     const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
     let y = reg.test(emailInput);

     let result4;
     if ( y === true){
        result4 = 'correct email';
        correct('emailResult');
        }else {
        result4 = 'incorrect email';
        }
     emailResult.textContent = result4;
}


function init() {
    const button = document.getElementById('add-btn');
   button.addEventListener('click', usersName);
   button.addEventListener('click', usersLastName);
   button.addEventListener('click', usersBirthday);
   button.addEventListener('click', usersEmail);
}

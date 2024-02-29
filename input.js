/*const lastName = () => {

     const lastNameInput = document.getElementById('lastName').value;
     const lastNameResult = document.getElementById('lastNameResult');

    let result;
    if(  isNaN(lastNameInput) == true) {
   result = 'ok';
    }else {
   result  = 'no'
   }
   lastNameResult.textContent = result;

   console.log(lastNameInput)

}*/

const name = () => {

    const nameInput = document.getElementById('name').value;
    const nameResult = document.getElementById('nameResult');

    let result3;
    if(  isNaN(nameInput) == true) {
   result3 = 'ok';
    }else {
   result3 = 'no'
   }
   nameResult.textContent = result3;

}

const email = () => {

     const emailInput = document.getElementById('email').value;
     const emailResult = document.getElementById('emailResult');
     const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
     let y = reg.test(emailInput);
     let result;

     if ( y == true){
        result = 'ok';
        }else {result = 'wrong email'
        }
     emailResult.textContent = result;
}

const birthday = () => {

    const birthdayInput = document.getElementById('birthday');
    const birthdayResult = document.getElementById('birthdayResult');
    let y = document.getElementById('birthday').value;

   let date = new Date().getTime();
   let date2 = new Date(y).getTime();
   let dateYear= (((((date - date2)/1000)/60)/60)/24)/360;
    let result2;

   if ( dateYear > 18){
   result2 = 'ok';
   }else {
   result2 = 'too young';
   }

    birthdayResult.textContent= result2;
}



function init() {
    const button = document.getElementById('add-btn');
   button.addEventListener('click', email);
   button.addEventListener('click', birthday);
   button.addEventListener('click', name);
   //button.addEventListener('click', lastName);
}

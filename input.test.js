describe('String Calculator', function() {
    // 1
    beforeEach(function() {
      var fixture = `<div id="fixture">

          <span id="nameResult"></span>
                 <label class="a">Users name<input id="name" type="text"></label>
             <span id="lastNameResult"></span>
                 <label class="a">Users last name<input id="lastName" type="text"></label>
             <span id="birthdayResult"></span>
                 <label class="a">Users birthday (Age 18+)<input id="birthday" type="date"></label>
             <span id="emailResult"></span>
                 <label class="a">Users email<input id="email" type="text"></label>
             <input id="add-btn" type="button" value="Add">
    </div>`;
      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
    });


    afterEach(function() {
      document.body.removeChild(document.getElementById('fixture'));
    });
    // 2
    beforeEach(function() {
      init();
    });
    // 3
    it('age 18+', function() {
        document.getElementById('birthday').value = '';
        document.getElementById('add-btn').click();
        expect(document.getElementById('birthdayResult').innerHTML).toBe('correct date');
      });

    it('email', function() {
      document.getElementById('email').value = '';
      document.getElementById('add-btn').click();
      expect(document.getElementById('emailResult').innerHTML).toBe('incorrect email');
    });
      it('nameCorrectColor', function() {
          document.getElementById('name').value = 'ania';
          document.getElementById('add-btn').click();
          expect(document.getElementById('nameResult').style.color).toBe('green');
        });
  });
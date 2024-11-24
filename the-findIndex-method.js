  ////////close account
  document
    .querySelector('form__btn--close')
    .addEventListener('click', function (e) {
      e.preventDefault();
      console.log('clicked');
      if (
        document.querySelector('.form__input--user').value ===
        currentAccount.username
      ) {
        const index = accounts.findIndex(
          acc => acc.username === currentAccount.username
        );
        console.log(index);
      }
    });

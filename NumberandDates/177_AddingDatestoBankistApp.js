    //Create current date and time
    //day/month/year hour:min
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes();
    document.querySelector(
      '.date'
    ).textContent = `${day}/${month}/${year}, ${hour}:${min}`;

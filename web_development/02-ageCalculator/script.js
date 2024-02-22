const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const dayDOB = parseInt(document.querySelector('#dayDOB').value);
  const monthDOB = parseInt(document.querySelector('#monthDOB').value);
  const yearDOB = parseInt(document.querySelector('#yearDOB').value);
  const dayToday = parseInt(document.querySelector('#dayToday').value);
  const monthToday = parseInt(document.querySelector('#monthToday').value);
  const yearToday = parseInt(document.querySelector('#yearToday').value);

  const results = document.querySelector('#results');

  if (
    isNaN(dayDOB) ||
    isNaN(monthDOB) ||
    isNaN(yearDOB) ||
    isNaN(dayToday) ||
    isNaN(monthToday) ||
    isNaN(yearToday)
  ) {
    results.innerHTML = 'Please enter valid values for all fields.';
    return;
  }

  const dob = new Date(yearDOB, monthDOB - 1, dayDOB);
  const today = new Date(yearToday, monthToday - 1, dayToday);

  if (today < dob) {
    results.innerHTML = 'Date of Birth cannot be in the future.';
    return;
  }

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  results.innerHTML = `<span>You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.</span>`;
});

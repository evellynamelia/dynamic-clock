const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})

document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.getElementById("calendar-body");
  const currentMonth = document.querySelector(".current-month");

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonthNumber = date.getMonth();

  function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonthNumber, 1).getDay();
    const lastDay = new Date(currentYear, currentMonthNumber + 1, 0).getDate();

    calendarBody.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement("td");
      calendarBody.appendChild(cell);
    }

    for (let i = 1; i <= lastDay; i++) {
      const cell = document.createElement("td");
      cell.textContent = i;
      calendarBody.appendChild(cell);
    }

    currentMonth.textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date) + " " + currentYear;
  }

  renderCalendar();

  document.querySelector(".prev-month").addEventListener("click", function () {
    date.setMonth(date.getMonth() - 1);
    currentYear = date.getFullYear();
    currentMonthNumber = date.getMonth();
    renderCalendar();
  });

  document.querySelector(".next-month").addEventListener("click", function () {
    date.setMonth(date.getMonth() + 1);
    currentYear = date.getFullYear();
    currentMonthNumber = date.getMonth();
    renderCalendar();
  });
});

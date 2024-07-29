import displayDateInfo from "./events.js";

const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get current date
const date = new Date();

// Get current month
let currentMonth = date.getMonth();

// Get current year
let currentYear = date.getFullYear();

// Function to render days
function renderCalendar() {
  // Get prev month, current month, and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // Update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // Update days HTML
  let daysHTML = "";

  // Prev days HTML
  for (let x = firstDay.getDay(); x > 0; x--) {
    daysHTML += `<div class="day prev" data-year="${prevLastDay.getFullYear()}" data-month="${prevLastDay.getMonth()}" data-day="${prevLastDayDate - x + 1}">${prevLastDayDate - x + 1}</div>`;
  }

  // Current month days
  for (let i = 1; i <= lastDayDate; i++) {
    // Check if it's today, then add "today" class
    const isToday = i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();
    daysHTML += `<div class="day ${isToday ? 'today' : ''}" data-year="${currentYear}" data-month="${currentMonth}" data-day="${i}">${i}</div>`;
  }

  // Next month days
  for (let j = 1; j <= nextDays; j++) {
    daysHTML += `<div class="day next" data-year="${lastDay.getFullYear()}" data-month="${lastDay.getMonth() + 1}" data-day="${j}">${j}</div>`;
  }

  // Run this function with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = daysHTML;

  // Add event listeners to day elements
  document.querySelectorAll('.day').forEach(dayElement => {
    dayElement.addEventListener('click', (event) => {
      const year = parseInt(event.target.dataset.year, 10);
      const month = parseInt(event.target.dataset.month, 10);
      const day = parseInt(event.target.dataset.day, 10);
      handleDayClick(year, month, day);
    });
  });
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  // Increase current month by one
  currentMonth++;
  if (currentMonth > 11) {
    // If month gets greater than 11, make it 0 and increase year by one
    currentMonth = 0;
    currentYear++;
  }
  // Rerender calendar
  renderCalendar();
});

// Prev month button
prevBtn.addEventListener("click", () => {
  // Decrease by one
  currentMonth--;
  // Check if less than 0, then make it 11 and decrease year
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// Go to today
todayBtn.addEventListener("click", () => {
  // Set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // Rerender calendar
  renderCalendar();
});

// Hide today button if it's already current month and vice versa
function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}

// Handle day click function
function handleDayClick(year, month, day) {
  // Create a date object for the clicked day
  const clickedDate = new Date(year, month, day);

  // Get the day of the week (0-6) and convert it to a string
  const dayOfWeek = days[clickedDate.getDay()];

  // Get the full month name
  const monthName = months[month];

  // Get the year
  const yearNumber = clickedDate.getFullYear();

  // Format the full date (e.g., "July 29, 2024")
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = clickedDate.toLocaleDateString(undefined, options);

  // Log the results
  // console.log(`Day of the week: ${dayOfWeek}`);
  // console.log(`Month: ${monthName}`);
  // console.log(`Year: ${yearNumber}`);
  // console.log(`Formatted date: ${formattedDate}`);

  displayDateInfo(day, dayOfWeek, monthName, yearNumber, formattedDate);
}

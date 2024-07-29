
const events = {
    Mon: [
      { name: "Scientific Computing", time: "08H00 - 09H45", type:"Class",venue:"OLS1" },
      { name: "Abstract Mathematics", time: "10H15 - 11H00", type:"Class",venue:"OLS4" },
      { name: "Advanced Analysis", time: "11H15 - 12H00", type:"Class",venue:"OLS4" },
      { name: "Mechanics Tutoring", time: "12H15 - 13H15", type:"Tutorial",venue:"Private" },
      { name: "Might Study", time: "19H15 - 22H00", type:"Study Session",venue:"Private" },
      { name: "Not Available", time: "22H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ],
    Tue: [
        { name: "Computer Networks", time: "08H00 - 09H45", type:"Class",venue:"NCB3" },
        { name: "Mathematical Modeling and Methods", time: "10H15 - 12H00", type:"Class",venue:"OLS1" },
        { name: "Mathematical Statistics", time: "12H15 - 13H15", type:"Class",venue:"A1" },
        { name: "Might Study", time: "19H15 - 22H00", type:"Study Session",venue:"Private" },
        { name: "Not Available", time: "22H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ],
    Wed: [
        { name: "CN - AA", time: "08H00 - 09H45", type:"Lab",venue:"MSL" },
        { name: "Mathematical Statistics", time: "14H15 - 15H00", type:"Class",venue:"C9" },
        { name: "AM-STATS-AA", time: "15H15 - 17H00", type:"Tutorial",venue:"OLS4" },
        { name: "Not Available", time: "18H30 - 19H30", type:"Busy - Do not disturb",venue:"Private" },
        { name: "Mashau - IDSA", time: "20H00 - 22H00", type:"Tutoring Session",venue:"Private" },
        { name: "Not Available", time: "22H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ],
    Thu: [
        { name: "CN - AA", time: "12H30 - 13H15", type:"Tutorial",venue:"MSL" },
        { name: "Mechanics", time: "14H00 - 17H00", type:"Class",venue:"WSS5" },
        { name: "Might Study", time: "19H15 - 22H00", type:"Study Session",venue:"Private" },
        { name: "Not Available", time: "22H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ],
    Fri: [
        { name: "Abstract Mathematics", time: "08H00 - 08H45", type:"Class",venue:"OLS4" },
        { name: "Advanced Analysis", time: "09H00 - 09H45", type:"Class",venue:"OLS4" },
        { name: "Analysis Of Algorithms", time: "14H15 - 16H00", type:"Class",venue:"SHB5" },
        { name: "Not Available", time: "17H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ],
    Sat: [
        { name: "Not Available", time: "08H00 - 18H00", type:"Busy - Do not disturb",venue:"Private" },
        { name: "Might Study", time: "19H15 - 22H00", type:"Study Session",venue:"Private" },
        { name: "Not Available", time: "22H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ],
    Sun: [
        { name: "Not Available", time: "09H00 - 11H00", type:"Busy - Do not disturb",venue:"Private" },
        { name: "Aphiwe - IDSA", time: "14H00 - 17H00", type:"Tutoring Session",venue:"Private" },
        { name: "Might Study", time: "19H15 - 22H00", type:"Study Session",venue:"Private" },
        { name: "Not Available", time: "22H00 - 02H00", type:"Busy - Do not disturb",venue:"Private" }
    ]
  };


  const assessments = {
    "29 July 2024" : [{name:"Scientific Computing",type:"Lab",venue:"MSL"}],
    "31 July 2024" : [{name:"Computer Networks",type:"Quiz",venue:"MSL"}],
    "7 August 2024" : [{name:"Computer Networks",type:"Test",venue:"MSL"},{name:"Abstract Mathematics",type:"Tutorial Test",venue:"Flower Hall"}],
    "8 August 2024" : [{name:"Mechanics",type:"Assignment",venue:"TBC"}],
    "13 August 2024" : [{name:"Mathematical Modeling and Methods",type:"Test",venue:"RSEH"}],
    "14 August 2024" : [{name:"Advanced Analysis",type:"Tutorial Test",venue:"RSEH"}],
    "19 August 2024" : [{name:"Scientific Computing",type:"Lab Test",venue:"MSL"}],
    "21 August 2024" : [{name:"Mathematical Statistics",type:"Test",venue:"MSL"}],
    "22 August 2024" : [{name:"Mechanics",type:"Test",venue:"Flower Hall"}],
    "28 August 2024" : [{name:"Computer Networks",type:"Quiz",venue:"MSL"}],
    "11 September 2024" : [{name:"Abstract Mathematics",type:"Test",venue:"RSEH"}],
    "18 September 2024" : [{name:"Advanced Analysis",type:"Test",venue:"RSEH"},{name:"Computer Networks",type:"Quiz",venue:"MSL"}],
    "25 September 2024" : [{name:"Mathematical Statistics",type:"Test",venue:"MSL"}],
    "27 September 2024" : [{name:"Mechanics",type:"Assignment",venue:"TBC"}],
    "1 October 2024" : [{name:"Mathematical Modeling and Methods",type:"Test",venue:"RSEH"}],
    "2 October 2024" : [{name:"Abstract Mathematics",type:"Tutorial Test",venue:"RSEH"},{name:"Computer Networks",type:"Quiz",venue:"MSL"}],
    "7 October 2024" : [{name:"Scientific Computing",type:"Test",venue:"RSEH"}],
    "9 October 2024" : [{name:"Advanced Analysis",type:"Tutorial Test",venue:"RSEH"}],
    "10 October 2024" : [{name:"Mechanics",type:"Test",venue:"Flower Hall"}],
    "16 October 2024" : [{name:"Mathematical Statistics",type:"Test",venue:"MSL"}],
  };
  





function displayPost(activities,eventDate){

    let event = activities;

    if (assessments[eventDate]) {
        // Check if the event is a special type that needs multiple assessments checked
        if (event.name === "AM-STATS-AA") {
            const assessment = assessments[eventDate].find(a => 
                a.name === "Abstract Mathematics" || 
                a.name === "Advanced Analysis" || 
                a.name === "Mathematical Statistics"
            );
            if (assessment) {
                event.type = assessment.type;
                event.name = assessment.name;
                event.venue = assessment.venue;
            }
        } else if (event.name === "CN - AA") {
            const assessment = assessments[eventDate].find(a => 
                a.name === "Computer Networks" || 
                a.name === "Analysis Of Algorithms"
            );
            if (assessment) {
                event.name = assessment.name;
                event.type = assessment.type;
                event.venue = assessment.venue;
            }
        } else {
            const assessment = assessments[eventDate].find(a => a.name === event.name);
            if (assessment) {
                event.type = assessment.type;
                event.venue = assessment.venue;
            }
        }
    }
    // Create the main card div with necessary classes
    const cardDiv = document.createElement('div');
    if(event.type === "Study Session"){
        cardDiv.classList.add("bg-primary");
    }else if(event.type === "Tutorial"){
        cardDiv.classList.add("bg-secondary");
    }else if(event.type === "Tutoring Session"){
        cardDiv.classList.add("bg-warning");
    }else if(event.type === "Lab"){
        cardDiv.classList.add("bg-info");
    }else if(event.type === "Test"){
        cardDiv.classList.add("bg-success");
    }else if(event.type === "Exam"){
        cardDiv.classList.add("bg-danger");
    }else if(event.type === "Quiz"){
        cardDiv.classList.add("bg-primary-subtle");
    }else if(event.type === "Tutorial Test"){
        cardDiv.classList.add("bg-danger-subtle");
    }else if(event.type === "Class"){
        cardDiv.classList.add("bg-black");
    }else if(event.type === "Assignment"){
        cardDiv.classList.add("bg-warning-subtle");
    }else{
        cardDiv.classList.add("bg-dark");
    }

    cardDiv.classList.add('card','postCard' ,'mb-3', 'border-start-0', 'border-end-0','text-white');
    cardDiv.style.maxWidth = "100%";

    // Create the row div
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'g-0');

    // Create the column for the card body
    const colBodyDiv = document.createElement('div');
    colBodyDiv.classList.add('col-md-8');

    // Create the card body div
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    // Create the card title element
    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title','fw-bolder');
    cardTitle.textContent = event.name;

    // Create the card text paragraph
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = event.type;

    // Create the card text paragraph
    const venue = document.createElement('p');
    venue.classList.add('card-text');
    venue.textContent = `Venue : ${event.venue}`;


    // Create the small text element
    const smallText = document.createElement('small');
    smallText.classList.add('text-body-primary','fw-lighter');
    smallText.textContent = `Time : ${event.time}`;

    // Create the small text paragraph
    const smallTextParagraph = document.createElement('p');
    smallTextParagraph.classList.add('card-text');
    smallTextParagraph.appendChild(smallText);

    // Append elements to the card body
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(venue);
    cardBodyDiv.appendChild(smallTextParagraph);

    // Append the card body column to the row
    colBodyDiv.appendChild(cardBodyDiv);

    // Append both columns to the row
    rowDiv.appendChild(colBodyDiv);

    // Append the row to the main card div
    cardDiv.appendChild(rowDiv);

    // Assuming you want to add this card to a container element with id 'container'
    document.querySelector('.main-body').appendChild(cardDiv);

}

//current day
const date = new Date();
const dayIndex = date.getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const currentDayOfWeek = daysOfWeek[dayIndex];
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString(undefined, options);
displayDateInfo(dayIndex,currentDayOfWeek,currentMonth,currentYear,formattedDate);


export default function displayDateInfo(day,dayOfWeek,monthName,yearNumber,fullDate){
   // Ensure the dayOfWeek exists in the events object
   if (events[dayOfWeek]) {
    // Display the posts/events for the day
    document.querySelector('.main-body').textContent = "";
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = `${dayOfWeek} - ${fullDate}`;
    cardTitle.classList.add('dayHeader','fw-bolder','mt-3');
    document.querySelector('.main-body').appendChild(cardTitle);

    events[dayOfWeek].forEach(event => {
        displayPost(event,fullDate);
    });
    } else {
        console.error(`No events found for ${dayOfWeek}`);
    }
}




  const assessments = {

  
  };
  
 
  
  

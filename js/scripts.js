// Business Logic

function Ticket() {
  this.viewers = {}; 
} 

Ticket.prototype.addViewer = function(viewer) {
  this.viewers[viewer.firstName] = viewer;
}

Ticket.prototype.findViewer = function(firstName) {
  if(this.viewers[firstName] !== undefined) {
    return this.viewers[firstName];
  }
  return false;
}

Ticket.prototype.deleteTicket = function(firstName) {
  if (this.viewer[firstName] !== undefined) {
    return this.viewer.firstName;
  } 
  return false;
};

function Viewer(firstName, movieSelect, timeSelect, ageInput) {
  this.firstName = firstName;
  this.movieSelect = movieSelect; 
  this.timeSelect = timeSelect;
  this.ageInput = ageInput;
}


// UI Logic

let ticket = new Ticket(); 

function displayTicketDetails(event) {
  const firstName = document.querySelector("input#first-name").value;
  const displayTicket = ticket.findViewer(firstName);
  document.querySelector(".first-name").innerText = displayTicket.firstName;
  document.querySelector(".movie-select").innerText = displayTicket.movieSelect;
  document.querySelector(".time-select").innerText = displayTicket.timeSelect;
  document.querySelector(".age-input").innerText = displayTicket.ageInput;
  document.querySelector("div#ticket-details").removeAttribute("class");
    if (document.getElementById("age-input") >= 62 || document.getElementById("age-input") <= 6) {
      let ticketPrice = 9;
      console.log(ticketPrice);
    } else if (document.getElementById("star-wars").checked) {
      let ticketPrice = 10;
    } else {
      console.log("end of the line");
      let ticketPrice = 15;
    };
    document.querySelector(".ticket-price").innerText = ticketPrice;
};


function handleFormSubmission(event) {
  event.preventDefault();
  const firstName = document.querySelector("input#first-name").value;
  const movieSelect = document.querySelector("select#movie-select").value;
  const timeSelect = document.querySelector("select#time-select").value;
  const ageInput = document.querySelector("input#age-input").value;
  let newTicket = new Viewer(firstName, movieSelect, timeSelect, ageInput);
  ticket.addViewer(newTicket);
  console.log(ticket.viewers);
}


window.addEventListener("load", function (){
  document.querySelector("form#ticket-info").addEventListener("submit", handleFormSubmission);
  document.querySelector("form#ticket-info").addEventListener("submit", displayTicketDetails);
});
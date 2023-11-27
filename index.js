/*

Main Objective
List of freelancers with the following data attached to them name, occupation, price of services.

Average price of all freelancer services including newly added freelancers which updates the average

new freelancers appear every few seconds with the same data which contributes to the average price


Pseudo code

Step 1 
Array of freelancers

Step 2
Display array of freelancers with data

Step 3
Display average of price

Step 4
Add new freelancers to list and update average  

*/


// Array of Freelancers
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  ];

  //Extra names
/*
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
*/


  // Display array of freelancers with data
  render();

  function render() {

  const classParent = document.getElementById("freelancerList");

  const freelancersItems = freelancers.map ((flItems) => {
    const listElement = document.createElement("li");
    listElement.textContent = flItems;
    return listElement;

  });

  //classParent.replaceChildren(...freelancersItems);

  console.log(freelancersItems);

  }
  
  /*
  render();

  function render() {

    const freelancer = document.querySelector("freelancersList");
    const listElements = freelancers.map((person) => {
      const element = document.createElement("li");
      element.classList.add( person.name, person.price, person.occupation);
      return element;
    });
    freelancer.replaceChildren(...listElements);

  }

  */

  // Display average of price

  function getMean(freelancers) {

    let sum = 0;
    
    for (let i = 0; i < freelancers.length; i++) {
      sum += freelancers[i];
    }
    return sum / freelancers.length;

  }

  // Add new freelancers to list and update average

  const addFreelancervalId = setInterval(addFreelancer, 1000);

  function addFreelancer() {
    const freelancers = newFl[Math.floor(Math.random() * newFl.length)];

  
    freelancers.push( person.name, person.price, person.occupation );
  
    render();

  }




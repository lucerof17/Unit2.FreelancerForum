document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Freelancer Forum";
  body.appendChild(mainTitle);

  const averagePriceElement = document.createElement("p");
  averagePriceElement.id = "average-price";
  averagePriceElement.textContent = "Average Starting Price: $0";
  body.appendChild(averagePriceElement);

  const possibleNames = ["Alice", "Bob", "Carol", "David", "Eva"];
  const possibleOccupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];

  let freelancers = [];

  function updateAveragePrice() {
      const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
      const averagePrice = totalPrices / freelancers.length || 0;
      averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
  }

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Available Freelancers";
  body.appendChild(sectionTitle);


  const freelancerList = document.createElement("div");
  freelancerList.id = "freelancer-list";
  body.appendChild(freelancerList);


  function addFreelancer(name, occupation, startingPrice) {
      const freelancer = { name, occupation, startingPrice };
      freelancers.push(freelancer);

      const freelancerContainer = document.createElement("div");
      freelancerContainer.className = "freelancer";

      freelancerContainer.innerHTML = `
          <div><strong>Name:</strong> ${name}</div>
          <div><strong>Occupation:</strong> ${occupation}</div>
          <div><strong>Starting Price:</strong> $${startingPrice}</div>
      `;

      freelancerList.appendChild(freelancerContainer);

      updateAveragePrice();
  }

  addFreelancer("Alice", "Writer", 30);
  addFreelancer("Bob", "Teacher", 50);

  function generateRandomFreelancer() {
      const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
      const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
      const randomStartingPrice = Math.floor(Math.random() * 100) + 30;

      addFreelancer(randomName, randomOccupation, randomStartingPrice);
  }

  setInterval(generateRandomFreelancer, 5000);
});

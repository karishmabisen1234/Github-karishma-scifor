const destinations = {
  bus: [
    { name: "Nagpur", price: 500 },
    { name: "Amravati", price: 700 },
    { name: "Wardha", price: 600 },
    { name: "Chandrapur", price: 800 },
    { name: "Yavatmal", price: 750 },
    { name: "Akola", price: 900 },
    { name: "Buldhana", price: 950 },
    { name: "Hingoli", price: 850 },
    { name: "Washim", price: 800 },
    { name: "Nanded", price: 1200 },
    { name: "Aurangabad", price: 1500 },
    { name: "Jalgaon", price: 1700 },
    { name: "Satara", price: 2200 },
    { name: "Pune", price: 2400 }
  ],
  train: [
    { name: "Nagpur", price: 500 },
    { name: "Mumbai", price: 1800 },
    { name: "Pune", price: 2000 },
    { name: "Ahmedabad", price: 2100 },
    { name: "Surat", price: 1900 },
    { name: "Indore", price: 2100 },
    { name: "Bhopal", price: 2000 },
    { name: "Jabalpur", price: 1200 },
    { name: "Raipur", price: 1500 },
    { name: "Aurangabad", price: 1500 },
    { name: "Nasik", price: 1600 },
    { name: "Shirdi", price: 1700 },
    { name: "Amravati", price: 700 },
    { name: "Sevagram", price: 650 },
    { name: "Chhindwara", price: 900 },
    { name: "Wardha", price: 550 },
    { name: "Katol", price: 600 },
    { name: "Pulgaon", price: 700 },
    { name: "Hinganghat", price: 750 },
    { name: "Yavatmal", price: 800 }
  ],
  plane: [
    { name: "Mumbai", price: 3200 },
    { name: "Pune", price: 3000 },
    { name: "Aurangabad", price: 3000 },
    { name: "Shirdi", price: 2900 },
    { name: "Delhi", price: 3000 },
    { name: "Bangalore", price: 3100 },
    { name: "Hyderabad", price: 3000 },
    { name: "Chennai", price: 3100 },
    { name: "Kolkata", price: 3300 },
    { name: "Goa", price: 3400 }
  ],
  cab: [
    { name: "Nagpur", price: 50 },
    { name: "Sitabuldi", price: 300 },
    { name: "Mahal", price: 300 },
    { name: "Civil Lines", price: 350 },
    { name: "Dharampeth", price: 350 },
    { name: "Sadar", price: 350 },
    { name: "Manish Nagar", price: 400 },
    { name: "Trimurti Nagar", price: 400 },
    { name: "Pratap Nagar", price: 350 },
    { name: "Koradi Temple", price: 600 },
    { name: "Ambazari Lake", price: 300 },
    { name: "Futala Lake", price: 300 },
    { name: "Gorewada Zoo", price: 500 },
    { name: "Dragon Palace", price: 700 },
    { name: "Ramtek Temple", price: 900 },
    { name: "Kalmeshwar", price: 700 }
  ]
};


const loadDestinations = mode => {
  const list = document.getElementById("destinationList");
  const title = document.getElementById("modeTitle");
  title.textContent = `${mode.toUpperCase()} DESTINATIONS`;
  list.innerHTML = "";

  destinations[mode].forEach(({ name, price }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${name}</h3>
      <p>Starting from ₹${price}</p>
      <button onclick="bookNow('${name}', ${price})">Book Now</button>
    `;
    list.appendChild(card);
  });
};


const bookNow = (place, price) => {
  window.location.href = `booking.html?place=${encodeURIComponent(place)}&price=${price}`;
};


function searchDestination() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = [];

  Object.values(destinations).forEach(arr => {
    arr.forEach(d => {
      if(d.name.toLowerCase().includes(query)) filtered.push(d);
    });
  });

  const list = document.getElementById("destinationList");
  list.innerHTML = "";

  filtered.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${d.name}</h3>
      <p>Starting from ₹${d.price}</p>
      <button onclick="bookNow('${d.name}', ${d.price})">Book Now</button>`;
    list.appendChild(card);
  });

  const title = document.getElementById("modeTitle");
  title.textContent = query ? `Search Results for "${query}"` : 'All Destinations';
}


loadDestinations("bus");
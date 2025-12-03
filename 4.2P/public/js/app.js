console.log("✅ app.js loaded");

const addCards = (events) => {
  const container = document.getElementById("events");
  container.innerHTML = "";

  events.forEach(event => {
    const card = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-content">
            <span class="card-title">${event.title}</span>
            <p><b>Location:</b> ${event.location}</p>
            <p><b>Date:</b> ${event.date}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
};

fetch("/api/events")
  .then(res => res.json())
  .then(data => {
    if (data.statusCode === 200) {
      addCards(data.data);
    } else {
      console.error("API returned error:", data);
    }
  })
  .catch(err => console.error("Fetch failed:", err));


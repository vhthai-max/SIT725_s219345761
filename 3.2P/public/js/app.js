fetch("/api/events")
  .then(res => res.json())
  .then(data => {
    let output = "";
    data.forEach(event => {
      output += `
        <div class="col s12 m4">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${event.title}</span>
              <p>Date: ${event.date}</p>
              <p>Location: ${event.location}</p>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById("events").innerHTML = output;
  });

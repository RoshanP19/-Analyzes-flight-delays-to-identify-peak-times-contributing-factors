const flightData = [
    { flightNumber: "AA123", origin: "Ayodhya Airport", destination: "Delhi Airport", delay: 45, date: "2024-11-01" },
    { flightNumber: "DL456", origin: "Delhi Airport", destination: "Mumbai Airport Airport", delay: 30, date: "2023-11-02" },
    { flightNumber: "UA789", origin: "Chandigarh Airport", destination: "Ahmedabad airport", delay: 15, date: "2024-11-15" },
    { flightNumber: "SW111", origin: "Delhi Airport", destination: "Pune Airport", delay: 60, date: "2023-12-04" },
    { flightNumber: "WN222", origin: "Ayodhya Airport", destination: "Delhi Airport", delay: 20, date: "2024-10-18" },
];

// Function to filter data based on selections
function filterData() {
    const airport = document.getElementById("airport").value;
    const year = document.getElementById("year").value;
    const tableBody = document.querySelector("#filtered-data-table tbody");

    // Clear existing data
    tableBody.innerHTML = "";

    // Filter logic
    const filteredData = flightData.filter(flight => {
        const flightYear = new Date(flight.date).getFullYear();
        return (airport === "all" || flight.origin === airport) && flightYear == year;
    });

    // Display results
    if (filteredData.length > 0) {
        filteredData.forEach(flight => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${flight.flightNumber}</td>
                <td>${flight.origin}</td>
                <td>${flight.destination}</td>
                <td>${flight.delay}</td>
                <td>${flight.date}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="5">No flights match the selected filters.</td>`;
        tableBody.appendChild(row);
    }
}

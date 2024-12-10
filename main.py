import matplotlib.pyplot as plt

# Sample flight delay data
flight_data = [
    { "flightNumber": "AA123", "origin": "Ayodhya Airport", "destination": "Delhi Airport", "delay": 45, "date": "2024-11-01"},
    { "flightNumber": "DL456", "origin": "Delhi Airport", "destination": "Mumbai Airport Airport", "delay": 30, "date": "2023-11-02" },
    { "flightNumber": "UA789", "origin": "Chandigarh Airport", "destination": "Ahmedabad airport", "delay": 15, "date": "2024-11-15" },
    { "flightNumber": "SW111", "origin": "Delhi Airport", "destination": "Pune Airport", "delay": 60, "date": "2023-12-04" },
    { "flightNumber": "WN222", "origin": "Ayodhya Airport", "destination": "Delhi Airport", "delay": 20, "date": "2024-10-18" },
]

# Prepare data for plotting
airports = ['Ayodhya Airport', 'Delhi Airport', 'Chandigarh Airport']
delays = {
    'Ayodhya Airport': [],
    'Delhi Airport': [],
    'Chandigarh Airport': []
}

# Organize delays by airport
for flight in flight_data:
    delays[flight['origin']].append(flight['delay'])

# Create average delays per airport
avg_delays = {airport: sum(delays[airport]) / len(delays[airport]) if delays[airport] else 0 for airport in airports}

# Plot the data
fig, ax = plt.subplots(figsize=(8, 6))

ax.bar(avg_delays.keys(), avg_delays.values(), color=['#0073e6', '#ff5733', '#33cc33'])
ax.set_xlabel('Airport')
ax.set_ylabel('Average Delay (Minutes)')
ax.set_title('Average Flight Delay by Airport')

plt.show()

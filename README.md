This project provides a simple web interface to retrieve Formula 1 team radio recordings for specific drivers during race sessions. Users can select a driver and a race meeting to view the available recordings.

Getting Started

To run the project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/rimonberhe/Formula-1-Driver-Recordings.git
Open the index.html file in your web browser.
Features

Responsive design with background image.
Dropdowns for selecting drivers and race meetings.
Loading spinner while fetching data.
Fetches team radio recordings based on user-selected driver and race meeting.
Usage

Choose a driver from the dropdown list.
Choose a race meeting from the second dropdown list.
Click the "Search" button to load the team radio recordings.
JavaScript (script.js)

Functions
meetingsDropdown

Populates the race meetings dropdown with options.
Triggered on the window's onload event.
loadTeams

Fetches team radio recordings based on user-selected driver and race meeting.
Displays a loading spinner during the fetch operation.
Calls the displayTeams function to render the recordings.
displayTeams

Displays driver and race meeting information along with team radio recordings.
Handles the rendering of the main card and individual recordings.
Dependencies

Tailwind CSS: Used for styling the web interface.
License

This project is licensed under the MIT License.
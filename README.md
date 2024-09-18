# Netflix Clone

A fully functional Netflix clone built with JavaScript, React, Vite, and Tailwind for the front end, and Python, Django, PostgreSQL, and Psycopg for the back end. This project allows users to browse, search, and view movies and shows, replicating the Netflix experience.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login/signup)
- Browse and search movies and shows
- Watch trailers and view details
- Responsive design using Tailwind CSS
- Dynamic data fetching from a Django REST API

## Technologies

- **Front End:**
  - JavaScript
  - React
  - Vite
  - Tailwind CSS

- **Back End:**
  - Python
  - Django
  - PostgreSQL
  - Psycopg

## Installation

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
Set up the front end:

bash
Copy code
cd client
npm install
npm run dev
Set up the back end:

bash
Copy code
cd server
pip install -r requirements.txt
Configure your PostgreSQL database:

Create a new PostgreSQL database.
Update the database settings in the settings.py file in your Django project.
Run database migrations:

bash
Copy code
python manage.py migrate
Start the Django server:

bash
Copy code
python manage.py runserver
Usage
Once both the front end and back end are running, you can access the application at http://localhost:3000 for the front end and http://localhost:8000 for the back end (API).

Future Enhancements
Deploy the project on AWS for public access.
Implement advanced search and filtering options.
Add user reviews and ratings for movies and shows.
Enhance the user interface and experience.
Contributing
Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

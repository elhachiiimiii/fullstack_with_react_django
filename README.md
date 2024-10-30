# ReactWithDjango


Project Report: ReactDjango Fitness Website

Project Overview:
The ReactDjango Fitness Website is a full-stack web application built using React.js for the frontend and Django for the backend. It provides features for managing courses, blogs, gym trainers, and newsletters for a fitness center.

Key Features:

Courses: Displaying the latest courses offered by the fitness center.
Blogs: Showcasing daily posts related to fitness and health.
Gym Trainers: Introducing the expert team of gym trainers.
Newsletter: Allowing users to subscribe to the fitness center's newsletter.
Technologies Used:

Frontend: React.js, Axios, React Toastify for notifications.
Backend: Django, Django REST Framework.
Database: SQLite (default database for Django).
How to Run the Project:

Prerequisites:

Node.js installed on your system.
Python installed on your system.
Pipenv for managing Python dependencies.


Steps to Run:

-- Install Python Dependencies:
git clone <repository-url>
cd ReactDjango
pipenv shell

Activate the Virtual Environment:
cd ../reactApp
npm install

-- Install React Dependencies:
cd ../reactApp
npm install

################################
Start the Django Server:
python manage.py runserver

Start the React Development Server:
npm start

################################


Access the Application:
Open your browser and go to http://localhost:3000 to view the React frontend. The Django backend API will be running at http://localhost:8000.
you have to open them in same time 



Troubleshooting:

If you encounter any issues, here are some steps to troubleshoot:

Check Dependencies: Ensure that all required dependencies are installed. If any are missing, refer to the requirements.txt file and install them using Pipenv.

Create Superuser: To add new courses, blogs, gym trainers, or newsletters, access the Django admin panel at http://127.0.0.1:8000/admin. Log in with the superuser credentials created during setup. From there, you can manage and add new content easily.

Activate Virtual Environment: Before installing Python dependencies or running the Django server, activate the virtual environment using the command pipenv shell.

New Content: To add new courses, blogs, gym trainers, or newsletters, navigate to the respective sections in the Django admin panel. Click on the "Add" button to create new entries. Make sure to fill in all required fields and save your changes.



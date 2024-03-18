### README for Steiner Cafe Website

#### Introduction
Welcome to the Steiner Cafe website project! This Django-based website is designed to provide an online presence for the Steiner Cafe, showcasing our menu, location, and unique coffee culture. Developed with Django and Bootstrap, it's structured for easy navigation and a beautiful user experience.

#### Prerequisites
Before running the project locally, ensure you have the following installed on your system:
- Python 3.8 or higher
- Django (The version used in this project. If not specified, the latest version is recommended.)
- Other dependencies (If your project uses other libraries, they should be installed separately. This guide assumes Django is the primary dependency.)

#### Setting Up Locally
To get the Steiner Cafe website running on your local machine, follow these steps:

1. **Clone the Project** (Assuming the project is hosted on a repository; otherwise, ensure you have the project files on your machine.)

2. **Install Dependencies**  
Since a `requirements.txt` file was not detected, install Django using pip (Python's package installer):
   ```
   pip install django
   ```
   Replace `django` with the exact version if necessary, and install any other required packages similarly.

3. **Navigate to the Project Directory**
   Open a terminal or command prompt, and navigate to the project's root directory:
   ```
   cd path/to/mysite
   ```

4. **Migrate the Database**
   Before running the server, apply migrations to set up your database schema:
   ```
   python manage.py migrate
   ```

5. **Run the Development Server**
   Start the Django development server with the following command:
   ```
   python manage.py runserver
   ```
   This will start the server on the default port 8000. You can access the website by visiting `http://127.0.0.1:8000` in your web browser.

6. **Explore the Website**
   Navigate through the website to explore its features. You can interact with the site as a visitor or perform administrative tasks in the Django admin interface (if an admin user has been set up).

#### Additional Information
- **Creating an Admin User**
  If you need to create an admin user to manage the site via Django's admin interface, run the following command and follow the prompts:
  ```
  python manage.py createsuperuser
  ```
- **Dependencies**
  This guide assumes Django is the primary dependency. If your project uses other external libraries, please ensure they are installed via pip or included in a `requirements.txt` file for easier setup.



### Managing Static Deployment on GitHub Pages

To host the Steiner Cafe website on GitHub Pages, you need to compile all static assets into a folder that GitHub Pages can serve directly. The following steps will guide you through creating a branch with the static files necessary for GitHub Pages deployment.

1. **Collect Static Files**  
   First, you need to collect all static files into a directory that will be committed to the repository. Run the following command:

python manage.py collectstatic

This will collect all static files into the `staticfiles` directory (or another directory if you've set `STATIC_ROOT` in your settings).

2. **Create a New Branch for GitHub Pages**  
Create a new branch that will contain only the files needed for the static site deployment. You can name this branch `gh-pages`:

git checkout -b gh-pages

3. **Remove Unnecessary Files**  
In this new branch, delete all files and directories unrelated to the static deployment, including Python files, Django apps, etc. Leave only the static files and any HTML files you wish to serve.

4. **Add and Commit Changes**  
Add the remaining files to the Git index and commit them:

git add -A
git commit -m "Prepare static files for GitHub Pages"


5. **Push to GitHub**  
Push the new `gh-pages` branch to your GitHub repository:

git push origin gh-pages


6. **Configure GitHub Pages to Use the Branch**  
Go to your repository settings on GitHub, navigate to the "Pages" section, and configure GitHub Pages to use the `gh-pages` branch. If you have a custom domain, configure it as well.

7. **Verify the Deployment**  
After pushing to GitHub, GitHub Pages will build and deploy your site. Verify that the site is up and running by accessing the provided GitHub Pages URL.

Remember to keep the `gh-pages` branch updated with any changes you make to your static files.

#### Note on Django and Static Files
Since GitHub Pages only serves static files, you won't be able to use Django's dynamic features, such as database interactions or server-side processing. For full functionality, consider hosting on a platform that supports Python and Django, like Heroku or a similar service.



#### Support
For any questions or issues setting up the project locally, please reach out to the project maintainers or consult the Django documentation for more detailed instructions on working with Django projects.
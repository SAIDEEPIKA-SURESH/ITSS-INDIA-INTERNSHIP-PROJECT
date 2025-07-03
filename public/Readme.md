# Warehouse Inventory Management System

This project is a web-based Warehouse Inventory Management System developed as part of the ITSS India Internship. It is designed to simplify and digitize the process of recording inventory details within a warehouse environment. The system allows users to log in and access a detailed product entry form, which is integrated with a MySQL database via a Node.js backend. The focus of the project is on full-stack integration, user interface clarity, and database connectivity for persistent data storage.

## Features

The system includes a login interface and a product data entry form. Users can enter information about various warehouse items, including the product ID, name, quantity, category, supplier names, date of entry, expiry date, availability status, warehouse location, and brand. All entries are stored in a structured relational database using secure server-side insertion. The user interface is styled with modern CSS to enhance usability and appearance.

## Technologies Used

- HTML and CSS for frontend design
- Node.js with Express for backend server
- MySQL for relational database storage
- JavaScript for frontend enhancements (e.g., auto date)
- Visual Studio Code for development
- GitHub for version control and hosting

## Project Structure

my-form-app/
├── public/
│ ├── login_form.html
│ ├── product_add.html
│ └── images/
│ ├── login_photo.avif
│ └── warehouse.jpeg
├── server.js
├── package.json
└── README.md

To run the project locally, first ensure that Node.js and MySQL are installed on your system.

**1. Clone the repository:**

git clone https://github.com/SAIDEEPIKA-SURESH/ITSS-INDIA-INTERNSHIP-PROJECT.git
cd ITSS-INDIA-INTERNSHIP-PROJECT

**2. Install dependencies:**
   npm install
   
**3. Set up your MySQL database:** sql
CREATE DATABASE warehouse_db;

CREATE TABLE inventory (
  product_id VARCHAR(10),
  product_name VARCHAR(100),
  category VARCHAR(50),
  quantity INT,
  suppliers TEXT,
  entry_date DATE,
  expiry_date DATE,
  status VARCHAR(30),
  location VARCHAR(50),
  brand VARCHAR(50)
);

**4.Start the server:**
node server.js

**5. Open in browser:**
Navigate to http://localhost:3000/login_form.html to begin using the application.

**Web Page Descriptions**
The application contains two primary HTML pages: login_form.html and product_add.html.

The login_form.html page serves as the initial entry point. It presents a login form where users are prompted to input a username and a PIN. Although the current implementation does not include authentication logic, this form functions as a navigational interface that redirects users to the product entry form upon submission. The page is styled using a background image and a centered, responsive form layout. This structure is designed to support future enhancements such as user authentication or session control.

The product_add.html page is the core component of the system. It contains a detailed form that allows users to enter product information into the system. The layout uses a two-column grid to organize fields clearly and efficiently. Input elements include dropdown menus for selecting product IDs, categories, and brands; text fields for entering names and quantities; checkboxes for selecting multiple suppliers; date pickers for entry and expiry dates; radio buttons for selecting warehouse rack locations; and a final submission button. Client-side validation is provided through the required attribute to ensure that no essential fields are left blank. A JavaScript snippet auto-fills the current date for the date of entry.

When the form is submitted, the data is sent via a POST request to the backend route handled by the Express.js server. The server processes the request, connects to the MySQL database, and inserts the submitted data into the inventory table. A success or error message is returned to the user based on the outcome of the insertion. The entire page is styled using CSS with features such as background blur, shadows, and rounded corners to provide a clean and modern user experience.

Together, these pages provide a working prototype of a warehouse data entry system that can be expanded with features such as user authentication, product listing, data updates, deletions, and remote deployment.

**Future Enhancements**

Implementing user authentication and session management

Adding a dashboard to view, update, and delete inventory records

Integrating search and filter capabilities

Deploying the project using cloud platforms like Render or Railway

![image](https://github.com/user-attachments/assets/5510e8af-b739-4759-b67a-e55a20eb5ce0)
![image](https://github.com/user-attachments/assets/5b78334d-b94d-4369-a08b-35b8101b39cf)
![image](https://github.com/user-attachments/assets/3b942f8f-7617-4320-b3ed-88992f2c52a0)

**Sai Deepika
Intern – ITSS India Internship Program
Node.js and MySQL based Full Stack Web Application**

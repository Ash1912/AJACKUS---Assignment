# AJACKUS-Assignment

# User Management Dashboard

This is a simple web application for managing user data. It allows users to view, add, edit, and delete user details with interaction via the mock API provided by JSONPlaceholder.

## Features

- User List:
   
   ->Displays a table of users with their ID, Name, Email, and Department.
   ->Includes Edit and Delete options for each user.

- Add User:
   
   ->A form to input details for a new user.
   ->Submits data via a POST request to the mock backend.
- Edit User:
   
   ->A dedicated form to edit user details on a new page.
   ->Updates the user via a PUT request to the mock backend.

- Delete User:

   ->Deletes a user via a DELETE request to the mock backend.

-Pagination:
   
   ->Displays a paginated list of users, fetching limited users per page.

-Error Handling:

   ->Displays error notifications for API failures.

-Responsive Design:

   ->The layout adjusts for different screen sizes, ensuring usability on both desktop and mobile.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Backend**: JSONPlaceholder
- **Frontend**: React, Axios
- **Styling**: CSS

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/user-management-dashboard.git
   cd user-management-dashboard

2. **Install Dependencies**:
   ```bash
   npm install

3. **Start the React Application**:
   ```bash
   npm start

This project will run on
```bash
http://localhost:3000
```

## Project Structure

```bash

project-folder/
├── public/
├── src/
│   ├── components/
│   │   ├── UserList.jsx       # Displays the user list
│   │   ├── AddUser.jsx        # Form for adding a new user
│   │   ├── EditUser.jsx       # Form for editing an existing user
│   │   ├── Notification.jsx   # Displays success or error messages
│   │   ├── Pagination.jsx     # Pagination controls for user list
│   ├── api.js                 # Handles all API requests
│   ├── App.jsx                # Main app file with routing
│   ├── index.js               # Entry point for the React app
│   └── styles/                # Contains all CSS files
│       ├── App.css
│       ├── UserList.css
│       ├── Form.css
│       ├── Notification.css
│       └── Pagination.css
├── package.json
└── README.md
```

## API Integration

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API for demonstration purposes. The following endpoints are used:

- **GET /users**: Fetches the list of users.
- **POST /users**: Simulates adding a new user.
- **PUT /users/:id**: Simulates editing an existing user.
- **DELETE /users/:id**: Simulates deleting a user.

## Functionality

### User List

- Displays all users in a table format with the following columns:
  -ID
  -First Name
  -Last Name
  -Email
  -Department

- Provides "Edit" and "Delete" buttons for each user.
- Pagination controls to navigate between pages of users.

### Add User

- Accessible via the "Add User" button on the dashboard.
- A form where users can input:
  - **Name**
  - **Email**
  - **Department** (defaults to "IT" for now as the API doesn't support this field).
- Client-side validation ensures all fields are required.

### Edit User

- Accessible via the "Edit" button in the user list.
- Pre-populates the form with the user's current details.
- Allows users to update Name and Email.
- On submission, updates the user data in the backend.

### Delete User

- Deletes a user from the mock API.
- Updates the user list on successful deletion.

### Error Handling

- Displays a notification bar for:
  - API request failures.
  - Invalid form inputs.

## Screenshots

### Dashboard

![image](https://github.com/user-attachments/assets/8499401b-c845-413f-b1f2-3ff1d287bdef)


### Add User Form

![image](https://github.com/user-attachments/assets/7da651f3-9159-4dd5-815b-d52cb38ed2ef)


### Edit User Form

![image](https://github.com/user-attachments/assets/d506cef1-08b4-4466-82d6-ab58299c454a)


## Responsive Design

- Fully responsive for desktops, tablets, and mobile devices.
- Optimized layout for smaller screens.

## Challenges Faced

### Pagination:

- Adjusting API calls to limit users per page and handling page state dynamically.

### Mock API Limitations:

- Since JSONPlaceholder doesn't persist changes, simulating CRUD operations required creative solutions.

### Validation:

- Ensuring input forms are user-friendly and validate inputs dynamically.

## Future Improvements

- Add support for departments (backend mock data currently lacks this field).
- Use a persistent backend instead of JSONPlaceholder for real CRUD operations.
- Implement infinite scrolling for the user list as an alternative to pagination.

## License

This project is licensed under the MIT License.





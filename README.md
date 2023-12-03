# Country Insights App

This project is a simple web application that allows users to input a country's name, fetch information about that country from the REST Countries API, and display it on the frontend.

## Technologies Used
- **Frontend:**
  - React.js
  - Vite (for project setup)
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - Axios
  - CORS

## Project Structure
- **frontend:**
  - Located in the `frontend` folder.
  - Allows users to input a country name and fetch information.
  - Communicates with the NodeJS backend for country information.
- **backend:**
  - Located in the `backend` folder.
  - Uses Express to create a server.
  - Fetches country information from the REST Countries API and sends it to the frontend.
     
## How to Run the Project

### Frontend (React with Vite and Tailwind CSS)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
   
  - Install dependencies
    ```bash
    npm install
    ```
  
  - Run development server
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

2. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

  - Install dependencies
    ```bash
    npm install
    ```

  - Run development server
    ```bash
    node index.js
    ```

The application will be available at `http://localhost:3000`.

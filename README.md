# Train_Reservation_System


This project is a web-based train management system built using MongoDB as the database and Angular as the front-end framework.

## Project Description

1. There are 80 seats in a coach of a train with only 7 seats in a row and last row of only 3 seats. For
simplicity, there is only one coach in this train.
2. One person can reserve up to 7 seats at a time.
3. If person is reserving seats, the priority will be to book them in one row.
4. If seats are not available in one row then the booking should be done in such a way that the nearby
seats are booked.
5. User can book as many tickets as s/he wants until the coach is full. 6. You don’t have to create login
functionality for this application.

## Technologies Used
This project was built using the following technologies:

MongoDB
Angular
Node.js
Express

## Installation
Clone the repository: git clone https://github.com/Darbarvali/Train_Reservation_System.git
Install backend dependencies: cd Train_Reservation_System/backend && npm install
Install frontend dependencies: cd ../frontend && npm install

## Usage
Start the backend server: cd ../backend && node index.js or npm run dev
Start the frontend server: cd ../frontend && ng serve
Open your browser and navigate to http://localhost:4200

## Database Structure

yaml
 {
    name: {
      type: String,
      trim: true,
    },
    seats: {
      type: Number,
    },
    numbers: {
      type: Array,
    }
    
  }
 
[Frontend Url](https://train-reservation-system.netlify.app/)

[Backend URL](https://backend-train-system-ew31.vercel.app/)

# EventEase
EventEase is a Venue Booking website. This website provides users with a vast option of venues to choose from. The user can book an venue via this.
Event Management System - AngularJS
![Screenshot 2025-05-02 200813](https://github.com/user-attachments/assets/c640dc2b-30df-4c5e-94c8-a63ac2de8102)


**Description**
A modern event management web application built with AngularJS that allows users to browse venues and book them through an intuitive interface. The system features user authentication, venue browsing, booking forms, and a dashboard to manage reservations.

**Key Features**
>>User authentication (signup/login)
>>Browse available venues with details
>>Booking form with event customization options
>>User dashboard to view all bookings
>>Responsive design with modern UI elements
>>Animations and visual effects for better user experience
>>JSON-based backend for data persistence


**Installation**
 *Clone the repository:
    git clone https://github.com/yourusername/event-management-system.git
     cd event-management-system
 *Install dependencies
   npm install
*Start the development server
   npm start
 *Access the application at http://localhost:3000




**Project Structure**
event-management/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── homeController.js
│   │   │   └── homeView.html
│   │   ├── auth/
│   │   │   ├── authController.js
│   │   │   ├── loginView.html
│   │   │   └── registerView.html
│   │   ├── venues/
│   │   │   ├── venuesController.js
│   │   │   ├── venueDetailController.js
│   │   │   ├── venuesView.html
│   │   │   └── venueDetailView.html
│   │   ├── booking/
│   │   │   ├── bookingController.js
│   │   │   ├── bookingView.html
│   │   │   └── bookingSuccessView.html
│   │   ├── dashboard/
│   │   │   ├── dashboardController.js
│   │   │   └── dashboardView.html
│   │   ├── about/
│   │   │   ├── aboutController.js
│   │   │   └── aboutView.html
│   │   └── contact/
│   │       ├── contactController.js
│   │       └── contactView.html
│   ├── services/
│   │   ├── authService.js
│   │   ├── venueService.js
│   │   └── bookingService.js
│   ├── app.js
│   └── index.html
├── data/
│   ├── db.json
│   └── server.js
├── styles/
│   └── main.css
└── package.json
└── README.md
**Usage**
>>For Users
-Browse venues on the homepage
-Sign up or log in to make bookings
-Click on a venue to view details
-Click "Book Now" to fill out the booking form
-View your bookings in the Dashboard

>>For Developers
-The application uses AngularJS 1.x for frontend
-JSON-server provides mock backend API
-All data is persisted in JSON files

**API Endpoints**
   The backend provides these RESTful endpoints:

GET /venues - List all venues

GET /venues/:id - Get specific venue details

POST /bookings - Create a new booking

GET /bookings?userId=:id - Get user's bookings

POST /users - Create new user (signup)

GET /users - Verify login

**Development
Technologies Used**
**Frontend:**
-AngularJS 1.x
-HTML5, CSS3
-Bootstrap 
-Animate.css (for animations)

**Backend:**
-Node.js with Express
-JSON-server for mock API
-JSON database files

**Running Tests**
bash
npm test
Building for Production
bash
npm run build



**Screenshots**
Home Page:
![Screenshot 2025-05-02 200813](https://github.com/user-attachments/assets/8b731c2a-d60d-44b0-bbe8-4b64bc418dad)

Booking Form:
![Screenshot 2025-05-02 201028](https://github.com/user-attachments/assets/128b8a90-3733-401b-abe8-819bc9651d63)

Dashboard:
![Screenshot 2025-05-02 201124](https://github.com/user-attachments/assets/aae74fc0-bf21-45ca-a4c0-356effad4fa8)

Venue-Details:
![Screenshot 2025-05-02 201011](https://github.com/user-attachments/assets/9a409b77-764b-4840-859d-9590e59eb047)

Venue-View:
![Screenshot 2025-05-02 200852](https://github.com/user-attachments/assets/2e927ebb-70ff-46b0-b0f6-392a4c7f0a57)

Booking-success:
![Screenshot 2025-05-02 201107](https://github.com/user-attachments/assets/3b289f66-2884-4f75-85e7-7dbd54020573)


Contact
For any questions or support, please contact:

Email: deesha.mitra3@gmail.com

GitHub: @Deeshamitra03

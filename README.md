# Urbanovo 

## Project Description

**Urbanovo** is a modern and responsive web application developed for a company that provides services in home renovation, painting, landscaping, gardening, and maintenance of public and private spaces in Catalonia, Spain.

The goal of this project is to provide a professional online presence, allow users to explore services, read customer reviews, contact the company easily, and engage through a built-in chat interface.

---

##  Features

- Homepage with company mission, visual content, and interactive sections
- **Services page** with animated service cards and horizontal scrolling
- **Customer reviews** carousel with responsive layout
- **Contact form** connected to Formspree.io for receiving inquiries
- **Integrated AI Chat Widget** for future conversational assistant (currently a placeholder with API endpoint)
- Mobile-first responsive design and animated navigation menu

---

##  Tech Stack

- **React.js** with functional components and hooks
- **CSS Modules** for styling (including animations and adaptive layout)
- **Formspree.io** integration for contact submissions
- **Docker** & **Docker Compose** setup
- Placeholder structure for backend/API integration via `/api/...`

---

##  Project Structure
urbanovo/
│
├── frontend/ # React app
│ ├── components/ # UI components (Hero, ContactForm, ChatWidget, etc.)
│ ├── assets/ # Images and icons
│ ├── App.js
│ └── index.html
│
├── backend/ # (Empty / reserved for future API or AI service)
│
├── docker-compose.yml # For container orchestration
├── requirements.txt # Python deps (used for future AI backend)
└── README.md # This file

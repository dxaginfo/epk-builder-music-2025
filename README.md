# Digital Press Kit Builder

A modern web application for musicians to create, manage, and share professional electronic press kits (EPKs).

## Overview

The Digital Press Kit Builder is designed to help musicians present themselves professionally to industry contacts, venues, media outlets, and fans. This platform allows artists to create customizable EPKs with media-rich content that can be shared via a simple link or downloaded as a PDF.

## Features

### For Musicians

- **User-Friendly EPK Editor**: Create professional press kits without design experience
- **Multiple Content Sections**: Easily organize biography, photos, music, videos, tour dates, press quotes, and more
- **Customizable Templates**: Choose from various designs and customize colors, fonts, and layout
- **Media Integration**: Embed tracks from Spotify, SoundCloud, and videos from YouTube, Vimeo
- **Analytics Dashboard**: Track who views your EPK and which sections get the most attention
- **Export Options**: Share via custom URL or download as PDF
- **Mobile Responsive**: Edit and view EPKs on any device

### For Industry Professionals

- **Easy Navigation**: Quickly find relevant artist information
- **High-Quality Media Access**: Stream music and videos directly in the EPK
- **Downloadable Assets**: Access press photos, riders, and promotional materials
- **Tour Information**: View upcoming shows and performance history
- **Direct Contact**: Connect with artists or their management team

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Styled-components for styling
- Material-UI components
- Formik for form handling
- React-Player for media playback

### Backend
- Node.js with Express
- JWT authentication
- MongoDB for database
- AWS S3 for media storage
- Puppeteer for PDF generation

### DevOps
- Docker containerization
- GitHub Actions for CI/CD
- AWS deployment
- Sentry for error tracking

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB
- AWS Account (for S3 storage)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/dxaginfo/epk-builder-music-2025.git
   cd epk-builder-music-2025
   ```

2. Install dependencies
   ```
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Configure environment variables
   ```
   # Create .env file in server directory
   cp .env.example .env
   
   # Add your MongoDB URI, AWS credentials, and JWT secret
   ```

4. Start development servers
   ```
   # Start backend server
   cd server
   npm run dev

   # Start frontend development server
   cd ../client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # React source files
│       ├── components/     # Reusable UI components
│       ├── context/        # React context providers
│       ├── hooks/          # Custom React hooks
│       ├── pages/          # Page components
│       ├── services/       # API service integrations
│       ├── styles/         # Global styles
│       └── utils/          # Utility functions
│
├── server/                 # Backend Node.js application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── utils/              # Utility functions
│
├── docker/                 # Docker configuration
├── docs/                   # Documentation
└── scripts/                # Build and deployment scripts
```

## Deployment

The application can be deployed using Docker and AWS:

1. Build Docker images
   ```
   docker-compose build
   ```

2. Deploy to AWS Elastic Beanstalk
   ```
   # Using the provided deployment script
   ./scripts/deploy.sh
   ```

3. Alternatively, deploy frontend to Vercel/Netlify and backend to AWS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [AWS](https://aws.amazon.com/)
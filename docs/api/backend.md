---
sidebar_position: 1
---

# Welcome to Worksense API Documentation

Worksense is an intuitive, intelligent, and visually refined platform designed to simplify Agile project planning. It leverages AI to eliminate repetitive tasks and empower teams to focus on delivering real value.

## What's in this documentation?

This documentation will help you understand and use the Worksense API effectively. Here's what you'll find:

- **API Overview**: Comprehensive guide to the Worksense API
- **Authentication**: How to authenticate and authorize API requests
- **Endpoints**: Detailed documentation of all available API endpoints

## Quick Links

- [API Overview](#project-overview)
- [Swagger API Full Documentation](https://crdigital-worksense-production-4f0f.up.railway.app/api-docs)

## Getting Started

### Base URLs

- **Frontend Application**: [https://frontend-preprod-s4-production.up.railway.app/login](https://frontend-preprod-s4-production.up.railway.app/login)
- **Base URL API**: [https://crdigital-worksense-production-4f0f.up.railway.app](https://crdigital-worksense-production-4f0f.up.railway.app)
- **API Docs**: [https://crdigital-worksense-production-4f0f.up.railway.app/api-docs](https://crdigital-worksense-production-4f0f.up.railway.app/api-docs)

### To get started with Worksense:

1. Create an Account: Request Credentials at our Contact info page Worksense Wiki
2. Navigate to Worksense: Worksense.app
3. Start Planning: Use our API reference to integrate Worksense into your workflow

## Technology Stack

Worksense API is built with:

- **Backend**: Node.js with Express
- **Database**: SQL Server and Firebase Firestore
- **Authentication**: JWT
- **AI Services**: Frida AI + Softtek custom endpoints

## Project Overview

Worksense is a comprehensive project management platform that combines traditional project management tools with AI-powered features and gamification elements. The platform is designed to enhance team collaboration, productivity, and project tracking through an integrated suite of tools and features.

## Deployment URLs

### Frontend

- Production: [https://frontend-preprod-s4-production.up.railway.app/login](https://frontend-preprod-s4-production.up.railway.app/login)

### Backend

- Production: [https://crdigital-worksense-production-4f0f.up.railway.app](https://crdigital-worksense-production-4f0f.up.railway.app)
- API Documentation (Swagger): [https://crdigital-worksense-production-4f0f.up.railway.app/api-docs](https://crdigital-worksense-production-4f0f.up.railway.app/api-docs)

## Core Features

### 1. Project Management

- Hierarchical project structure
- Team member management
- Role-based access control
- Project status tracking
- Resource allocation

### 2. Agile Development Tools

- Sprint planning and tracking
- Backlog management
- User story management
- Task tracking
- Velocity monitoring

### 3. AI Integration

- AI-powered content generation
- Natural language processing
- Sentiment analysis
- Smart recommendations
- Automated task management

### 4. Gamification

- Point system
- Achievement tracking
- Leaderboards
- Progress rewards
- Team competitions

### 5. Team Collaboration

- Meeting management
- Real-time updates
- Team communication
- File sharing
- Progress tracking

## API Endpoints

### Authentication (/api/v1/auth)

- `POST /login` - User authentication
- `POST /register` - New user registration
- `GET /me` - Get current user profile
- `POST /refresh-token` - Refresh authentication token
- `POST /logout` - User logout

### Projects (/api/v1/projects)

- `GET /` - List all projects
- `POST /` - Create new project
- `GET /:id` - Get project details
- `PUT /:id` - Update project
- `DELETE /:id` - Delete project
- `GET /:id/members` - List project members
- `POST /:id/members` - Add project member
- `PUT /:id/members/:memberId` - Update member role
- `DELETE /:id/members/:memberId` - Remove member

### Tasks (/api/v1/tasks)

- `GET /projects/:projectId/tasks` - List project tasks
- `POST /projects/:projectId/tasks` - Create new task
- `GET /:id` - Get task details
- `PUT /:id` - Update task
- `DELETE /:id` - Delete task
- `PUT /:id/status` - Update task status
- `PUT /:id/assignee` - Assign task
- `GET /:id/comments` - Get task comments
- `POST /:id/comments` - Add task comment

### Sprints (/api/v1/sprints)

- `GET /projects/:projectId/sprints` - List project sprints
- `POST /projects/:projectId/sprints` - Create new sprint
- `GET /:id` - Get sprint details
- `PUT /:id` - Update sprint
- `DELETE /:id` - Delete sprint
- `PUT /:id/status` - Update sprint status
- `GET /:id/tasks` - List sprint tasks
- `POST /:id/tasks` - Add task to sprint

### Backlog (/api/v1/backlog)

- `GET /projects/:projectId/backlog` - List backlog items
- `POST /projects/:projectId/backlog` - Create backlog item
- `GET /:id` - Get backlog item details
- `PUT /:id` - Update backlog item
- `DELETE /:id` - Delete backlog item
- `PUT /:id/priority` - Update item priority
- `PUT /:id/status` - Update item status

### AI Features (/api/v1/ai)

- `POST /generate-epic` - Generate epic using AI
- `POST /generate-story` - Generate user story
- `POST /analyze-sentiment` - Analyze text sentiment
- `POST /summarize` - Generate text summary
- `POST /suggest-tasks` - Suggest related tasks

### Gamification (/api/v1/gamification)

- `GET /leaderboard` - Get current leaderboard
- `GET /achievements` - List user achievements
- `GET /rewards` - List available rewards
- `POST /rewards/claim` - Claim reward
- `GET /progress` - Get user progress

### Meetings (/api/v1/meetings)

- `GET /projects/:projectId/meetings` - List project meetings
- `POST /projects/:projectId/meetings` - Schedule meeting
- `GET /:id` - Get meeting details
- `PUT /:id` - Update meeting
- `DELETE /:id` - Cancel meeting
- `POST /:id/participants` - Add meeting participant
- `DELETE /:id/participants/:participantId` - Remove participant

### ForYou (/api/v1/for-you)

- `GET /recommendations` - Get personalized recommendations
- `GET /tasks` - Get suggested tasks
- `GET /insights` - Get project insights
- `GET /activity` - Get recent activity

### Speech Features (/api/v1/speech)

- `POST /transcribe` - Convert speech to text
- `POST /analyze` - Analyze speech content
- `POST /summarize` - Generate meeting summary

## Data Models

### User

- id: string
- name: string
- email: string
- role: string
- createdAt: timestamp
- updatedAt: timestamp

### Project

- id: string
- name: string
- description: string
- status: string
- createdAt: timestamp
- updatedAt: timestamp

### Task

- id: string
- projectId: string
- title: string
- description: string
- status: string
- priority: string
- assigneeId: string
- createdAt: timestamp
- updatedAt: timestamp

### Sprint

- id: string
- projectId: string
- name: string
- startDate: date
- endDate: date
- status: string
- createdAt: timestamp
- updatedAt: timestamp

## Authentication

- JWT-based authentication
- Token expiration: 24 hours
- Refresh token mechanism
- Role-based access control

## Error Handling

- Standardized error responses
- HTTP status codes
- Detailed error messages
- Error logging and tracking

## Rate Limiting

- API rate limits per user
- Different limits for different endpoints
- Rate limit headers in responses

## Security

- HTTPS required
- CORS enabled
- Input validation
- SQL injection prevention
- XSS protection

## Performance

- Response time monitoring
- Caching implementation
- Database query optimization
- Connection pooling

## Monitoring

- Request logging
- Error tracking
- Performance metrics
- Usage statistics

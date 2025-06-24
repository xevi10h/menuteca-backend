# Restaurant API

A comprehensive REST API for restaurant management with full internationalization support. Built with Node.js, TypeScript, Express, and Supabase.

## 🌟 Features

- **Full CRUD Operations** for all entities (Users, Restaurants, Menus, Dishes, Reviews, etc.)
- **Internationalization** - All user-facing content supports 4 languages (English, Spanish, Catalan, French)
- **Smart Localization** - Content is stored in user's language and served in their preferred language
- **JWT Authentication** with Google OAuth support
- **Role-based Access Control** (Users, Restaurant Owners, Admins)
- **Rate Limiting** and security middleware
- **Input Validation** with Zod schemas and comprehensive error handling
- **Automatic Rating Calculation** for restaurants based on reviews
- **Image Upload Support** for restaurants, menus, and reviews
- **Advanced Search** and filtering capabilities
- **Pagination** for all list endpoints

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd restaurant-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
NODE_ENV=development
PORT=3000

# Database
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# Optional: Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS
CORS_ORIGIN=http://localhost:3000
```

4. **Set up the database**
```bash
# Run migrations
npm run db:migrate

# Seed with sample data
npm run db:seed
```

5. **Start the development server**
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication
Most endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/google` - Google OAuth login
- `GET /api/auth/profile` - Get current user profile
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/change-password` - Change password
- `POST /api/auth/set-password` - Set password (for OAuth users)

#### Users
- `GET /api/users` - Get current user profile
- `PUT /api/users` - Update user profile
- `DELETE /api/users` - Delete user account
- `GET /api/users/:id` - Get user by ID (public profile)
- `GET /api/users/check-username/:username` - Check username availability
- `GET /api/users/check-email/:email` - Check email availability

#### Cuisines
- `GET /api/cuisines` - Get all cuisines (localized)
- `GET /api/cuisines/:id` - Get cuisine by ID (localized)
- `GET /api/cuisines/search?q=query` - Search cuisines
- `GET /api/cuisines/stats` - Get cuisine statistics
- `POST /api/cuisines` - Create cuisine (admin)
- `PUT /api/cuisines/:id` - Update cuisine (admin)
- `DELETE /api/cuisines/:id` - Delete cuisine (admin)

#### Restaurants
- `GET /api/restaurants` - Get all restaurants with filters
- `GET /api/restaurants/:id` - Get restaurant details
- `POST /api/restaurants` - Create restaurant (authenticated)
- `PUT /api/restaurants/:id` - Update restaurant (owner only)
- `DELETE /api/restaurants/:id` - Delete restaurant (owner only)
- `GET /api/restaurants/search?q=query` - Search restaurants
- `GET /api/restaurants/owner/mine` - Get my restaurants

#### Menus
- `GET /api/restaurants/:restaurantId/menus` - Get restaurant menus
- `GET /api/menus/:id` - Get menu details
- `POST /api/restaurants/:restaurantId/menus` - Create menu (owner only)
- `PUT /api/menus/:id` - Update menu (owner only)
- `DELETE /api/menus/:id` - Delete menu (owner only)

#### Dishes
- `GET /api/menus/:menuId/dishes` - Get menu dishes
- `GET /api/dishes/:id` - Get dish details
- `POST /api/menus/:menuId/dishes` - Create dish (owner only)
- `PUT /api/dishes/:id` - Update dish (owner only)
- `DELETE /api/dishes/:id` - Delete dish (owner only)

#### Reviews
- `GET /api/restaurants/:restaurantId/reviews` - Get restaurant reviews
- `GET /api/reviews/user/mine` - Get my reviews
- `POST /api/restaurants/:restaurantId/reviews` - Create review
- `PUT /api/reviews/:id` - Update review (author only)
- `DELETE /api/reviews/:id` - Delete review (author only)
- `POST /api/reviews/:id/response` - Add restaurant response (owner only)

### Response Format

All API responses follow this format:
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message",
  "errors": { 
    "field": "Validation error message"
  }
}
```

### Internationalization

The API supports 4 languages:
- `en_US` - English (US)
- `es_ES` - Spanish (Spain)  
- `ca_ES` - Catalan (Spain)
- `fr_FR` - French (France)

**How it works:**
1. User's language is stored in their profile
2. When creating content (reviews, menus, etc.), text is stored in the user's language
3. When retrieving content, the API returns text in the requesting user's language
4. If content isn't available in the user's language, it falls back to Spanish, then any available language

**Translatable Fields:**
- User review comments
- Restaurant address (street, city, country)
- Cuisine names
- Menu names and dish names/descriptions
- Restaurant response messages

### Pagination

List endpoints support pagination:
```
GET /api/restaurants?page=1&limit=20&sortBy=rating&sortOrder=desc
```

Response includes pagination metadata:
```json
{
  "success": true,
  "data": {
    "data": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Filtering

Restaurant search supports advanced filtering:
```
GET /api/restaurants?cuisine_id=123&min_price=10&max_price=50&min_rating=4&tags=vegetarian,wifi
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed database with sample data

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm test             # Run tests
```

### Project Structure

```
src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── middleware/      # Express middleware
├── routes/          # Route definitions
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
├── database/        # Database client and migrations
├── app.ts          # Express app configuration
└── index.ts        # Server entry point
```

### Database Schema

The API uses PostgreSQL with the following main tables:
- `users` - User accounts and profiles
- `cuisines` - Restaurant cuisine types (with translations)
- `addresses` - Location data (with translations)
- `restaurants` - Restaurant information
- `menus` - Restaurant menus (with translations)
- `dishes` - Menu items (with translations)  
- `reviews` - User reviews (with translations)

All translatable content is stored as JSONB with language keys.

## 🔒 Security Features

- **JWT Authentication** with secure token handling
- **Rate Limiting** to prevent abuse
- **Input Validation** using Joi schemas
- **SQL Injection Protection** via Supabase
- **CORS Configuration** for cross-origin requests
- **Helmet.js** for security headers
- **Password Hashing** using bcrypt

## 📊 Sample Data

The seed script creates:
- 10 cuisine types (fully translated)
- 2 sample users (demo@restaurant.com / owner@restaurant.com)
- 1 restaurant with full menu
- Sample reviews and ratings

**Demo Credentials:**
- **User:** demo@restaurant.com / DemoPassword123!
- **Owner:** owner@restaurant.com / OwnerPassword123!

## 🚀 Deployment

### Environment Setup
1. Set `NODE_ENV=production`
2. Configure production database URLs
3. Set strong JWT secret
4. Configure CORS for your domain

### Database
1. Run migrations on production database
2. Optionally seed with initial data
3. Set up regular backups

### Monitoring
- Health check endpoint: `GET /health`
- Error logging in production mode
- Rate limiting for API protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please open an issue on GitHub or contact the development team.
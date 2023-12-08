// Import dependencies
import express, { Express, Request, Response, NextFunction } from 'express';
import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieSession from 'cookie-session';

// Import routes & models
import database from './models';
import authRoutes from './routes/auth.routes'
import screeningRoutes from './routes/screening.routes'
import bookingRoutes from './routes/booking.routes'

// ENV variables
dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const COOKIE_SECRET = process.env.COOKIE_SECRET;

// Initialise express
const app: Express = express();

// Allow requests from multiple origins
const allowedOrigins = {
  origin: ["http://localhost:3000"]
};
app.use(cors(allowedOrigins));

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Stores session data on the client within a cookie
app.use(
  cookieSession({
    name: "brm-session",
    keys: [COOKIE_SECRET!],
    httpOnly: true
  })
);

// Set response headers
app.use(function(req: Request, res: Response, next: NextFunction) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
});

// Connection to the database
database.mongoose
  .connect(DATABASE_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
  .then(() => {
      console.log("Successfully connect to MongoDB.");
  })
  .catch((err: Error) => {
      console.error("Connection error", err);
      process.exit(1);
  });

// Routes
app.use('/auth', authRoutes);
app.use('/screenings', screeningRoutes);
app.use('/bookings', bookingRoutes);

// Set port, listen for requests
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Users
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "Invalid user data" });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    const user = await storage.getUser(parseInt(req.params.id));
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
  });

  // Packages
  app.get("/api/packages", async (_req, res) => {
    const packages = await storage.getPackages();
    res.json(packages);
  });

  app.get("/api/packages/:type", async (req, res) => {
    const packages = await storage.getPackagesByType(req.params.type);
    res.json(packages);
  });

  // Bookings
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);
      res.json(booking);
    } catch (error) {
      res.status(400).json({ error: "Invalid booking data" });
    }
  });

  app.get("/api/users/:userId/bookings", async (req, res) => {
    const bookings = await storage.getUserBookings(parseInt(req.params.userId));
    res.json(bookings);
  });

  // Photographers
  app.get("/api/photographers/featured", async (_req, res) => {
    const photographers = await storage.getFeaturedPhotographers();
    res.json(photographers);
  });

  return httpServer;
}

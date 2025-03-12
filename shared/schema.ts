import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  profilePicture: text("profile_picture"),
  referralCode: text("referral_code").notNull(),
  walletBalance: integer("wallet_balance").default(0),
});

export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // "instant" | "scheduled" | "wedding" | "corporate"
  description: text("description").notNull(),
  price: integer("price").notNull(),
  features: jsonb("features").notNull().$type<string[]>(),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  packageId: integer("package_id").notNull(),
  photographerId: integer("photographer_id"),
  date: timestamp("date").notNull(),
  status: text("status").notNull(), // "pending" | "confirmed" | "completed"
  location: text("location").notNull(),
  amount: integer("amount").notNull(),
});

export const photographers = pgTable("photographers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  profilePicture: text("profile_picture").notNull(),
  rating: integer("rating").notNull(),
  featured: boolean("featured").default(false),
  gender: text("gender").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertBookingSchema = createInsertSchema(bookings).omit({ id: true });
export const insertPhotographerSchema = createInsertSchema(photographers).omit({ id: true });

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Package = typeof packages.$inferSelect;
export type Photographer = typeof photographers.$inferSelect;

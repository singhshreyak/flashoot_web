import { users, type User, type InsertUser, packages, type Package, bookings, type Booking, type InsertBooking, photographers, type Photographer } from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserWallet(id: number, amount: number): Promise<User>;
  
  // Packages
  getPackages(): Promise<Package[]>;
  getPackagesByType(type: string): Promise<Package[]>;
  getPackage(id: number): Promise<Package | undefined>;
  
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getUserBookings(userId: number): Promise<Booking[]>;
  
  // Photographers
  getFeaturedPhotographers(): Promise<Photographer[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private packages: Map<number, Package>;
  private bookings: Map<number, Booking>;
  private photographers: Map<number, Photographer>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.users = new Map();
    this.packages = new Map();
    this.bookings = new Map();
    this.photographers = new Map();
    this.currentIds = { users: 1, packages: 1, bookings: 1, photographers: 1 };
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample photographers
    const photographerData: Photographer[] = [
      {
        id: this.currentIds.photographers++,
        name: "Sarah Williams",
        profilePicture: "https://images.unsplash.com/photo-1526313199968-70e399ffe791",
        rating: 4,
        featured: true,
        gender: "female"
      },
      {
        id: this.currentIds.photographers++,
        name: "John Davis",
        profilePicture: "https://images.unsplash.com/photo-1519814003066-56bd5ba56fb7",
        rating: 5,
        featured: true,
        gender: "male"
      }
    ];

    photographerData.forEach(p => this.photographers.set(p.id, p));

    // Sample packages
    const packageData: Package[] = [
      {
        id: this.currentIds.packages++,
        name: "Instant Booking",
        type: "instant",
        description: "60-second reel with trained reel-maker",
        price: 1999,
        features: [
          "60-second reel",
          "35 mins shoot",
          "Instant delivery",
          "Shot on iPhone"
        ]
      },
      {
        id: this.currentIds.packages++,
        name: "Wedding Standard",
        type: "wedding",
        description: "Perfect for single event coverage",
        price: 14999,
        features: [
          "Covers 1 event",
          "3 reels included",
          "Shot on iPhone",
          "RAW content available"
        ]
      }
    ];

    packageData.forEach(p => this.packages.set(p.id, p));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = this.currentIds.users++;
    const newUser = { ...user, id };
    this.users.set(id, newUser);
    return newUser;
  }

  async updateUserWallet(id: number, amount: number): Promise<User> {
    const user = this.users.get(id);
    if (!user) throw new Error("User not found");
    
    const updatedUser = {
      ...user,
      walletBalance: user.walletBalance + amount
    };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  // Package methods
  async getPackages(): Promise<Package[]> {
    return Array.from(this.packages.values());
  }

  async getPackagesByType(type: string): Promise<Package[]> {
    return Array.from(this.packages.values()).filter(p => p.type === type);
  }

  async getPackage(id: number): Promise<Package | undefined> {
    return this.packages.get(id);
  }

  // Booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentIds.bookings++;
    const newBooking = { ...booking, id };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async getUserBookings(userId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(b => b.userId === userId);
  }

  // Photographer methods
  async getFeaturedPhotographers(): Promise<Photographer[]> {
    return Array.from(this.photographers.values()).filter(p => p.featured);
  }
}

export const storage = new MemStorage();

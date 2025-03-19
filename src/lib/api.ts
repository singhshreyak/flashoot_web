// Simulated API client
export const api = {
  async getUser(id: string) {
    // Simulated API call
    return {
      id,
      name: 'Demo User',
      email: 'demo@example.com',
      avatar: 'https://github.com/shadcn.png'
    };
  }
};
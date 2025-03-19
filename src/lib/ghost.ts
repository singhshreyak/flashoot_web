import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
  url: import.meta.env.VITE_GHOST_URL,
  key: import.meta.env.VITE_GHOST_CONTENT_KEY,
  version: 'v5.0'
});

// Posts API
export async function getPosts(options = {}) {
  return await ghostClient.posts
    .browse({
      limit: 'all',
      include: ['tags', 'authors'],
      ...options
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

export async function getPost(slug: string) {
  return await ghostClient.posts
    .read({
      slug,
      include: ['tags', 'authors']
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  try {
    const response = await fetch(`${import.meta.env.VITE_GHOST_URL}/members/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin,
      },
      body: JSON.stringify({
        email,
        newsletters: [{ enabled: true }],
        labels: ['newsletter'],
      }),
    });

    if (!response.ok) {
      throw new Error('Subscription failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}
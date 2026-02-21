export type ReviewItem = {
  id: number;
  title: string;
  text: string;
  rating: number;
  avatar: string;
  image: string;
};

export const dummyReviews: ReviewItem[] = [
  {
    id: 1,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    rating: 5.0,
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=80',
  },
];

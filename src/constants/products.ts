export type Product = {
  id: number;
  title: string;
  badge: string;
  badgeColor: '#4A69E2' | '#FFA52F';
  price: number;
  images: string[];
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: 1,
    title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    badge: 'New Release',
    badgeColor: '#4A69E2',
    price: 125,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'This product is excluded from all promotional discounts and offers.',
    features: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub and get rewarded for your purchase.',
    ],
  },
  {
    id: 2,
    title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    badge: '10% off',
    badgeColor: '#FFA52F',
    price: 125,
    images: [
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'This product is excluded from all promotional discounts and offers.',
    features: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub and get rewarded for your purchase.',
    ],
  },
  {
    id: 3,
    title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    badge: 'New',
    badgeColor: '#4A69E2',
    price: 125,
    images: [
      'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'This product is excluded from all promotional discounts and offers.',
    features: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub and get rewarded for your purchase.',
    ],
  },
  {
    id: 4,
    title: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    badge: 'New',
    badgeColor: '#4A69E2',
    price: 125,
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'This product is excluded from all promotional discounts and offers.',
    features: [
      'Pay over time in interest-free installments with Affirm, Klarna or Afterpay.',
      'Join adiClub and get rewarded for your purchase.',
    ],
  },
];

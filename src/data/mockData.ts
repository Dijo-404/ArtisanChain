export interface Artisan {
  id: string;
  name: string;
  image: string;
  story: string;
  location: string;
  speciality: string;
  rating: number;
  credits: number;
  verified: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  artisanId: string;
  artisanName: string;
  category: string;
  verified: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockArtisans: Artisan[] = [
  {
    id: '1',
    name: 'Maya Chen',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    story: 'Traditional ceramics artist combining ancient techniques with AI-assisted design patterns.',
    location: 'Portland, OR',
    speciality: 'Ceramics',
    rating: 4.9,
    credits: 1250,
    verified: true
  },
  {
    id: '2',
    name: 'James Rivera',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
    story: 'Woodworking master creating unique furniture pieces with blockchain authenticity.',
    location: 'Austin, TX',
    speciality: 'Woodworking',
    rating: 4.8,
    credits: 980,
    verified: true
  },
  {
    id: '3',
    name: 'Elena Popov',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    story: 'Textile artist weaving stories into fabric using AI color pattern generation.',
    location: 'Seattle, WA',
    speciality: 'Textiles',
    rating: 4.7,
    credits: 1580,
    verified: true
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Handcrafted Ceramic Vase',
    description: 'Beautiful ceramic vase with AI-generated geometric patterns inspired by traditional motifs.',
    price: 125,
    image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400',
    artisanId: '1',
    artisanName: 'Maya Chen',
    category: 'Ceramics',
    verified: true,
    reviews: [
      {
        id: '1',
        customerName: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely stunning piece! The craftsmanship is exceptional.',
        date: '2024-01-15'
      }
    ]
  },
  {
    id: '2',
    title: 'Reclaimed Wood Coffee Table',
    description: 'Sustainable coffee table made from reclaimed wood with blockchain provenance tracking.',
    price: 450,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    artisanId: '2',
    artisanName: 'James Rivera',
    category: 'Furniture',
    verified: true,
    reviews: [
      {
        id: '2',
        customerName: 'Mike Thompson',
        rating: 5,
        comment: 'Perfect addition to our living room. Quality is outstanding!',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '3',
    title: 'Woven Wall Hanging',
    description: 'Contemporary wall art created with traditional weaving techniques and AI color harmony.',
    price: 85,
    image: 'https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=400',
    artisanId: '3',
    artisanName: 'Elena Popov',
    category: 'Textiles',
    verified: true,
    reviews: []
  }
];

export const analyticsData = {
  sales: [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 1800 },
    { month: 'Mar', amount: 2400 },
    { month: 'Apr', amount: 2100 },
    { month: 'May', amount: 3200 },
    { month: 'Jun', amount: 2800 }
  ],
  reputation: [
    { month: 'Jan', score: 4.2 },
    { month: 'Feb', score: 4.4 },
    { month: 'Mar', score: 4.6 },
    { month: 'Apr', score: 4.7 },
    { month: 'May', score: 4.8 },
    { month: 'Jun', score: 4.9 }
  ]
};
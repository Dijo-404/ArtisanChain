import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Plus, 
  Search, 
  Star, 
  Award,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Clock
} from 'lucide-react';
import { mockArtisans } from '../data/mockData';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  category: string;
  likes: number;
  replies: number;
  timeAgo: string;
  verified: boolean;
}

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('forum');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: 'Tips for photographing ceramic pieces for better sales',
      content: "I've been struggling with lighting when taking photos of my ceramic work. The glazes look different in photos than in real life. Anyone have suggestions for photography setup?",
      author: 'Maya Chen',
      authorAvatar: mockArtisans[0].image,
      category: 'Tips & Techniques',
      likes: 24,
      replies: 8,
      timeAgo: '2 hours ago',
      verified: true
    },
    {
      id: '2',
      title: 'Blockchain verification process - step by step guide',
      content: 'For new artisans joining the platform, here\'s my experience with the blockchain verification process and how it helped build customer trust.',
      author: 'James Rivera',
      authorAvatar: mockArtisans[1].image,
      category: 'Blockchain & Tech',
      likes: 31,
      replies: 12,
      timeAgo: '4 hours ago',
      verified: true
    },
    {
      id: '3',
      title: 'Sustainable materials sourcing - sharing suppliers',
      content: 'Building a list of ethical and sustainable material suppliers. Please share your trusted sources!',
      author: 'Elena Popov',
      authorAvatar: mockArtisans[2].image,
      category: 'Sustainability',
      likes: 18,
      replies: 6,
      timeAgo: '6 hours ago',
      verified: true
    }
  ];

  const categories = ['all', 'Tips & Techniques', 'Blockchain & Tech', 'Sustainability', 'Business', 'Inspiration'];

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const TabButton = ({ id, label, icon: Icon, count }: { id: string; label: string; icon: any; count?: number }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        activeTab === id
          ? 'bg-purple-600 text-white'
          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      {count && (
        <span className={`text-xs px-2 py-1 rounded-full ${
          activeTab === id ? 'bg-purple-500' : 'bg-gray-200 text-gray-600'
        }`}>
          {count}
        </span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Artisan Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow artisans, share knowledge, and grow together in our global community
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2,500+</div>
            <div className="text-sm text-gray-500">Active Members</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,240</div>
            <div className="text-sm text-gray-500">Discussions</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-sm text-gray-500">Engagement Rate</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-sm text-gray-500">Expert Mentors</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <TabButton id="forum" label="Forum" icon={MessageSquare} count={23} />
          <TabButton id="mentorship" label="Mentorship" icon={Award} />
          <TabButton id="events" label="Events" icon={Users} />
        </div>

        {/* Forum Tab */}
        {activeTab === 'forum' && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>New Post</span>
                </button>
              </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <span>{post.author}</span>
                            {post.verified && <Award className="h-3 w-3 text-purple-600" />}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.timeAgo}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm">{post.replies}</span>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mentorship Tab */}
        {activeTab === 'mentorship' && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Award className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mentorship Program</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with experienced artisans for guidance, feedback, and career development. 
              Our mentorship program pairs new artisans with established creators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-4">For Mentees</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Get guidance from experienced artisans</li>
                  <li>• Receive feedback on your work</li>
                  <li>• Learn business and marketing strategies</li>
                  <li>• Build your professional network</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-4">For Mentors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Share your expertise and experience</li>
                  <li>• Earn credits for mentoring activities</li>
                  <li>• Build your reputation in the community</li>
                  <li>• Give back to the artisan community</li>
                </ul>
              </div>
            </div>
            <button className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Join Mentorship Program
            </button>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Events</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join virtual and in-person events, workshops, and exhibitions. 
              Stay connected with the artisan community worldwide.
            </p>
            <div className="space-y-4 text-left">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Virtual Workshop: AI in Design</h4>
                <p className="text-gray-600 text-sm">March 15, 2024 • 2:00 PM PST</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Blockchain for Artisans Webinar</h4>
                <p className="text-gray-600 text-sm">March 22, 2024 • 10:00 AM PST</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Monthly Community Showcase</h4>
                <p className="text-gray-600 text-sm">March 30, 2024 • 7:00 PM PST</p>
              </div>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Events
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityPage;
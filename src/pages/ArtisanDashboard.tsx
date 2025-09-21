import React, { useState } from 'react';
import { 
  User, 
  Award, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Upload, 
  Star,
  Plus,
  BarChart3
} from 'lucide-react';
import { mockArtisans, analyticsData } from '../data/mockData';

const ArtisanDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const currentArtisan = mockArtisans[0]; // Simulate logged-in artisan
  
  const [productForm, setProductForm] = useState({
    title: '',
    description: '',
    price: '',
    category: 'ceramics'
  });

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate product upload
    alert('Product uploaded successfully! (This is a demo)');
    setProductForm({ title: '', description: '', price: '', category: 'ceramics' });
  };

  const TabButton = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
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
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={currentArtisan.image}
              alt={currentArtisan.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{currentArtisan.name}</h1>
                {currentArtisan.verified && (
                  <Award className="h-6 w-6 text-purple-600" />
                )}
              </div>
              <p className="text-gray-600 mb-2">{currentArtisan.speciality} Artist</p>
              <p className="text-sm text-gray-500">{currentArtisan.location}</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{currentArtisan.rating}</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{currentArtisan.credits}</div>
                <div className="text-sm text-gray-500">Credits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <TabButton id="overview" label="Overview" icon={BarChart3} />
          <TabButton id="analytics" label="Analytics" icon={TrendingUp} />
          <TabButton id="upload" label="Upload Product" icon={Upload} />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">$2,850</div>
                  <div className="text-sm text-gray-500">Monthly Sales</div>
                </div>
              </div>
              <div className="text-sm text-green-600">+12% from last month</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,240</div>
                  <div className="text-sm text-gray-500">Total Customers</div>
                </div>
              </div>
              <div className="text-sm text-blue-600">+8% engagement</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{currentArtisan.rating}</div>
                  <div className="text-sm text-gray-500">Avg Rating</div>
                </div>
              </div>
              <div className="text-sm text-yellow-600">Based on 156 reviews</div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">24</div>
                  <div className="text-sm text-gray-500">Products Listed</div>
                </div>
              </div>
              <div className="text-sm text-purple-600">18 verified</div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
              <div className="space-y-3">
                {analyticsData.sales.map((item) => (
                  <div key={item.month} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.month}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${(item.amount / 4000) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">${item.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Reputation Growth</h3>
              <div className="space-y-3">
                {analyticsData.reputation.map((item) => (
                  <div key={item.month} className="flex items-center justify-between">
                    <span className="text-gray-600">{item.month}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(item.score / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Customer Engagement</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">89%</div>
                  <div className="text-sm text-gray-600">Repeat Customers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">4.2</div>
                  <div className="text-sm text-gray-600">Avg Order Value</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                  <div className="text-sm text-gray-600">Referrals Made</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Product Tab */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-6">Upload New Product</h3>
              
              <form onSubmit={handleProductSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Title
                  </label>
                  <input
                    type="text"
                    value={productForm.title}
                    onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter product title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Describe your product..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      value={productForm.price}
                      onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="0.00"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="ceramics">Ceramics</option>
                      <option value="textiles">Textiles</option>
                      <option value="woodworking">Woodworking</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="metalwork">Metalwork</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Images
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Click to upload images or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Upload Product</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtisanDashboard;
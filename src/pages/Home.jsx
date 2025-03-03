import React from 'react';
import { Link } from 'react-router-dom';
import featuredProducts from '../demoData/featuredProducts';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-extrabold">Welcome to TecHaven</h1>
        <p className="mt-4 text-xl">Find the best deals on used/new technology</p>
        <Link
          to="/catalog"
          className="mt-6 inline-block bg-white text-blue-500 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition ease-in-out"
        >
          Explore Products
        </Link>
      </section>

      <section className="py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="mt-2 text-lg text-gray-600">Browse our top used tech items</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-fit"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 mt-2">Price: ${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-block text-blue-500 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Sell Your Used Tech?</h2>
        <p className="mt-4 text-lg">Get your devices listed today and reach thousands of buyers.</p>
        <Link
          to="/create"
          className="mt-6 inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition ease-in-out"
        >
          List Your Product
        </Link>
      </section>
    </div>
  );
};

export default Home;

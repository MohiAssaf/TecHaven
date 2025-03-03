import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo-notext.png"


const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-8xl mx-10 p-2 flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold">
            <img src={logo} alt="logo-img" className='h-20 w-20'/>
          <Link to="/" className="text-white hover:text-gray-200">
            TecHaven
          </Link>
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/catalog" className="text-white hover:text-gray-200">Catalog</Link>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
          <Link to="/profile" className='hover:grey-200'><i class="fa-solid fa-user"></i></Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

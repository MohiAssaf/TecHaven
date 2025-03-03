import React from "react";
import { Link } from "react-router-dom";
import demoProducts from "../demoData/demoProducts";

export default function Catalog(){
    return(
        <div className="grid grid-cols-4 gap-5 m-30">
          {demoProducts.map((product) => (
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
    )
}
// "use client";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CarItems({ cart }) {
//   // Initialize the state to keep track of quantities for each item
//   const [quantities, setQuantities] = useState(
//     cart.reduce((acc, item) => {
//       acc[item.id] = 0; // Initialize the quantity for each item to 0
//       return acc;
//     }, {})
//   );

//   const Increase = (id) => {
//     setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
//   };

//   const Decrease = (id) => {
//     setQuantities((prev) => {
//       if (prev[id] === 0) return prev;

//       const newQuantities = {
//         ...prev,
//         [id]: prev[id] - 1,
//       };

//       // Prevent duplicate toasts

//       return newQuantities;
//     });
//   };

//   return (
//     <div>
//       {/* Toast Notification */}
//       <ToastContainer position="top-right" autoClose={3000} />

//       <div className="container mx-auto p-6 mt-24 max-w-5xl">
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <table className="w-full border rounded-lg overflow-hidden">
//               <thead className="bg-black text-white">
//                 <tr>
//                   <th className="p-3 text-left">Product</th>
//                   <th className="p-3">Pricee</th>
//                   <th className="p-3">Quantity</th>
//                   <th className="p-3">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item) => (
//                   <tr key={item.id} className="border-b">
//                     <td className="p-3 flex w-full items-center space-x-3">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         width={50}
//                         height={50}
//                         className="rounded"
//                       />
//                       <span>{item.name}</span>
//                     </td>
//                     <td className="p-3">${item.price}</td>
//                     <td className="p-3">
//                       <button
//                         onClick={() => Decrease(item.id)}
//                         className="px-2 bg-gray-200 rounded"
//                       >
//                         -
//                       </button>
//                       <span className="px-3">{quantities[item.id]}</span>
//                       <button
//                         onClick={() => Increase(item.id)}
//                         className="px-2 bg-gray-200 rounded"
//                       >
//                         +
//                       </button>
//                     </td>
//                     <td className="p-3">${item.price * quantities[item.id]}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="bg-black text-white p-6 rounded-lg">
//             <div className="flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-lg font-semibold">Cart Total</h2>
//                 <div className="mt-4 space-y-2">
//                   <p>
//                     SUBTOTAL:{" "}
//                     <span className="float-right">
//                       $
//                       {cart.reduce(
//                         (acc, item) => acc + item.price * quantities[item.id],
//                         0
//                       )}
//                     </span>
//                   </p>
//                   <p>
//                     DISCOUNT: <span className="float-right">20%</span>
//                   </p>
//                   <p className="text-lg font-bold">
//                     TOTAL:{" "}
//                     <span className="float-right">
//                       $
//                       {cart.reduce(
//                         (acc, item) => acc + item.price * quantities[item.id],
//                         0
//                       ) * 0.7}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-slate-900 transition-all">
//                 Proceed To Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

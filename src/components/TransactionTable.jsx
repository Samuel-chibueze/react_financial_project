import React from 'react';

const TransactionTable = ({ data }) => {
   const file = data

  return (
    <div className=' flex flex-col justify-center items-center px-3 py-10'>
     <table className=" ">
      <thead>
        <tr>
          <th className="px-3 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-3 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Payment Method
          </th>
          <th className="px-3 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-3 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Transaction
          </th>
          <th className="px-3 py-3 bg-blue-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {file.map((item, index) => (
          <tr key={index}>
            <td className="px-3 py-4 whitespace-no-wrap">${item.amount}</td>
            <td className="px-3 py-4 whitespace-no-wrap">{item.payment_method}</td>
            <td className="px-3 py-4 whitespace-no-wrap">{item.status}</td>
            <td className="px-3 py-4 whitespace-no-wrap">{item.Transaction}</td>
            <td className="px-3 py-4 whitespace-no-wrap">{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>   

    
    </div>
    
  );
};

export default TransactionTable;

import React, { useEffect, useState } from 'react';

const College = () => {
  const [colleges,setColleges]=useState([]);

  useEffect(()=>{
      fetch('colllges.json')
      .then(res =>res.json())
      .then(data=>setColleges(data));

  },[])


    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Ratings </th>
        <th>Admission Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <div>
        {
          colleges.map(college=><>
          <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={college.img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{college.name}</div>
              <div className="text-sm opacity-50">{college.place}</div>
            </div>
          </div>
        </td>
        <td>
        {college.rating}
        </td>
        <td>{college.admission_date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
          </>)
        }
      </div>
     
    </tbody>
  
    
  </table>
</div>
    );
};

export default College;
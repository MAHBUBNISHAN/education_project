import React, { useEffect, useState } from 'react';

const CollegeCard = () => {
        const [colleges,setColleges]=useState([]);

        useEffect(()=>{
            fetch('colllges.json')
            .then(res =>res.json())
            .then(data=>setColleges(data));

        },[])
    return (
        <div className='grid grid-cols-3 gap-4 m-5'>
          {
            colleges.map(service=><>
            <div className='flex flex-row'>
                 <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                 <p> rating : {service.rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Details</button>
                    </div>
    </div>
  </div>
</div>




            </>
               
            )
          }
            
        </div>
    );
};

export default CollegeCard;
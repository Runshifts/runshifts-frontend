import React from "react";
import CatTable from "./CatTable";
import CatForm from './CatForm'

function page() {
  return (
    <section className="h-screen p-5">
      
      <h1 className="custom-h1 ">Categories</h1>
      
      <div className="grid grid-cols-3">
      <div className="col-span-1 mr-1">
      <CatForm />
      </div>
      
      <div className="col-span-2 ml-1">
      <CatTable />
      </div>
      </div>
     
    </section>
  );
}

export default page;

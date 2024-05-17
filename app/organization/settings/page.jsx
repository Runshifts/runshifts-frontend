import React from 'react'
import SeetingsTab from './SettingsTab'
// import General from './general/page'

function page() {
  return (
    <section className="mx-auto p-3">
      <div className="py-3">
        <h1 className="text-[#292D32] my-4 text-2xl not-italic font-medium leading-7">Settings</h1>
        <div>
        <input
          type="text"
          placeholder="Search settings..."
          className="bg-gray-100 px-2 py-1 mr-2 text-gray-500 border-none rounded"
          name="Search settings"
        />
        </div>

        <SeetingsTab />
        {/* <General /> */}
    </div>        
    </section>
  )
}

export default page
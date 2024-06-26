
import React from 'react';
import Link from 'next/link';
import Navbar from '@/app/_components/navbar/Navbar';

function Optioncard({ onClose }) {
  return (
    <div className="card-container">
      <Link href={'/employee/userprofile'} className="text-blue-600 text-sm block mb-2">Edit profile</Link>
      <Link href={'/employee/qrcode'} className="text-blue-600 text-sm block">Logout</Link>
    </div>
  );
}
 
export default Optioncard
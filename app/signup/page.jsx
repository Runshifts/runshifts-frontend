'use client'
import React from 'react'
import { useSearchParams } from "next/navigation"
import { useMemo } from 'react';

import EmployerSignup from "./EmployerSignup";
import EmployeeSignup from "./EmployeeSignup";

function Page() {
    const query = useSearchParams();
    const signupType = useMemo(() => {
        return query.get('type')
    }, [query]);

    if (signupType === "employer") {
        return <EmployerSignup />;
      } else if (signupType === "employee") {
        return <EmployeeSignup />;
      }

console.log(signupType)
  return (
    <>
        
    </>
  )
}

export default Page
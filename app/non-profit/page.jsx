"use client"
import { useSelector } from "react-redux"

export default function NonProfitHome() {
  const { organization, employees, locations, shiftManagements } = useSelector(
    (store) => store.organization
  )
  console.log(organization, "hdfads")
  return <>home</>
}

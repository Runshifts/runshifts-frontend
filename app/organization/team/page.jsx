import React from "react"
import TeamFilterGroup from "../../_components/AppComps/TeamFilterGroup"
import TeamCard from "./TeamCard"
import StaffListCards from "./StaffListCards"
import TeamListCards from "./TeamListCards"
import TeamAppgroup from "../../_components/AppComps/TeamAppgroup"

function Team() {
  return (
    <section className="mx-2 p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="custom-h1">Team</h1>
        <TeamAppgroup />
      </div>

      <TeamFilterGroup />

      <TeamCard />
      <StaffListCards />
      <TeamListCards />
    </section>
  )
}

export default Team

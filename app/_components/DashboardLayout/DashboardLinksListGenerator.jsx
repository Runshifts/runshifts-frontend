import Calender from "../../_assets/SidebarSvgs/Calender"
import GridOutline from "../../_assets/SidebarSvgs/GridOutline"
import PersonIcon from "../../_assets/SidebarSvgs/PersonIcon"
import NotesIcon from "../../_assets/SidebarSvgs/NotesIcon"
import BookIcon from "../../_assets/SidebarSvgs/BookIcon"
import DashboardLink from "./DashboardLink"
import Watch from "../../_assets/SidebarSvgs/Watch"
import AlarmClock from "../../_assets/SidebarSvgs/AlarmClock"
import Money from "../../_assets/SidebarSvgs/Money"
import Note from "../../_assets/SidebarSvgs/Note"

class DashboardLinkItem {
  constructor(icon, text, href) {
    this.icon = icon
    this.text = text
    this.href = href
  }
}

const navLinks = {
  "non-profit": [
    new DashboardLinkItem(<GridOutline />, "Dashboard", "/non-profit"),
    new DashboardLinkItem(<Calender />, "Schedule", "/non-profit/schedule"),
    new DashboardLinkItem(
      <PersonIcon />,
      "Volunteers",
      "/non-profit/volunteers"
    ),
    new DashboardLinkItem(<NotesIcon />, "Logs", "/non-profit/logs"),
    new DashboardLinkItem(
      <BookIcon />,
      "Knowledge base",
      "/knowledge-base/non-profit"
    ),
  ],
  volunteer: [
    new DashboardLinkItem(<GridOutline />, "Dashboard", "/volunteer"),
    new DashboardLinkItem(<Calender />, "My Shifts", "/volunteer/my-shifts"),
    new DashboardLinkItem(<Watch />, "Tracker", "/volunteer/tracker"),
    new DashboardLinkItem(<NotesIcon />, "Logs", "/volunteer/logs"),
    new DashboardLinkItem(
      <BookIcon />,
      "Knowledge base",
      "/knowledge-base/volunteer"
    ),
  ],
  organization: [
    new DashboardLinkItem(<GridOutline />, "Dashboard", "/organization"),
    new DashboardLinkItem(<Calender />, "Schedule", "/organization/schedule"),
    new DashboardLinkItem(<AlarmClock />, "Timesheet", "/organization/timesheet"),
    new DashboardLinkItem(<Money />, "Payroll", "/organization/payroll"),
    new DashboardLinkItem(<Watch />, "Tracker", "/organization/tracker"),
    new DashboardLinkItem(<PersonIcon />, "Team", "/organization/team"),
    new DashboardLinkItem(<NotesIcon />, "Logs", "/organization/logs"),
    new DashboardLinkItem(<Note />, "Reports", "/organization/reports"),
    new DashboardLinkItem(
      <BookIcon />,
      "Knowledge base",
      "/knowledge-base/organization"
    ),
  ],
  employee: [
    new DashboardLinkItem(<GridOutline />, "Dashboard", "/employee"),
    new DashboardLinkItem(<Calender />, "My Shifts", "/employee/my-shifts"),
    new DashboardLinkItem(<AlarmClock />, "Timesheet", "/employee/timesheet"),
    new DashboardLinkItem(<Money />, "Earnings", "/employee/earnings"),
    new DashboardLinkItem(<Watch />, "Tracker", "/employee/tracker"),
    new DashboardLinkItem(<NotesIcon />, "Logs", "/employee/logs"),
    new DashboardLinkItem(<Note />, "Reports", "/employee/reports"),
    new DashboardLinkItem(
      <BookIcon />,
      "Knowledge base",
      "/knowledge-base/employee"
    ),
  ],
}
export default function DashboardLinksListGenerator({
  onLinkClick = () => {},
  variant = "",
}) {
  if (
    variant !== "employee" &&
    variant !== "organization" &&
    variant !== "non-profit" &&
    variant !== "voluteer"
  )
    return null
  return (
    <>
      <ul className="flex flex-col item-start gap-4 text-[#8294B4] lg:text-[#42526E]">
        {navLinks[variant]?.map((item) => (
          <li key={item.text}>
            <DashboardLink
              href={item.href}
              onClick={onLinkClick}
              icon={item.icon}
            >
              {item.text}
            </DashboardLink>
          </li>
        ))}
      </ul>
    </>
  )
}

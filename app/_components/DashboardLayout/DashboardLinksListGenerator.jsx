import Calender from "../../_assets/SidebarSvgs/Calender"
import GridOutline from "../../_assets/SidebarSvgs/GridOutline"
import PersonIcon from "../../_assets/SidebarSvgs/PersonIcon"
import NotesIcon from "../../_assets/SidebarSvgs/NotesIcon"
import BookIcon from "../../_assets/SidebarSvgs/BookIcon"
import DashboardLink from "./DashboardLink"
import Watch from "../../_assets/SidebarSvgs/Watch"

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

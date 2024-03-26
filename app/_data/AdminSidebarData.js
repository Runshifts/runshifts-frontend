import employers from "../_assets/adminIcons/employers.svg"
import employees from "../_assets/adminIcons/employees.svg"
import shift from "../_assets/adminIcons/shift.svg"
import billings from "../_assets/adminIcons/billings.svg"
import knowledge from "../_assets/adminIcons/knowledge.svg"
import support from "../_assets/adminIcons/support.svg"
import user from "../_assets/adminIcons/user.svg"
import dashboard from "../_assets/sidebarImg/dashboard.svg"
import report from "../_assets/sidebarImg/report.svg"

export const AdminSidebarData = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: dashboard,
  },
  {
    title: "Manage Employers",
    path: "/admin/manage-employers",
    icon: employers,
  },
  {
    title: "Manage Employees",
    path: "/admin/manage-employees",
    icon: employees,
  },
  {
    title: "Shift Management",
    path: "/admin/shift-management",
    icon: shift,
  },
  {
    title: "Billings",
    path: "/admin/billings",
    icon: billings,
  },
  {
    title: "Reports",
    path: "/admin/reports",
    icon: report,
  },
  {
    title: "Knowledge Base",
    icon: knowledge,
    submenu: [
      {
        title: "All Articles",
        path: "/admin/knowledge-base/create",
      },
      {
        title: "Categories",
        path: "/admin/knowledge-base/categories",
      },
    ],
  },
  {
    title: "Support",
    path: "/admin/support",
    icon: support,
  },
  {
    title: "User Roles",
    path: "/admin/user-roles",
    icon: user,
  },
]

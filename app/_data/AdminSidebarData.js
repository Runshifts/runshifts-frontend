import bulb from '../_assets/sidebarImg/bulb.svg'
import date from '../_assets/sidebarImg/date.svg'
import dashboard from '../_assets/sidebarImg/dashboard.svg'
import tracker from '../_assets/sidebarImg/watch.svg'
import logs from '../_assets/sidebarImg/logs.png'
import earnings from '../_assets/sidebarImg/earning.svg'
import timesheet from '../_assets/sidebarImg/timesheet.png'
import team from '../_assets/sidebarImg/team.svg'
import report from '../_assets/sidebarImg/report.svg'


export const AdminSidebarData = [
    {
        title: 'Dashboard',
        path: '/admin',
        icon: dashboard,
    },  
    {
        title: 'Manage Employers',
        path: '/admin/manageEmployers',
        icon: earnings,
    },
    {
        title: 'Manage Employees',
        path: '/admin/manageEmployees',
        icon: earnings,
    },
    {
        title: 'Shift Management',
        path: '/admin/shift-mgt',
        icon: earnings,
    },
    {
        title: 'Billings',
        path: '/admin/billings',
        icon: earnings,
    },
    {
        title: 'Payroll',
        path: '/organization/payroll',
        icon: earnings,
    },
    {
        title: 'Reports',
        path: '/admin/reports',
        icon: report,
    },
    {
        title: 'Knowledge Base',
        path: '/admin/knowledge-base',
        icon: earnings,
    },
    {
        title: 'Support',
        path: '/admin/support',
        icon: earnings,
    },
    {
        title: 'User Roles',
        path: '/admin/user-roles',
        icon: earnings,
    },

]
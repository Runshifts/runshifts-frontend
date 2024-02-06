import bulb from '../_assets/sidebarImg/bulb.svg'
import date from '../_assets/sidebarImg/date.svg'
import dashboard from '../_assets/sidebarImg/dashboard.png'
import tracker from '../_assets/sidebarImg/watch.svg'
import logs from '../_assets/sidebarImg/logs.png'
import earnings from '../_assets/sidebarImg/earning.svg'
import timesheet from '../_assets/sidebarImg/timesheet.png'
import team from '../_assets/sidebarImg/team.svg'
import report from '../_assets/sidebarImg/report.svg'


export const SidebarData = [
    {
        title: 'Quick start guide',
        path: '#',
        icon: date,
    },
    {
        title: 'Dashboard',
        path: '/organization',
        icon: dashboard,
    },
    {
        title: 'Schedule',
        path: '/organization/schedule',
        icon: earnings,
    },
    {
        title: 'Timesheet',
        path: '/organization/timesheet',
        icon: tracker,
    },
    {
        title: 'Payroll',
        path: '/organization/payroll',
        icon: earnings,
    },
    {
        title: 'Tracker',
        path: '/organization/tracker',
        icon: tracker,
    },
    {
        title: 'Team',
        path: '/organization/team',
        icon: team,
    },
    {
        title: 'Logs',
        path: '/organization/logs',
        icon: bulb
    },
    {
        title: 'Reports',
        path: '/organization/reports',
        icon: report,
    },

]
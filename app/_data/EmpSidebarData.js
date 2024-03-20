import bulb from '../_assets/sidebarImg/bulb.svg'
import date from '../_assets/sidebarImg/date.svg'
import dashboard from '../_assets/sidebarImg/dashboard.svg'
import tracker from '../_assets/sidebarImg/watch.svg'
import logs from '../_assets/sidebarImg/logs.png'
import earnings from '../_assets/sidebarImg/earning.svg'
import timesheet from '../_assets/sidebarImg/timesheet.png'
import team from '../_assets/sidebarImg/team.svg'
import report from '../_assets/sidebarImg/report.svg'
import knowledge from '../_assets/adminIcons/knowledge.svg'

export const EmpSidebarData = [
    {
        title: 'Quick start guide',
        path: '#',
        icon: date,
    },
    {
        title: 'Dashboard',
        path: '/employee',
        icon: dashboard,
    },
    {
        title: 'My Shifts',
        path: '/employee/my-shifts',
        icon: earnings,
    },
    {
        title: 'Timesheet',
        path: '/employee/timesheet',
        icon: tracker,
    },
    {
        title: 'Earning',
        path: '/employee/earnings',
        icon: earnings,
    },
    {
        title: 'Tracker',
        path: '/employee/tracker',
        icon: tracker,
    },
    {
        title: 'Logs',
        path: '/employee/logs',
        icon: bulb
    },
    {
        title: 'Knowledge Base',
        path: '/knowledgeb',
        icon: knowledge,
    },
]
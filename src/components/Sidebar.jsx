import { NavLink } from 'react-router-dom'
import { LayoutDashboard, DollarSign, FolderOpen } from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/expenses', label: 'Gastos', icon: DollarSign },
    { path: '/categories', label: 'Categorías', icon: FolderOpen },
  ]

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-[#052B5B] shadow-lg z-40">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const IconComponent = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#1E5AA8] text-white font-medium'
                    : 'text-white/80 hover:bg-[#1E5AA8] hover:text-white'
                }`
              }
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar

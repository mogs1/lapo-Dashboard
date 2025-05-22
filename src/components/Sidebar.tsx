import React from 'react';
import { LogOut } from 'lucide-react';
import { menuItems } from '../data/dashboardData';
import logo  from '../assets/lapoLogo.png';
import cardinfra  from '../assets/cardinfra.png';

interface SidebarProps {
  activeMenuItem: string;
  setActiveMenuItem: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenuItem, setActiveMenuItem }) => {
  return (
    <div className="absolute w-64 bg-[#002F6C] text-white max-h-min flex flex-col transition-all duration-300">
      {/* Logo */}
      <div className="">
        <img src={logo} alt="Logo" className="h-14" /> 
      </div>

      {/* Main Menu */}
      <div className="flex-1 py-6">
        <div className="px-4 mb-4">
          <h2 className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
            MAIN MENU
          </h2>
        </div>
        
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenuItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenuItem(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 group hover:bg-blue-800 hover:translate-x-1 ${
                  isActive
                    ? 'bg-[#E4F0FF] text-blue-800 shadow-lg hover:bg-blue-800 hover:text-white'
                    : 'text-[#D0D5DD] hover:text-white'
                }`}
              >
                <Icon 
                  size={18} 
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-blue-800' : 'text-[--pry-color] group-hover:text-white'
                  }`} 
                />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-blue-800">
        <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-blue-200 hover:bg-blue-800 hover:text-white transition-all duration-200 group hover:translate-x-1">
          <LogOut size={18} className="text-white group-hover:text-white transition-colors duration-200" />
          <span className="text-sm text-white font-medium">Logout</span>
        </button>
      </div>

      {/* Powered by */}
      <div className="p-4 text-center">
        <p className="text-xs text-blue-400">POWERED BY</p>      
        <img src={cardinfra} alt="CardInfra" className=" mx-auto mt-2" />
      </div>
    </div>
  );
};

export default Sidebar;
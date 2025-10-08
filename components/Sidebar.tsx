
import React from 'react';
import type { Page } from '../types';
import { NAV_ITEMS, NavItem } from '../constants';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const mainSections = NAV_ITEMS.filter(item => item.id !== 'home' && !item.isDetailed && item.id !== 'assistant');
  const detailedSections = NAV_ITEMS.filter(item => item.isDetailed);
  const homeItem = NAV_ITEMS.find(item => item.id === 'home');
  const assistantItem = NAV_ITEMS.find(item => item.id === 'assistant');

  const NavLink = ({ item }: { item: NavItem }) => (
    <a
      key={item.id}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setActivePage(item.id);
      }}
      className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
        activePage === item.id
          ? 'bg-green-600 text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <span className="mr-3">{item.icon}</span>
      {item.label}
    </a>
  );

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-gray-200 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="flex items-center space-x-3">
          <img src="https://www.doae.go.th/wp-content/uploads/2023/11/logo-doae-new.png" alt="Logo" className="h-10 w-10 object-contain" />
          <div className="text-left">
            <h1 className="text-sm font-bold text-green-800">คู่มือทะเบียนเกษตรกร</h1>
            <p className="text-xs text-gray-500">ปี 2568 (ฉบับดิจิทัล)</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col px-4 py-4 space-y-1">
        <div>
          {homeItem && <NavLink item={homeItem} />}
          {mainSections.map((item) => <NavLink key={item.id} item={item} />)}
          
          <div className="pt-4 pb-2">
              <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">ข้อมูลจากภาคผนวก</h3>
          </div>
          {detailedSections.map((item) => <NavLink key={item.id} item={item} />)}
        </div>

        <div className="mt-auto">
          {assistantItem && <NavLink item={assistantItem} />}
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200 text-xs text-gray-500 text-center">
        <p>กรมส่งเสริมการเกษตร</p>
        <p>กระทรวงเกษตรและสหกรณ์</p>
      </div>
    </aside>
  );
};

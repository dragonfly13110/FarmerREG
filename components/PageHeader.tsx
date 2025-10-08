
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-green-800">{title}</h2>
        <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

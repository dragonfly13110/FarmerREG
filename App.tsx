import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { TerminologyPage } from './pages/TerminologyPage';
import { RationalePage } from './pages/RationalePage';
import { ConditionsPage } from './pages/ConditionsPage';
import { ProcessPage } from './pages/ProcessPage';
import { FormGuidePage } from './pages/FormGuidePage';
import { AssistantPage } from './pages/AssistantPage';
import { ReportsPage } from './pages/ReportsPage';
import { PlantingSchedulePage } from './pages/PlantingSchedulePage';
import { MinimumAreaPage } from './pages/MinimumAreaPage';
import { PlantingDensityPage } from './pages/PlantingDensityPage';
import type { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'terminology':
        return <TerminologyPage />;
      case 'rationale':
        return <RationalePage />;
      case 'conditions':
        return <ConditionsPage />;
      case 'process':
        return <ProcessPage />;
      case 'form-guide':
        return <FormGuidePage />;
      case 'reports':
        return <ReportsPage />;
      case 'planting-schedule':
        return <PlantingSchedulePage />;
      case 'minimum-area':
        return <MinimumAreaPage />;
      case 'planting-density':
        return <PlantingDensityPage />;
      case 'assistant':
        return <AssistantPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './tabs.css';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <span className="tabs">
      {tabs.map((tab, index) => (
        <Link
          className={
            activeTab === index
              ? "tabs__tab tab_active"
              : "tabs__tab"
          }
          onClick={() => setActiveTab(index)}
          to={tab.to}
          key={index}
        >{tab.name}</Link>
      ))}
    </span >
  )
}

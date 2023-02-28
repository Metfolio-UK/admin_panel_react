import { useState } from 'react';
import { Tabs } from 'antd';
import CurrentUser from '../screens/currentUser';
import SellOrders from './sellOrders';
import PaymentRisks from './PaymentRisks';

const { TabPane } = Tabs;

export function MyContainer() {
  const [activeTab, setActiveTab] = useState('1');

  function handleTabChange(key) {
    setActiveTab(key);
  }

  return (
    <Tabs activeKey={activeTab} onChange={handleTabChange}>
      <TabPane tab="Tab 1" key="1">
      <div style={{ width: '100%'}}>
          Content of Tab Pane 1 with full width container
        </div>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
      <div style={{ width: '100%', background: 'red' }}>
          Content of Tab Pane 2 with full width container
        </div>
      </TabPane>
    </Tabs>
  );
}

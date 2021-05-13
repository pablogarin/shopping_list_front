import React from 'react';
import {
  Tab,
  TabHeader,
  TabContent,
  TabContainer,
} from '../styled/Tab';

function Tabs({ children, setSelectedTab }) {
  const setTab = (tabId) => {
    const currTab = children.find(tab => tab.key === tabId)
    setSelectedTab(currTab.key)
  }
  return (
    <>
      <TabContainer>
        <TabHeader>
          {children.map(tab => (<Tab
              key={tab.key}
              onClick={() => setTab(tab.key)}
              active={tab.props.active}
            >
              {tab.props.title}
            </Tab>))}
        </TabHeader>
        <TabContent>
          {children.find(tab => tab.props.active)}
        </TabContent>
      </TabContainer>
    </>
  )
}

export default Tabs

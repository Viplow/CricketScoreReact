
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CommentaryInformation from './CommentaryInformation';
import HighlightsInformation from './HighlightsInformation';
import ScoreCardInformation from './ScoreCardInformation';
import SquadInformation from "./SquadInformation"
const TabsComponent = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Squad</Tab>
                <Tab>ScoreCard</Tab>
                <Tab>Commentary</Tab>
                <Tab>Highlights</Tab>
            </TabList>
            <TabPanel>
                <SquadInformation />
            </TabPanel>
            <TabPanel>
                <ScoreCardInformation />
            </TabPanel>
            <TabPanel>
                <CommentaryInformation />
            </TabPanel>
            <TabPanel>
                <HighlightsInformation />
            </TabPanel>
        </Tabs>
    );

}

export default TabsComponent
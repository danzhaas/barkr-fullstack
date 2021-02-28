import React, { useState } from 'react';
import { TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import classnames from 'classnames';
import RoutineFormComponent from './RoutineFormComponent';
import SuppliesFormComponent from './SuppliesFormComponent';
import NotesFormComponent from './NotesFormComponent';


function CareFormComponent({ context }) {
    
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    
    return (
        <div className="bg-white border-0">
            <h1>Care Categories</h1>
            <div id="dogForm" >
                <Nav tabs>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            <h2>Routine</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            <h2>Supplies</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem id="barkr-tab">
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            <h2>Notes</h2>
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <RoutineFormComponent context={context} />
                    </TabPane>
                    <TabPane tabId="2">
                        <SuppliesFormComponent context={context} />
                    </TabPane>
                    <TabPane tabId="3">
                        <NotesFormComponent context={context} />
                    </TabPane>
                </TabContent>
            </div>
        </div>
    )
}

export default CareFormComponent;
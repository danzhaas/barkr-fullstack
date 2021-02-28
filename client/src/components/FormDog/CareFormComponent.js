import React, { useState } from 'react';
import { TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import classnames from 'classnames';
import RoutineFormComponent from './RoutineFormComponent';
import SuppliesFormComponent from './SuppliesFormComponent';
import NotesFormComponent from './NotesFormComponent';


// const RoutineList = ({context: { chosenDog }, setActiveRoutine }) => {

//     return(
//         chosenDog.routine.map(routine => {
//             return(
//                 <div key={routine.id} className="w-100">
//                     <Button className="bg-white w-100" onClick={() => setActiveRoutine(routine.id)}>
//                         <h2 className="my-auto ml-2 text-primary">{routine.detail}</h2>
//                     </Button>
//                 </div>
//             )
//         })
//     )
// }

// const SuppliesList = ({context: { chosenDog }, setActiveSupplies }) => {

//     return(
//         chosenDog.supplies.map(supplies => {
//             return(
//                 <div key={supplies.id} className="w-100">
//                     <Button className="bg-white w-100" onClick={() => setActiveSupplies(supplies.id)}>
//                         <h2 className="my-auto ml-2 text-primary">{supplies.detail}</h2>
//                     </Button>
//                 </div>
//             )
//         })
//     )
// }

// const NotesList = ({context: { chosenDog }, setActiveNote }) => {

//     return(
//         chosenDog.notes.map(note => {
//             return(
//                 <div key={note.id} className="w-100">
//                     <Button className="bg-white w-100" onClick={() => setActiveNote(note.id)}>
//                         <h2 className="my-auto ml-2 text-primary">{note.content}</h2>
//                     </Button>
//                 </div>
//             )
//         })
//     )
// }


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
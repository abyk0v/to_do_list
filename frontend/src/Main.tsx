import * as React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AddField from "./components/AddField/AddField";

import List from "./components/List/List";
import Screen from "@biocad/bcd-front-ui/layout/Screen";
import {Header} from "@biocad/bcd-front-ui/layout/Table";

// interface Props {
// }
//
// interface StateProps {
//     state: {text: string, isActive: boolean}[]
// }
//
// const Main: React.FC<Props> = () => {
//
//     const {name, address} = useSelector<InitialState, StateProps>((state: InitialState) => {
//         return {
//             name: state.name,
//             address: state.address
//         }
//     });
//
//     const dispatch = useDispatch();
//     const rootDispatcher = new RootDispatcher(dispatch);
//
//     function handleNote_ADD(value) {
//         props.onAddNote(value);
//     }
//
//     function handleNote_Del(value) {
//         props.onDelNote(value);
//     }
//
//     function handleNote_Edit(value, index, isActive) {
//         props.onEditNote(value, index, isActive);
//     }
//
//     const h2_style = {
//         marginLeft: "auto",
//         marginRight: "auto",
//     };
//
//     const Sidebar_style = {
//         height: "100%",
//     };
//
//     const Logo = () => <div style={{fontSize:'24px'}}>📝</div>;
//
//     return  <div>
//         <HashRouter>
//             <Screen>
//                 <Screen.Header Logo={Logo} version="v0.1"/>
//                 <Screen.SidebarLayout>
//                     <Screen.Sidebar collapsible>
//                         <h2 style={h2_style}>To do list</h2>
//                         <AddField transferData={handleNote_ADD}/>
//                     </Screen.Sidebar>
//                     <Screen.Content>
//                         <Screen.Panel>
//                             <List notes={props.store}
//                                   handler_del={handleNote_Del}
//                                   handler_edit={handleNote_Edit}/>
//                         </Screen.Panel>
//                     </Screen.Content>
//                 </Screen.SidebarLayout>
//             </Screen>
//         </HashRouter>
//     </div>
// }

function Main(props) {

    function handleNote_ADD(value) {
        props.onAddNote(value);
    }

    function handleNote_Del(value) {
         props.onDelNote(value);
    }

    function handleNote_Edit(value, index, isActive) {
         props.onEditNote(value, index, isActive);
    }

    const h2_style = {
        marginLeft: "auto",
        marginRight: "auto",
    };

    const Sidebar_style = {
        height: "100%",
    };

    const Logo = () => <div style={{fontSize:'24px'}}>📝</div>;

    return  <div>
                <HashRouter>
                    <Screen>
                        <Screen.Header Logo={Logo} version="v0.1"/>
                        <Screen.SidebarLayout>
                            <Screen.Sidebar collapsible>
                                <h2 style={h2_style}>To do list</h2>
                                <AddField transferData={handleNote_ADD}/>
                            </Screen.Sidebar>
                            <Screen.Content>
                                <Screen.Panel>
                                    <List notes={props.store}
                                          handler_del={handleNote_Del}
                                          handler_edit={handleNote_Edit}/>
                                </Screen.Panel>
                            </Screen.Content>
                        </Screen.SidebarLayout>
                    </Screen>
                </HashRouter>
            </div>
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddNote: (value) => {
            dispatch({
                type: 'ADD_NOTE',
                value: value
            });
        },
        onDelNote: (value) => {
            dispatch({
                type: 'DEL_NOTE',
                index: value
            });
        },
        onEditNote: (value, index, isActive) => {
            dispatch({
                type: 'EDIT_NOTE',
                text: value,
                index: index,
                isActive: isActive
            });
        }
    })
)(Main);
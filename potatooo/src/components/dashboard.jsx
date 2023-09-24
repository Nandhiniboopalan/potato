import React from 'react';
import Header from '../header';
import './dashboard.css';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import AddUser from './AddUser';
import UserList from './UserList';

function AdminDashBoard(){

    return (
        <div>
         
            {/* <Header/>
             */}
            <h1 style={{marginTop:"-1px"}} > Dashboard</h1>
            <div >
                <Provider store={store}>
                    <div>
                        <AddUser />
                        <UserList />
                    </div>
                </Provider>
            </div>
        </div>
    );
}

export default AdminDashBoard;
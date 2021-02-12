/* eslint-disable no-case-declarations */
import { createStore } from 'redux';

const savedUsers = JSON.parse(localStorage.getItem('users'));

const INITIAL_STATE = {
    users: savedUsers || [],
};

function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER':
            const newUsers = [action.user, ...state.users];
            localStorage.setItem('users', JSON.stringify(newUsers));
            return {
                ...state,
                users: newUsers,
            };
        default:
            return state;
    }
}

const store = createStore(users);

export default store;

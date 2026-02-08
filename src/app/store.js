import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';

// The configureStore function simplifies store setup by combining reducers 
// and adding default middleware (like Thunk for async calls).
console.log('Redux Store: Initializing global store configuration');
export const store = configureStore({
    reducer: {
        // We map our reducers to keys in the global state object.
        // 'state.counter' will be managed by counterReducer
        counter: counterReducer,
        // 'state.user' will be managed by userReducer
        user: userReducer,
    },
});

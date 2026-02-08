import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the user feature.
const initialState = {
    name: 'John Doe',
    email: 'john@example.com',
};

export const userSlice = createSlice({
    name: 'user', // This prefix combines with reducer names for action types
    initialState,
    reducers: {
        // This action handles updating multiple fields at once via the payload object.
        updateProfile: (state, action) => {
            console.log('UserSlice: Updating profile with payload:', action.payload);
            const { name, email } = action.payload;
            if (name !== undefined) state.name = name;
            if (email !== undefined) state.email = email;
        },
        // The reset action simply returns the initial state object.
        resetProfile: () => {
            console.log('UserSlice: Resetting profile to initial state');
            return initialState;
        },
    },
});

export const { updateProfile, resetProfile } = userSlice.actions;

export default userSlice.reducer;

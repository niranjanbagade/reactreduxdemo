import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile, resetProfile } from './userSlice';

export function UserProfile() {
    // Access global user state from the Redux store.
    const user = useSelector((state) => state.user);
    console.log('UserProfile Component: Global user state =', user);
    const dispatch = useDispatch();

    // We use local React state (useState) to handle "draft" changes in the form.
    // This prevents the global store from being updated on every keystroke.
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(`UserProfile Component: Form submitted. Updating with Name="${name}", Email="${email}"`);
        // Dispatching the 'updateProfile' action sends the form data to the store.
        dispatch(updateProfile({ name, email }));
    };

    return (
        <div className="card profile-card">
            <h2>User Profile</h2>
            <div className="profile-display">
                {/* These values always reflect the 'truth' in the global Store. */}
                <p><strong>Current Name:</strong> {user.name}</p>
                <p><strong>Current Email:</strong> {user.email}</p>
            </div>
            <form onSubmit={handleUpdate} className="profile-form">
                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            console.log('UserProfile Component: Local Name draft updated:', e.target.value);
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            console.log('UserProfile Component: Local Email draft updated:', e.target.value);
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-primary">Update Profile</button>
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => {
                            console.log('UserProfile Component: Reset button clicked');
                            // Dispatching the 'resetProfile' action restores initial data.
                            dispatch(resetProfile());
                            // We also sync the local form state back to the initial data.
                            setName('John Doe');
                            setEmail('john@example.com');
                        }}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

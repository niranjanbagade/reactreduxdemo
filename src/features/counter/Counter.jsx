import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from './counterSlice';

export function Counter() {
    // useSelector allows a component to 'select' and subscribe to a piece of global state.
    // The component will automatically re-render whenever this value changes in the store.
    const count = useSelector((state) => state.counter.value);
    console.log('Counter Component: Rendering with count =', count);

    // useDispatch returns the store's dispatch function, used to send actions to the store.
    const dispatch = useDispatch();

    return (
        <div className="card counter-card">
            <h2>Counter Component</h2>
            <div className="counter-controls">
                <button
                    className="btn-counter"
                    aria-label="Decrement value"
                    // We dispatch the action creator function to trigger a state update.
                    onClick={() => {
                        console.log('Counter Component: Dispatching decrement');
                        dispatch(decrement());
                    }}
                >
                    -
                </button>
                <span className="counter-value">{count}</span>
                <button
                    className="btn-counter"
                    aria-label="Increment value"
                    onClick={() => {
                        console.log('Counter Component: Dispatching increment');
                        dispatch(increment());
                    }}
                >
                    +
                </button>
            </div>
            <div className="counter-actions">
                {/* We can pass data to an action, which appears as 'payload' in the reducer. */}
                <button onClick={() => {
                    console.log('Counter Component: Dispatching incrementByAmount(5)');
                    dispatch(incrementByAmount(5));
                }}>
                    Add 5
                </button>
                <button onClick={() => {
                    console.log('Counter Component: Dispatching decrementByAmount(5)');
                    dispatch(decrementByAmount(5));
                }}>
                    Subtract 5
                </button>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react'
import state$ from '../model/CounterModel'
import { increment, decrement, reset, toggleAutoIncrement } from '../intent/CounterIntent'
import './CounterView.css'

const CounterView = () => {
    const [state, setState] = useState({ count: 0, autoIncrement: false })

    useEffect(() => {
        const subscription = state$.subscribe(setState)
        return () => subscription.unsubscribe()
    }, [])

    return (
        <div className="counter-container">
            {state.autoIncrement && (
                <>
                    <img className="rick-roll-gif left" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNyZWdkZzY1aHhoM2h3bjdpd280OGcyY3Vvb2Y2MmtjZWs3c3ZnbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ju7l5y9osyymQ/giphy.gif" alt="Rick Roll" />
                    <img className="rick-roll-gif right" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNyZWdkZzY1aHhoM2h3bjdpd280OGcyY3Vvb2Y2MmtjZWs3c3ZnbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ju7l5y9osyymQ/giphy.gif" alt="Rick Roll" />
                </>
            )}

            <h1>Counter: {state.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <label>
                <input type="checkbox" checked={state.autoIncrement} onChange={(e) => toggleAutoIncrement(e.target.checked)} />
                Auto Increment
            </label>
        </div>
    )
}

export default CounterView

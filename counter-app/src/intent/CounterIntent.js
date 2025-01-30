import { Subject } from 'rxjs'

export const counterIntent$ = new Subject()

export const increment = () => counterIntent$.next({ type: 'INCREMENT' })
export const decrement = () => counterIntent$.next({ type: 'DECREMENT' })
export const reset = () => counterIntent$.next({ type: 'RESET' })
export const toggleAutoIncrement = (enabled) => counterIntent$.next({ type: 'AUTO_INCREMENT', enabled })

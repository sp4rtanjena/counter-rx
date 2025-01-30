import { BehaviorSubject, interval, merge, of } from 'rxjs'
import { scan, switchMap, map } from 'rxjs/operators'
import { counterIntent$ } from '../intent/CounterIntent'

const initialState = { count: 0, autoIncrement: false }
const state$ = new BehaviorSubject(initialState)

const autoIncrement$ = state$.pipe(
    switchMap(state => {
        return state.autoIncrement ? interval(1100).pipe(map(() => ({ type: 'INCREMENT' }))) : of()
    })
)

merge(counterIntent$, autoIncrement$)
    .pipe(
        scan((state, action) => {
            let newCount = state.count
            if (action.type === 'INCREMENT') newCount = Math.min(98, state.count + 1)
            else if (action.type === 'DECREMENT') newCount = Math.max(0, state.count - 1)
            else if (action.type === 'RESET') newCount = 0
            else if (action.type === 'AUTO_INCREMENT') return { ...state, autoIncrement: action.enabled }
            else return state
            return { ...state, count: newCount }
        }, initialState)
    )
    .subscribe(state$)

export default state$
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ListItem, ListItemStatus } from "../types";

interface iStateCtx {
    state: ListItem[];
    actions: {
        addCard: (data: string) => void
        editCard: (index: number, currenStatus: ListItemStatus) => void
    }
}

const StateCtx = createContext<iStateCtx>({
    state: [],
    actions: {
        addCard: () => { },
        editCard: () => { },
    }
})

const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<ListItem[]>([])


    const addCard = useCallback((text: string) => {
        setState([
            ...state,
            { status: ListItemStatus.notVisited, text }
        ])
    }, [state])

    const editCard = useCallback((index: number, currenStatus: ListItemStatus) => {
        let newStatus = ListItemStatus.notVisited

        if (currenStatus === ListItemStatus.visited) {
            newStatus = ListItemStatus.notVisited
        }
        if (currenStatus === ListItemStatus.notVisited) {
            newStatus = ListItemStatus.visited
        }

        const newState = [...state]
        newState[index].status = newStatus

        setState(newState)

    }, [state])

    const ctxValue: iStateCtx = useMemo(() => ({
        state,
        actions: {
            addCard,
            editCard
        }
    }), [state, addCard, editCard])

    return <StateCtx.Provider value={ctxValue}>{children}</StateCtx.Provider>
}

export const useCardData = () => {
    const { state } = useContext(StateCtx);

    return state;
}

export const useCardActions = () => {
    const { actions } = useContext(StateCtx)
    return actions
}

export default StateProvider
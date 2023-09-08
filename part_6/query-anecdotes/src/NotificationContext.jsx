import { useContext } from "react"
import { useReducer } from "react"
import { createContext } from "react"

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "show":
            return {message: action.payload, show:true}
        case "hide":
            return {message:"", show:false}
        default:
            return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, {message:"", show:false})

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationState = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export default NotificationContext
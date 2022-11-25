import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { differenceWith, each, isEqual } from 'lodash'
import * as Notifications from 'expo-notifications'
import { differenceInHours } from 'date-fns'
import { useEffect } from 'react'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

const NotificationsHandler = () => {
  const dispatch = useAppDispatch()
  const favoriteEvents = useAppSelector(state => state.alerts.alerts)
  const notificationsAlreadySend = useAppSelector(state => state.alerts.notificationsSend)

  const createNotifications = async () => {
    const newFavoriteEvents = differenceWith(favoriteEvents, notificationsAlreadySend, isEqual)
    each(newFavoriteEvents, event => {
      const hoursInterval = differenceInHours(new Date(event.start_date), new Date())
      if (hoursInterval && hoursInterval > 24) {
        schedulePushNotification(event.name)
        dispatch({ type: 'alerts/setNotification', payload: event })
      }
    })
  }

  useEffect(() => {
    createNotifications()
  }, [favoriteEvents])

  const schedulePushNotification = async (eventName: string) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Un évènement favoris approche 🥰',
        body: `${eventName} est dans moins de 24h!`,
        data: { data: 'goes here' }
      },
      trigger: { seconds: 2 }
    })
  }
  return null
}

export default NotificationsHandler

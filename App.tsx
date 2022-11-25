import NotificationsHandler from './src/screens/alerts/notifications/NotificationsHandler'
import AppNavigation from './src/routes/AppNavigation'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'

// à voir plus tard pour les thèmes
/* const MyTheme = {
  dark: false,
  colors: {
    background: '#fff'
  }
} */

const App = () => {
  return (
    <Provider store={store}>
      <NotificationsHandler/>
      <AppNavigation/>
    </Provider>
  )
}

export default App

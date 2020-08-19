import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Profile from './pages/Profile'

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     Profile: {
//       screen: Profile
//     },
//   }
// )

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    // bottomTabNavigator
  })
)
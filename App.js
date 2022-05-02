import { palette } from 'themes/palette'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// routing
import 'react-native-gesture-handler'
import StackNavigation from 'routes/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <ThemeProvider theme={palette}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

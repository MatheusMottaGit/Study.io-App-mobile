import { useEffect, useState } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins"

import * as SecureStore from 'expo-secure-store'

export default function Layout(){

  const [isLogged, setIsLogged] = useState<boolean | undefined>(undefined)

  const [fontsLoaded] = useFonts({ 
    Poppins_400Regular,
    Poppins_700Bold
   })

   useEffect(() => { 
     SecureStore.getItemAsync('token').then(token => {
      setIsLogged(!!token)
    })
  }, [])
  
  if(!fontsLoaded){
    return <SplashScreen />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' redirect={isLogged} />
      <Stack.Screen name='app_routes' />
    </Stack>
  )
}
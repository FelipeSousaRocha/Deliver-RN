import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <View >
          <Text className='text-red-500'>Olá!</Text>
          <StatusBar style="auto" />
        </View>
      </TailwindProvider>
    </NavigationContainer>
  );
}
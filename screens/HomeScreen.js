import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeScreen() {

  //Navegação
  const navigation = useNavigation();

  //Assim que carregar a tela fazer isso
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }); 
  }, [] //Array de mucanças 
  );

  return (
    <SafeAreaView>
      <Text className="text-blue-600">Página HomeScreen</Text>
    </SafeAreaView>
  );
};
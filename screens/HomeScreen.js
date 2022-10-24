import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {

  //Navegação
  const navigation = useNavigation();

  //Assim que carregar a tela fazer isso
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Testing",
    }); 
  }, [] //Array de mucanças 
  );

  return (
    <View>
      <Text className="text-blue-600">Página HomeScreen</Text>
    </View>
  );
};
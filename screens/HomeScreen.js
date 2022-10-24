import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

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
      <Text className="text-blue-600">

        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4'>
          <Image source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View>
            <Text>Entregar agora!</Text>
            <Text>Localização atual</Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};
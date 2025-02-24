import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import CustomButton from '@/components/custom-button'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

const Index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full items-center h-full px-14'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain' />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain' />
          <View className='relative mt-4 '>
            <Text className='text-white font-bold text-2xl'>
              Discover Endless Possibilities with {' '}
              <Text className='text-orange-400'>Aura</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[130px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain' />
          </View>
          <Text className='text-gray-100 mt-7 items-center'>
            Where creativity meets innovation:
            embark on a journey of limitless exploration with Aura
          </Text>
          <CustomButton
            title='Continue with Email'
            handlePress={()=> router.push("/sign-in")}
            containerStyle='w-full mt-7'
            isLoading={false}
            textStyles='text-black text-md'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
}

export default Index
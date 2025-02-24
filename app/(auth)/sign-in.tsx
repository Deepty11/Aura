import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import FormField from '@/components/form-field'

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image source={images.logo}
            resizeMode="contain"
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Aora</Text>
          <FormField
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          keyboardType="email-address"
          otherStyles="mt-7"/>
          <FormField
          title='Passowrd'
          value={form.email}
          handleChangeText={(e) => setForm({...form, password: e})}
          keyboardType="password"
          otherStyles="mt-7"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({})
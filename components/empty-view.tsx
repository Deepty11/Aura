import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './custom-button'
import { router } from 'expo-router'

interface EmptyStateProps {
    title: string
    subtitle: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
    return (
        <View className='justify-center items-center'>
            <Image source={images.empty}
                resizeMode="contain"
                className='w-[270px] h-[215px]' />
            <Text className='text-orange-400 text-xl'>{subtitle}</Text>
            <Text className='text-orange-400 text-sm'>{title}</Text>
            <CustomButton
                title='Create a video'
                handlePress={() => {router.push('/create')}}
                containerStyle='pl-4 pr-4 mt-7' />

        </View>
    )
}

export default EmptyState

const styles = StyleSheet.create({})
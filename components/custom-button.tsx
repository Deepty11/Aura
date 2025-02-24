import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string,
    handlePress: any,
    isLoading: boolean,
    textStyles: string,
    containerStyle: string
}

const CustomButton: React.FC<CustomButtonProps> = ({title, handlePress, containerStyle, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    className={`bg-orange-300 rounded-xl min-h-[62px] items-center justify-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
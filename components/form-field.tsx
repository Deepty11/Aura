import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

interface FormFieldProps {
    title: string,
    value: string,
    placeholder: string,
    handleChangeText: any,
    keyboardType: string,
    otherStyles: string
}

const FormField: React.FC<FormFieldProps> = ({ title, value, placeholder, handleChangeText, keyboardType, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View>
            <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
            <View className='border-2 w-full border-red-800 h-16 px-4 bg-black-100 rounded-xl mt-2'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    value={value}
                    onChangeText={handleChangeText}
                    placeholder={placeholder}
                    secureTextEntry={title == "Password" && !showPassword} />
                {title == "Passowrd" &&
                    <TouchableOpacity>
                    </TouchableOpacity>}
            </View>
        </View>
    )
}

export default FormField

const styles = StyleSheet.create({})
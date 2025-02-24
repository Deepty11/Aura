import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import  {tabs} from '@/constants/tabs'

interface TabIconProps {
    icon: ImageSourcePropType,
    color: string,
    name: string,
    focused: boolean
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
    return (
        <View className='flex items-center justify-center gap-2 w-60'>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6" />
            <Text 
            className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
            style={{color: "white"}}>
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false, // to hide default titile
                    tabBarStyle: { 
                        height: 84, 
                        paddingTop: 8,
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533"
                     },
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                }}>
                {
                    tabs.map((tab) =>
                        <Tabs.Screen
                            key={tab.name}
                            name={tab.name}
                            options={{
                                title: tab.title,
                                headerShown: false,
                                tabBarIcon: ({ color, focused }) =>
                                    <TabIcon
                                        icon={tab.icon}
                                        color={color}
                                        name={tab.title}
                                        focused={focused} />
                            }}
                        />
                    )
                }
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})
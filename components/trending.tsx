import { FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export interface TrendingPost {
    id: number;
}
interface TrendingProps {
    posts: TrendingPost[]
}

const Trending: React.FC<TrendingProps> = ({posts}) => {
  return (
    <FlatList 
    data={posts}
    keyExtractor={(item) => item.$id}
    renderItem={({item}) => {
        return <Text className='text-white'>{item.id}</Text>
    }}
    horizontal >

    </FlatList>
  )
}

export default Trending

const styles = StyleSheet.create({})
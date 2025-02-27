import { StyleSheet, Text, View, FlatList, Image, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/search-input'
import Trending, { TrendingPost } from '@/components/trending'
import EmptyState from '@/components/empty-view'


const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    // do some refreshing task/ refresh video list
    setRefreshing(false)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{ id: 1 }, { id: 2 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className='text-white font-psemibold'>{item.id}</Text>
        )}
        ListHeaderComponent={
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6 '>
              <View className=''>
                <Text className='font-pmedium text-sm text-gray-100'>Welcome Back!</Text>
                <Text className='text-2xl font-psemibold text-white'>JSMAstery</Text>
              </View>
              <View className='mt-1.5'>
                <Image source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain' />
              </View>
            </View>

            <SearchInput
              value={searchText}
              handleChangeText={(text) => setSearchText(text)} />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100'>Trending Videos</Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        }

        ListEmptyComponent={() =>
          <EmptyState
            title='No Video found'
            subtitle='Be the first one to upload a video' />
        }

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} />}>
      </FlatList>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
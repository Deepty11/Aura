import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { images } from "@/constants";
import FormField from "@/components/form-field";
import CustomButton from "@/components/custom-button";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appwrite";

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password) {
          Alert.alert('Error', 'Please fill in all the fields')
        }
    
        setIsSubmitting(true)
    
        try {
          const result = await signIn(form.email, form.password)
          // Set to global state
          Alert.alert("Success", "Successfully logged in")
          router.replace('/home')
          
        } catch (error) {
          console.log(error)
          Alert.alert('Error', 'Error occured')
        } finally {
          setIsSubmitting(false)
          
        }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(text) => setForm({ ...form, email: text })}
            keyboardType="email-address"
            placeholder="Enter Email"
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(text) => setForm({ ...form, password: text })}
            placeholder="Enter Password"
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyle="mt-8"
            textStyles=""
            isLoading={isSubmitting}
          />
          <View className="items-center mt-4">
            <Text className="justify-center text-gray-400 font-pregular text-md">
              Don't have an account?
            </Text>
            <Link
              className="text-md font-semibold text-orange-500 font-psemibold"
              href={"/sign-up"}
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({});

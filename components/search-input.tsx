import {
    Image,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";

interface SearchInputProps extends TextInputProps {
    value: string;
    handleChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    value,
    handleChangeText,
}) => {
    return (
        <View className={`border-2 w-full h-16 border-black-200 px-4 bg-black-100 focus:border-secondary rounded-xl mt-2 items-center flex-row space-x-4`}>
            <TextInput
                className="flex-1 h-full text-white font-regular text-base"
                value={value}
                onChangeText={handleChangeText}
                placeholder="Search for a video topic"
            />
            <TouchableOpacity>
                <Image source={icons.search}
                    className="w-6 h-6"
                    resizeMode="contain" />
            </TouchableOpacity>

        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({});

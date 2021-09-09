import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, FlatList, VirtualizedList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Card from '../Components/Card';

const data = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const Screen = () => {

    const [showtext, setShowText] = useState(false);

    const shrinkText = (data, n) => {
        var res = "";
        for (var i = 0; i < Math.min(data.length, n); i++) res += data.charAt(i);
        if (!showtext) return res + '...';

        for (var i = 50; i < data.length; i++) res += data.charAt(i);
        return res;
    }

    const list = [
        { title: 'Prime Factorisation Exercise', status: 'complete' },
        { title: 'Fill in the blanks', status: 'complete' },
        { title: 'Match the following', status: 'incomplete', start_at: '14 March' }
    ]

    const titles = [
        'HCF and LCM',
        'Integration',
        'Differentiation',
        'Factorisation Theorm of Arithmetic'
    ]

    return (
        <SafeAreaView style={{ padding: 0 }}>
            <ScrollView>
                <Feather name="chevron-left" color="black" size={30} style={{marginVertical: 20, marginLeft: 20}} />
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Image source={require('../images/image.jpg')} style={{ height: 200, width: 200, borderRadius: 15 }} />
                    <View>
                        <Text style={{ fontWeight: '400', fontSize: 22, maxWidth: 150 }}>How to clear FRA without coaching - Vision IAS</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <IonIcons name="play" size={25} color="red" />
                            <Text style={{ marginLeft: 5, fontSize: 15 }}>10 Videos</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    borderBottomColor: 'lightgray',
                    borderBottomWidth: 1,
                    width: '90%',
                    alignSelf: 'center',
                    marginVertical: 20
                }} />
                <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                    <Text style={{ fontWeight: '400', fontSize: 22, maxWidth: 150 }}>Introduction</Text>
                    <Text style={{ fontSize: 15, color: 'gray', textAlign: 'justify' }}>
                        {shrinkText(data, 150)}
                    </Text>
                    <TouchableOpacity onPress={() => setShowText(!showtext)}>
                        <Text style={{ textAlign: 'right', color: 'red' }}>{'  '}Show {!showtext ? 'More' : 'Less'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    {titles.map((title) => (
                        <View key={title} style={{width: '100%', alignItems: 'center', marginBottom: 20}}>
                            <Card title={title} list={list} />
                        </View>
                    ))}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Screen

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Card = ({ title, list }) => {
    const [isOpen, setIsOpen] = useState(false);

    const RenderList = ({ item, index }) => (
        <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 20, marginTop: 12 }} >
            <IonIcons name={`ios-lock-${item.start_at ? 'closed' : 'open'}`} size={25} color={!item.start_at ? 'lightgreen' : 'red'} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>{item.title}</Text>
                {item.status === 'incomplete' ? <Text style={{ fontSize: 14, color: 'gray' }}>{`starts ${item.start_at}`}</Text> : null}
            </View>
        </View>
    )

    return (
        <View style={[styles.border, styles.shadows]}>
            <View style={{ padding: 15 }}>
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <View style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 5 }}>{title}</Text>
                            {!isOpen ? <Text>{list.length} Tests</Text> : null}
                        </View>
                        <Feather name={`chevron-${isOpen ? 'up' : 'down'}`} size={25} color="black" style={{ alignSelf: 'flex-start' }} />
                    </View>
                </TouchableOpacity>
                {isOpen ?
                    list.map((item, index) => <RenderList key={index} item={item} index={index} />)
                    :
                    null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        // borderWidth: 0.2,
        // borderColor: 'gray'
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
})

export default Card

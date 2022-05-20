import React from 'react';
import { Button } from 'react-native-web';

function Box({id,description}) {

    const navigation = useNavigation();

    return (
        
        <View style ={style.id}>
            <text>
              #{id}revisando los siguientes articulos
            </text>
            <Button
            title ="ver"
            Onpress ={
                    () => navigation.navigate('Details', {
                    id: id,
                    title: title,
                    description: description
                })
            }
        />
        </View>
    );
}
  


export default Box;
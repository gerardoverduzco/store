import React from 'react';
import { View } from 'react-native-web';

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>Menu</Text>
            <Button 
                title="Ir a Detalle"
                onPress={() => navigation.navigate('Products', {
                    id: 5, 
                    description: 'Aquí ponemos los articulos',
                } )}
            />
            <Button name="Home" component={Home} Button/>
            <Button name="Atras" component={Atras}Button/>
        
        </View>
    );
}

const

styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#32CD32',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
})
}

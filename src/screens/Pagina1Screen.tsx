import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5cc9f5'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 3, nombre: 'Juan Carlos'})
          }>
          <Text style={styles.botonGrandeTexto}>Juan </Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        title="ir Persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
    </View>
  );
};

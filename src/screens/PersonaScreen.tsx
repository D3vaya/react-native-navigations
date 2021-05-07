import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

// NOTE [ROUTE] definicion de typo en props de las visatas en cada Screen
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouteParams;
  const params = route.params;
  // NOTE [CONFIG] set de nombre a la pagina
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

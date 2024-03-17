import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import DestinosScreen from './Pages/DestinoScreen/DestinosScreen';
import SobreScreen from './Pages/SobreScreen/SobreScreen';
import CustomDrawerContent from './Content/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Destinos" component={DestinosScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

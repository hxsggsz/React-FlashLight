import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () =>{
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
  useEffect(() =>{
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  }, []);
  
  return( 
  <View style={toggle ? style.containerLight : style.containerBlack}>
    <TouchableOpacity onPress ={handleChangeToggle}>
    <Image style={toggle ? style.LightingOn : style.LightingOn}
    source={toggle
      ? require('./assets/icons/eco-light-off.png')
      : require('./assets/icons/eco-light.png')
    }
    />
    </TouchableOpacity> 
    <Image style={style.sticker} source={toggle
     ? require('./assets/icons/react-adesivo-sticker.png') 
     : require('./assets/icons/react.png')
    } 
    />
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  containerBlack:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
  sticker:{
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: -200,
  },
});
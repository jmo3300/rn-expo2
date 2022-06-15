import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Params {
  p1: string,
  p2: number
}

const Commons = () => {

  const [params, setParams] = useState<Params>({
    p1: 'a',
    p2: 1
  }
  )

  useEffect(() => {

    const getParams = async () => {
      try {
        console.log('read params')
        const params = await AsyncStorage.getItem('@params')
        if (params === null){
          console.log('params not found')
          const params = { p1: 'b', p2: 2 };
          setParams(params);
          storeParams(params);
        }else{
          console.log('params found')
          setParams(JSON.parse(params));
        }
      } catch(e) {
        console.log(e);
      }
    }

    const storeParams = async (params:Params) => {
      
      try {
        const paramsString = JSON.stringify(params)
        await AsyncStorage.setItem('@params', paramsString)
        console.log('params written')        
      } catch (e) {
        console.log(e);
      }

    }

    getParams();

  }, []);

  return (
    <View>
      <Text>Commons</Text>
      <Text>p1: {params.p1}</Text>
      <Text>p2: {params.p2}</Text>
    </View>
  )
}

export default Commons;
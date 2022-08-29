import React from 'react';
import {Text, SafeAreaView, ScrollView, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Welcome to HealthMonk</Text>
        <Button
          title="Go to HealthMonk"
          onPress={() => navigation.navigate('HealthDetailsScreen')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

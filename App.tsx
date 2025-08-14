import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 48.866667,
          longitude: 2.333333,
          latitudeDelta: 0.2222,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={[
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ]}
      >
        <Marker coordinate={{ latitude: 48.858844, longitude: 2.294351 }} title="Eiffel Tower" />
        <Marker coordinate={{ latitude: 48.860611, longitude: 2.337644 }} title="Louvre Museum" />
        <Marker coordinate={{ latitude: 48.852968, longitude: 2.349902 }} title="Notre-Dame Cathedral" />
        <Marker coordinate={{ latitude: 48.886707, longitude: 2.343104 }} title="Sacré-Cœur" />
        <Marker coordinate={{ latitude: 48.873792, longitude: 2.295028 }} title="Arc de Triomphe" />
        <Marker coordinate={{ latitude: 48.860642, longitude: 2.352245 }} title="Centre Pompidou" />
        <Marker coordinate={{ latitude: 48.863788, longitude: 2.327758 }} title="Musée d'Orsay" />
        <Marker coordinate={{ latitude: 48.865633, longitude: 2.321236 }} title="Place de la Concorde" />
        <Marker coordinate={{ latitude: 48.853, longitude: 2.3499 }} title="Sainte-Chapelle" />
        <Marker coordinate={{ latitude: 48.860294, longitude: 2.327556 }} title="Tuileries Garden" />
      </MapView>

      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Open up App.tsx to start working on your app!</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 12,
    borderRadius: 8,
  },
  overlayText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

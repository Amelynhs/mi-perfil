import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const nombre: string = 'Hermenegildo';
  const rol: string = 'Payaso de turno';
  const habilidades: string[] = ['Comer', 'DORMIR','Nada mas :C'];

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/avatar.png')}
        style={styles.avatar}
        accessibilityLabel={`Foto de perfil de ${nombre}`}
      />

      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.rol}>{rol}</Text>

      <View style={styles.listaHabilidades}>
        {habilidades.map((habilidad, index) => (
          <Text key={index} style={styles.habilidad}>
            • {habilidad}
          </Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  rol: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 20,
  },
  listaHabilidades: {
    width: '80%',
  },
  habilidad: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 6,
  },
});
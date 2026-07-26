import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const nombre: string = 'Hermenegildo';
  const rol: string = 'Payaso de turno';
  const habilidades: string[] = ['Comer', 'DORMIR', 'Nada mas :C'];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('./assets/avatar.png')}
          style={styles.avatar}
          accessibilityLabel={`Foto de perfil de ${nombre}`}
        />

        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.rol}>{rol}</Text>

        <View style={styles.listaHabilidades}>
          {habilidades.map((habilidad, index) => (
            <View key={index} style={styles.chip}>
              <Text style={styles.chipTexto}>{habilidad}</Text>
            </View>
          ))}
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071530',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#59546b',
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 3,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    borderWidth: 3,
    borderColor: '#e5e7eb',
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f0ebeb',
  },
  rol: {
    fontSize: 15,
    color: '#e79292',
    marginBottom: 20,
  },
  listaHabilidades: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  chip: {
    backgroundColor: '#eef2ff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
  },
  chipTexto: {
    color: '#eb9383',
    fontWeight: '500',
    fontSize: 13,
  },
});
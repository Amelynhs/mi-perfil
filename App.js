import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const habilidades = ['Comer', 'DORMIR', 'Nada mas'];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
            source={require('./assets/avatar.png')}
            style={styles.avatar}
        />

        <Text style={styles.nombre}>Hermenegildo</Text>
        <Text style={styles.rol}>Payaso de turno</Text>

        <View style={styles.divisor} />

        <Text style={styles.tituloHabilidades}>Habilidades</Text>
        <View style={styles.listaHabilidades}>
          {habilidades.map((habilidad, index) => (
            <View key={index} style={styles.habilidadItem}>
              <Text style={styles.habilidadTexto}>{habilidad}</Text>
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
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#6366f1',
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  rol: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 16,
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#e5e7eb',
    marginBottom: 16,
  },
  tituloHabilidades: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  listaHabilidades: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  habilidadItem: {
    backgroundColor: '#eef2ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  habilidadTexto: {
    color: '#4f46e5',
    fontWeight: '500',
    fontSize: 13,
  },
});
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [pokemones, setPokemones] = useState([])
  // pokemones es el estado que contiene la lista de Pokémon, setPokemones es la función para actualizar el estado pokemones, Inicialmente, pokemones es un arreglo vacío [].

  useEffect(() => { // useEffect es un hook que permite realizar efectos secundarios en componentes funcionales, como llamadas a APIs o suscripciones.
    const getPokemones = async () => { // La función getPokemones se define dentro del useEffect y se ejecuta inmediatamente para obtener la lista de Pokémon.
      // Recuperamos el listado de los Pokemones
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const listaPokemones = await response.json()
      const { results } = listaPokemones // La respuesta se convierte a formato JSON y se extrae la propiedad results, que contiene la lista de Pokémon.

      setPokemones(results) // Actualiza el estado pokemones con la lista obtenida.

      console.log(listaPokemones); // Imprime la lista completa en la consola para fines de depuración.
    }
    getPokemones()
  }, []) //  como segundo argumento del useEffect, asegura que el efecto se ejecute solo una vez, similar a componentDidMount en componentes de clase.

  return (
    <div className="App">
      <h1>Pokédex</h1>

      {
        pokemones.map(pokemon => <p>{pokemon.name}</p>) // Se itera sobre el estado pokemones usando map para renderizar un párrafo (<p>) para cada Pokémon con su nombre.
      }

    </div>
  )
}

export default App

/* Resumen de los Hooks

useState:

Permite añadir estado a un componente funcional.
Devuelve un par: el estado actual y una función para actualizarlo.
Ejemplo: const [pokemones, setPokemones] = useState([]).

useEffect:

Permite realizar efectos secundarios en componentes funcionales.
Toma dos argumentos: una función y una lista de dependencias.
Si la lista de dependencias es vacía ([]), el efecto solo se ejecuta una vez, después del primer renderizado.
Ejemplo: useEffect(() => { ... }, []).
*/
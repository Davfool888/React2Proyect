import { useCallback, useEffect, useState } from 'react'
import './App.css'




function App() {
  const [data, setData] = useState([])
  const [loading, setLoanding] = useState(false)
  const [error, setError] = useState("")


  const consoleLoader = useCallback((loadingValue: boolean) => {
    setLoanding(loadingValue)
    console.info(loading)
  },[loading] )

  const fetchData = useCallback(
    async () => {
    consoleLoader(true)
    try {
      const response = await fetch("https://api.example,com/data")
      
      if (!response.ok) {
        throw new Error("Error al optener datos")
      }

      const jsonData = await response.json()
      setData(jsonData)
    } catch (err) {
      setError(err as string)
    } finally {
      setLoanding(false)
    }
  }, 
  [consoleLoader],
  ) 

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return <div>Cargando-----</div>
  }

  if (error) {
    return <div>Ups! Hay un error: {error}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App

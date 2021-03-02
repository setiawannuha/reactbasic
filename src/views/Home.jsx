import { useState, useEffect } from 'react'
import Card from '../components/Card'

const Home = (props) => {

  const [angka, setAngka] = useState(0)
  const [cars, setCars] = useState(['BMW', 'Toyota'])

  const tambahAngka = () => {
    setAngka(angka + 1)
  }
  const kurangAngka = () => {
    setAngka(angka - 1)
  }
  const tambahMobil = (namaMobil) => {
    setCars([...cars, namaMobil])
  }

  // update
  // useEffect(() => {
  //   console.log('render')
  // })

  // mounted
  useEffect(() => {
    console.log('render pertama saja')
  }, [])
  
  // update hanya ketika salah satu state berubah
  useEffect(() => {
    console.log('render ketika state cars berubah')
  }, [cars])

  return (
    <div className="container mt-5 text-center">
      <h1>Home</h1>
      <hr/>
      <h1>{`Angka : ${angka}`}</h1>
      <button onClick={tambahAngka} className="btn btn-success mr-2">Tambah</button>
      <button onClick={() => kurangAngka()} className="btn btn-danger">Kurang</button>
      <hr/>
      {JSON.stringify(cars)}
      <button onClick={() => tambahMobil("Porce")} className="btn btn-primary">Tambah Porce</button>
      <hr/>
      <Card 
        title="Hello world" 
        terimaData={
          (terserah1, terserah2) => alert(terserah1+' '+terserah2)}
        />
    </div>
  )
}
export default Home
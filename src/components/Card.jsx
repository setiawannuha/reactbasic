const Card = (props) => {
  const klikDisini = () => {
    props.terimaData('hello juga', "jug hello")
  }
  return(
    <div>
      <h1>Card {props.title}</h1>
      <button onClick={klikDisini} className="btn btn-info">KLIK DISINI</button>
    </div>
  )
}
export default Card
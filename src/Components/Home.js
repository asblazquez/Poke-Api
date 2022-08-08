import { getPokemon } from './Api';
import Clock from './Clock';




export function Home() {

  return (
    <div className="container-fluid containerMain">
      <Clock/>
    </div>
  )
}
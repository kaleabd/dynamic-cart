import { Navbar } from "../components/Navbar"
import { useCardStore } from "../store/UseCardStore"

function Cart() {
const {carts} = useCardStore()
  return (
    <div>
      <Navbar />
     {carts.map((data, i) => (
        <div key={i}>
          {data.description} - {data.id} - {data.title}
        </div>
      ))
     }
    </div>
  )
}

export default Cart
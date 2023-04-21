import { useCardStore } from "../store/UseCardStore"

useCardStore
function Cart() {
const {carts} = useCardStore()
  return (
    <div>
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
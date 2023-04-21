import {create} from 'zustand'
import { CardProps } from '../components/CardList'

interface CardState {
  bears: number
  increase: (by: number) => void
  carts: CardProps[]
  addCarts: (cart: CardProps) => void
}

export const useCardStore = create<CardState>((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
    carts: [],
    addCarts: (cart) => set((state) => ({
      carts: [
        ...state.carts,
         cart
      ]
    }))
  }))
  


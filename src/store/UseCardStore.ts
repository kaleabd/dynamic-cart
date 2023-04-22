import {create} from 'zustand'
import { CardProps } from '../components/CardList'

interface CardState {
  carts: CardProps[]
  addCarts: (cart: CardProps) => void
}

export const useCardStore = create<CardState>((set) => ({
    carts: [],
    addCarts: (cart) => set((state) => ({
      carts: [
        ...state.carts,
         cart
      ]
    }))
  }))
  


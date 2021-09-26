import { Document } from 'mongoose'

export interface Wallet extends Document {
  readonly id: string
  whichOwner: string
  owner: string
  coin: number
}

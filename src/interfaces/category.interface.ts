import { Document } from 'mongoose'

export interface Category extends Document {
  readonly id: string
  title: string
  baseImage: string
  homepageImage: string
}

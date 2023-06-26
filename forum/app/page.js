import Image from 'next/image'
import styles from './page.module.css'
import { connectDB } from '@/util/database'
import { MongoClient } from 'mongodb'

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  return (
    <div>
      title : {result[0].title}<br></br>
      content : {result[0].content}
    </div>
  )
}

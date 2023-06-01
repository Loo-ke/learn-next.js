import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  let name = "Lee"
  return (
    <div>
      <h4 className="title" style={{color:"blue", fontSize:30}}>종욱후레시</h4>
      <p className='title-sub'>by Luke {name}</p>
      <div>test</div>
    </div>
  )
}

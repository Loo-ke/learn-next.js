import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  let name = "Lee"
  let link = "http://google.com"
  return (
    <div>
      <h4 className="title" style={{color:"blue", fontSize:30}}>종욱후레시</h4>
      <p className='title-sub'>by Luke {name}</p>
      <a href={link}>링크</a>
      <div>test</div>
    </div>
  )
}

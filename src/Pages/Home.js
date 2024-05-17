import React from 'react'
import "./App.css"
import SideMenu from '../Components/SideMenu';
import Blog from '../Components/Blog';
// import { Link } from 'react-router-dom';

export default function AuthorPage() {
    const firstBlog = `Arabic music, with its intricate maqamat and diverse genres, embodies a captivating blend of tradition and innovation. From the haunting melodies of Andalusian music to the pulsating rhythms of contemporary pop, Arabic music offers a rich tapestry of sounds that resonate with audiences worldwide. It serves as a cultural vessel, expressing themes of love, longing, and social commentary, while also embracing global influences and modern production techniques. Through its timeless melodies and evocative lyrics, Arabic music invites listeners on a journey of discovery, where the beauty of tradition meets the excitement of new musical horizons.`;

  const secoundBlog =
    "Art, in its myriad forms, serves as a universal language that transcends boundaries and speaks to the essence of the human experience. Whether expressed through paint on canvas, sculpture in stone, or words on a page, art has the power to evoke emotions, provoke thought, and foster connection. It is a reflection of our collective imagination and a testament to the boundless creativity that defines humanity. From the ancient cave paintings of our ancestors to the avant-garde masterpieces of today, art continues to inspire, challenge, and unite us in a shared celebration of beauty and expression. Through its ability to capture the complexity of the human condition, art reminds us of our shared humanity and the profound connections that exist between us all. ";

  const thirdBlog = `Cars, more than mere machines, embody a potent blend of engineering marvel, aesthetic beauty, and cultural significance. From the roar of a powerful engine to the sleek lines of a classic design, cars ignite a passion that transcends generations and borders. They represent freedom, adventure, and the thrill of the open road, evoking a sense of exhilaration unlike any other mode of transportation. Whether admiring vintage classics or marveling at cutting-edge technology, the allure of cars lies in their ability to merge form and function, offering both practical utility and visceral excitement. In a world where mobility is key, cars symbolize not just transportation, but also aspiration, innovation, and the relentless pursuit of speed and style.`;
  return (
    <div className="App">
      
      

      {/* for both menu  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* this is for the blogs  */}
        <div style={{ width: "40%" }}>
          <Blog name="Iyad" blogType="music" content={firstBlog}></Blog>
          <Blog name="Iyad" blogType="Art" content={secoundBlog} />
          <Blog name="Iyad" blogType="cars" content={thirdBlog}></Blog>
        </div>
        {/* finish of the blogs  */}

        {/* this is for the side menu  */}
        <div style={{ width: "30%" }}>
          <SideMenu PersonName="Iyad" />
        </div>
        {/* finish of side menu  */}
      </div>
    </div>
  )
}

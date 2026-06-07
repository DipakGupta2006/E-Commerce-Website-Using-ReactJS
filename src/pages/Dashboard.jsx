import React from 'react'
import Slideimg from '../components/Slideimg'
import Card from '../components/Card'
import '../styles/Dashboard.css'
import Brands from '../components/Brands'

const Dashboard = () => {
  return (
    <div>
      <Slideimg />
      <div className="imgCards">

        <Card src="https://images.meesho.com/images/marketing/1744634654837.webp" desc="Ethnic Wear" />
        <Card src="https://images.meesho.com/images/marketing/1744634937295.webp" desc="Grocery" />
        <Card src="https://images.meesho.com/images/marketing/1744634725496.webp" desc="Western Dresses" />
        <Card src="https://images.meesho.com/images/marketing/1744634835018.webp" desc="Home Decor" />
        <Card src="https://images.meesho.com/images/marketing/1744634780426.webp" desc="Menswear" />
        {/* <Card src="https://images.meesho.com/images/marketing/1744634871107.webp" desc="Beauty"/>
        <Card src="https://images.meesho.com/images/marketing/1744634814643.webp" desc="Footwear"/>
        <Card src="https://images.meesho.com/images/marketing/1744634909968.webp" desc="Accessories"/> */}
      </div>

      <div className="imgCardsBrands">
        <div className="brandTrack">
          <Brands src="https://images.meesho.com/images/marketing/1744636599446.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159377598.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159363205.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159393231.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159302944.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159322237.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1744636558884.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159415385.webp" />

          <Brands src="https://images.meesho.com/images/marketing/1744636599446.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159377598.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159363205.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159393231.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159302944.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159322237.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1744636558884.webp" />
          <Brands src="https://images.meesho.com/images/marketing/1743159415385.webp" />
        </div>
      </div>

      <div className="BodyContainer">
        <aside className="BodyNav">
          <h3>Top categories</h3>
          <ul>
            <li><a href="#">Watches</a></li>
            <li><a href="#">Home & Kitchen</a></li>
            <li><a href="#">Health & Personal Care</a></li>
            <li><a href="#">Grocery & Gourmet</a></li>
            <li><a href="#">Pet Supplies</a></li>
            <li><a href="#">Shoes & Handbags</a></li>
            <li><a href="#">Movies & TV Shows</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Books</a></li>
            <li><a href="#">Computers & Accessories</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Baby Products</a></li>
            <li><a href="#">Car & Motorbike</a></li>
            <li><a href="#">Office Products</a></li>
            <li><a href="#">Garden & Outdoors</a></li>
            <li><a href="#">Musical Instruments</a></li>
          </ul>
        </aside>

        <section className="BodyContent">
          <div className="BodyPlaceholder">
            {/* <p>This area is reserved for page 2 content. Add your components here later.</p> */}
            
          </div>
        </section>
      </div>


    </div>
  )
}

export default Dashboard

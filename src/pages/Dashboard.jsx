import React from 'react'
import Slideimg from '../components/Slideimg'
import Card from '../components/Card'
import '../styles/Dashboard.css'
import Brands from '../components/Brands'
import Leftlink from '../components/Leftlink'
import Products from '../components/Products'
import Banner from '../components/Banner'
import Detailproduct from '../components/Detailproduct'
import '../styles/Detailproduct.css'
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'

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
        <Leftlink />

        <section className="BodyContent">
          <p style={{ textAlign: 'center', fontSize: '30px', color: 'olive', fontFamily: 'inherit' }}>Bestsellers</p>
          <div className="BodyPlaceholder">

            <Products src='https://m.media-amazon.com/images/I/81qXDWWCkdL._SY741_.jpg' off='67% off' time='Limited Time Deal' price='₹999.00' mrp=' ₹2,999.00' desc='Arayna Women’s Cotton Printed Kurta Set with Palazzo Pants and Dupatta | Ethnic Straight Kurta' />

            <Products src='https://m.media-amazon.com/images/I/61OyP6VX4cL._SY879_.jpg' off='64% off' time='Limited Time Deal' price='₹549' mrp='₹1999' desc="Bewakoof Women's Cotton Oversized Fit Half Sleeve Round Neck T-Shirt | Casual wear | Streetwear | Oversized Tshirt for Woman Cotton| Baggy" />


            <Products src='https://m.media-amazon.com/images/I/71U-W-OUKOL._SX679_.jpg' off='44% off' time='Limited Time Deal' price='₹999' mrp='₹3999' desc="Yashika Women's Trendy Banarasi Kanjivaram Navy Color Art Silk Saree with Blouse Material" />


            <Products src='https://m.media-amazon.com/images/I/61p0yiuehWL._SY879_.jpg' off='23% off' time='Limited Time Deal' price='₹449' mrp='₹999' desc="GLOSY Women Shirt || Shirt for Woman || Top for Women" />


            <Products src='https://m.media-amazon.com/images/I/61WM6IDaBPL._SX679_.jpg' off='4% off' time='Limited Time Deal' price='₹22,998' mrp='₹23,499' desc="iQOO Z10R 5G (Aquamarine, 8GB RAM, 128GB Storage) | 32MP 4K Selfie Camera | Quad-Curved AMOLED Display | Dimensity 7400 Processor with 750K+ AnTuTu" />


            <Products src='https://m.media-amazon.com/images/I/61T18EfkX0L._SX679_.jpg' off='28% off' time='Limited Time Deal' price='₹22,998 ' mrp='₹31,999' desc="OnePlus Nord CE6 Lite | 6GB+128GB | Hyper Black | Segment's Fastest Dimensity 7400 Apex Processor | 7000mAh Battery | Segment's Highest 144Hz Refresh Rate | 50MP Main Camera, 4K Video Recording" />


            <Products src='https://m.media-amazon.com/images/I/51wqZYWGr+L._SX522_.jpg' off='36% off' time='Limited Time Deal' price='₹299' mrp='₹459' desc="Simple Kind To Skin Refreshing Facial Wash 150 ml | 100% Soap-Free Facewash that doesn't dry out your skin| For All Skin Types" />


            <Products src='https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/r/k/8/-original-imahnhfqdtbfhvzg.jpeg?q=90' off='64% off' time='Limited Time Deal' price='₹2,159' mrp='₹5,999' desc="adidas Runsmart ST 2 M Running Shoes For Men (Black , 6)" />


            <Products src='https://images.meesho.com/images/products/398163636/prh0a_512.avif?width=512' off='60% off' time='Limited Time Deal' price='₹120' mrp='₹199' desc="Mars City Strokes Charming Eyes Liquid Eyeliner Smooth Glide Long-lasting 1 ml (Black)" />


            <Products src='https://images.meesho.com/images/products/335192230/kkqdo_512.avif?width=512' off='40% off' time='Limited Time Deal' price='₹549' mrp='₹1999' desc="NOY 4 Waterproof & Smudge-Proof Matte Liquid Lipstick Essentials #YN177" />


            <Products src='https://images.meesho.com/images/products/10202990/aznyl_512.avif?width=512' off='33% off' time='Limited Time Deal' price='₹749' mrp='₹2999' desc="Fancy Polycotton Double Bedsheet, size 90 x 90 inches, includes 2 pillow covers; and if ordering a Single Bedsheet, the size is 60 x 90 inches, includes 2 pillow cover." />


            <Products src='https://images.meesho.com/images/products/375088164/dbcvv_512.avif?width=512' off='45% off' time='Limited Time Deal' price='₹249' mrp='₹999' desc="Men's Printed Kurta Cotton (Only Kurta)" />


            <Products src='https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/l/u/z/-original-imahhnn9kkaj5wdn.jpeg?q=90' off='40% off' time='Limited Time Deal' price='₹749' mrp='₹1399' desc="Fire-Boltt Aero Shadow TWS Earbuds, RGB Lights Custom EQ Profile 50H Playtime Quad Mic ENC Bluetooth Headset (White, True Wireless)" />


            <Products src='https://m.media-amazon.com/images/I/41RCVsQkYDL._SY300_SX300_QL70_FMwebp_.jpg' off='10% off' time='Limited Time Deal' price='₹249' mrp='₹899' desc="Fire-Boltt Ninja Call Pro Plus Bluetooth Calling Smart Watch, 1.83″ HD Display, AI Voice Assistant, 120+ Sports Modes, IP67 Waterproof, SpO2 & Heart Rate Monitor Smartwatch for Men & Women - Black" />


            <Products src='https://m.media-amazon.com/images/I/41a4r0yyaPL._SY300_SX300_QL70_FMwebp_.jpg' off='4% off' time='Limited Time Deal' price='₹449' mrp='₹799' desc="WHOOP Peak – 12-Month Membership – 5.0 Health and Fitness Wearable – 24/7 Activity and Sleep Tracker with Heart Rate, HRV, Stress Monitor, Personalized Coaching, Healthspan – 14+ Days Battery Life" />


            <Products src='https://m.media-amazon.com/images/I/61vBCu8c5RL._SX679_.jpg' off='40% off' time='Limited Time Deal' price='₹1149' mrp='₹1999' desc="Borosil Carry Fresh Stainless Steel Lunchbox | 2 pc Round Container Set (280ml Each) | Tiffin for Office, School & College with Food Grade Steel | Leakproof & Dishwasher Safe | 1 Year Warranty" />


            <Products src='https://m.media-amazon.com/images/I/412BuKKTbcL._SY300_SX300_QL70_FMwebp_.jpg' off='50% off' time='Limited Time Deal' price='₹249' mrp='₹599' desc="Vedaka Organic Yellow Moong Dal 1Kg | Rich Source Of Protein | Cholesterol Free & No Added Additives" />


            <Products src='https://m.media-amazon.com/images/I/51gCi0F7EbL._SY300_SX300_QL70_FMwebp_.jpg' off='12% off' time='Limited Time Deal' price='₹249' mrp='₹399' desc="Saffola Muesli Choco Crunch with Flavour Pops, 700 gm | 15 in 1 Fruit and Nuts, Seeds, Millet & more | Cereals for breakfast rich in wholegrain, protein, fibre" />


            <Products src='https://m.media-amazon.com/images/I/41v0Us3a4eL._SX342_SY445_QL70_FMwebp_.jpg' off='33% off' time='Limited Time Deal' price='₹549' mrp='₹899' desc="LED Disco Ball Party Light with Remote Control, Disco Lights for Party, Sound Activated Stage Light for DJ Rave, Birthday, Wedding, Bar, Christmas" />


            <Products src='https://m.media-amazon.com/images/I/41ZspYJJ0OL._SY300_SX300_QL70_FMwebp_.jpg' off='23% off' time='Limited Time Deal' price='₹75549' mrp='₹84899' desc='ASUS TUF A15 (2025), AMD Ryzen 7 7445HS,RTX 3050-4GB,75W TGP,16GB DDR5(Upgradeable Upto 64GB) 512GB SSD,FHD,15.6",144Hz,RGB Keyboard,Windows 11,Graphite Black,2.3 Kg FA506NCG-HN199W, Gaming Laptop' />
          </div>
        </section>
      </div>


      <div id="BannerDashboard">
        <Banner />
        <div className="small-images">
          <img src="https://images.meesho.com/images/marketing/1744722796811.webp" id='img1' alt="" />
          <img src="https://images.meesho.com/images/marketing/1744635113661.webp" id='img2' alt="" />
          <img src="https://images.meesho.com/images/marketing/1744635139351.webp" id='img3' alt="" />
          <img src="https://images.meesho.com/images/marketing/1744635189897.webp" id='img4' alt="" />
        </div>

      </div>


      <div className="topRatedProduct">
        Top Rated Product
      </div>

      <div id="DetailProduct">

        <Detailproduct
          productImg="https://m.media-amazon.com/images/I/71TNGiuXngL._SX569_.jpg"
          imgWidth="500px"
          imgHeight="750px"
          imgBorder="1px"
          productName="LUXE VIBE Printed Chinon Silk Lehenga Choli with Sequins Embroidered Net Dupatta & Stitched Banglory Silk Blouse for Women"
          productRate="4.9"
          productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
          productBrought={
            <>
              <b>80+ bought</b> in past month
            </>
          }
          productOff="22% off"
          productPrice="2,999 /-"
          productMrp="₹3,999/-"
          productTax="Inclusive of all taxes"
          productEmi={
            <>
              <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
            </>
          }
          productOffer={
            <>
              <i class="fa-solid fa-tags"></i>&nbsp;Offer
            </>
          }

          productHighlight={
            <>
              <table>
                <tr>
                  <td><strong className='highlights'>Top Highlights</strong></td>
                </tr>

                <tr>
                  <td><strong>Weave type</strong></td>
                  <td>Embroidery	</td>
                </tr>

                <tr>
                  <td><strong>Pattern</strong></td>
                  <td>Embroidered,Printed</td>
                </tr>

                <tr>
                  <td><strong>Care instructions</strong></td>
                  <td>Hand Wash Only	</td>
                </tr>

                <tr>
                  <td><strong>Style</strong></td>
                  <td>Classic Indian,Traditional,Festive Wear,Party Wear,Wedding Wear	</td>
                </tr>

                <tr>
                  <td><strong>Occasion type	</strong></td>
                  <td>Weddings,Parties,Festival</td>
                </tr>

                <tr>
                  <td><strong>Neck style</strong></td>
                  <td>Round Neck	</td>
                </tr>


              </table>
            </>
          }

          productInfo={
            <>
              <div class="about-item">
                <h3>About this item</h3>
                <ul>
                  <li>
                    Premium Chinon Silk Printed Lehenga: Beautifully crafted lehenga made from Chinon silk with elegant printed design and soft silk inner lining for comfort.

                    <li>
                      Heavy Flared Silhouette: Features a 3.5-meter flair with canvas and can-can stitching, giving a rich, voluminous and graceful look.
                    </li>

                    <li>
                      Embroidered Net Layer Work: Lehenga enhanced with a soft net layer decorated with embroidery and sequins work for a festive finish.                  </li>
                  </li>

                  <li>
                    Adjustable Stitched Blouse: Comes with a fully stitched Banglory.
                  </li>

                </ul>
              </div>
            </>
          }

          productSmallImg={
            <>
              <img src="https://m.media-amazon.com/images/I/711oZ16TpCL._SX569_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/71oCQXHKraL._SX569_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/710YASXWB1L._SX569_.jpg" alt="" />
              <img src="https://m.media-amazon.com/images/I/71hXbcMq5iL._SX569_.jpg" alt="" />

            </>
          }
        />
      </div>


    </div>
  )
}

export default Dashboard

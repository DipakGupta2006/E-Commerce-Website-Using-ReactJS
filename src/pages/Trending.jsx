import React from 'react'
import '../styles/Dashboard.css'
import Heading from '../components/Heading'
import Leftlink from '../components/Leftlink'
import Products from '../components/Products'
import Trendproducts from '../components/Trendproducts'

const Trending = () => {
  return (
    <>
      <Heading heading='Cartify Trending Products' desc='Discover the latest trends in fashion, technology, and lifestyle. Stay ahead of the curve with our curated selection of trending products and insights.' />

      <div className="BodyContainer">
        <Leftlink />


        <section className="BodyContent">
          <p style={{ textAlign: 'center', fontSize: '30px', color: 'olive', fontFamily: 'inherit' }}>Trending Products</p>
          <div className="BodyPlaceholder">

            <Trendproducts
              prodImg="https://m.media-amazon.com/images/I/51LtyL79MkL._SX679_.jpg"
              prodHeight="500px"
              prodWidth="460px"
              prodName="Gap Men Hooded Sweatshirt"
              prodPrice="₹1,569 "
              prodOff="34% off"
              prodMrp="₹2999"
              prodInfo={
                <>
                  <div className="bottomContainer">
                    <div class="about-item">
                      <h3>About this item</h3>

                      <ul>
                        <li>
                          Lehenga Fabric: Silk | Lehenga Inner: Silk | Lehenga Work:
                          Sequence Embroidery Work | Lehenga Stitching Type:
                          Semi-Stitch Up To 44 with Canvas Pata
                        </li>

                        <li>
                          Choli Fabric: Silk | Choli Work:
                          Sequence Embroidery Work | Choli Size:
                          Unstitched Up To 44
                        </li>

                        <li>
                          DupataFabric : Net | DupataWork : Sequnce Embroidery Work With Lace Border
                        </li>
                        <li>
                          Care Instructions: Dry Clean Only

                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </section>
      </div>

    </>
  )
}

export default Trending

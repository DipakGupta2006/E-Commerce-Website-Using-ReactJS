import React from 'react'
import Heading from '../components/Heading'
import BestsellerImg from '../components/BestsellerImg'
import '../styles/Bestsellers.css'


const Bestsellers = () => {
  return (
    <div>

      <Heading heading="ABC Bestsellers" desc="Our most popular products based on sales. Updated frequently." />

      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/71vX56T0WPL._SY741_.jpg"
        productName="JIHU CULTURE Women's Orange Sequence Embroidery Work Silk Semi-Sttiched Lehenga Choli - JH290ORG"
        productRate="4.7"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>50+ bought</b> in past month
          </>
        }
        productOff="23% off"
        productPrice="₹3999/-"
        productMrp="₹19999/-"
        productTax="Inclusive of all taxes"
        productEmi={
          <>
            <b>EMI </b>starts at ₹99. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
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
                <td><strong>Care Instructions</strong></td>
                <td>Dry Clean Only</td>
              </tr>

              <tr>
                <td><strong>Style</strong></td>
                <td>Lehenga Choli Set</td>
              </tr>

              <tr>
                <td><strong>Neck Style</strong></td>
                <td>Round Neck</td>
              </tr>

              <tr>
                <td><strong>Occasion Type</strong></td>
                <td>Formal, Special Occasions</td>
              </tr>

              <tr>
                <td><strong>Sleeve Type</strong></td>
                <td>Short Sleeve</td>
              </tr>

              <tr>
                <td><strong>Country of Origin</strong></td>
                <td>India</td>
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
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/71Ys0Rffr0L._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71o5WIJzfcL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71gSGjFYmdL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71kQJQb8M6L._SY741_.jpg" alt="" />

          </>
        }
      />



    </div>
  )
}

export default Bestsellers

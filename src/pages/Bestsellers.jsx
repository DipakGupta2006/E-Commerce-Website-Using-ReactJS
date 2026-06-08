import React from 'react'
import Heading from '../components/Heading'
import BestsellerImg from '../components/BestsellerImg'
import '../styles/Bestsellers.css'


const Bestsellers = () => {
  return (
    <div>

      <Heading heading="Cartify Bestsellers" desc="Our most popular products based on sales. Updated frequently." />

      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/61TZ30G85wL._SY741_.jpg"
        imgWidth="500px"
        imgHeight="750px"
        imgBorder="1px"
        productName="TRENDMALLS Women's Georgette Embroidery work Lehenga Choli with Dupatta | Bridesmaid Wedding Lehenga Choli for women"
        productRate="4.3"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>30+ bought</b> in past month
          </>
        }
        productOff="22% off"
        productPrice="₹1999/-"
        productMrp="₹2999/-"
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
                <td><strong>Material composition</strong></td>
                <td>Georgette; Inner: Crepe</td>
              </tr>

              <tr>
                <td><strong>Weave type</strong></td>
                <td>Woven</td>
              </tr>

              <tr>
                <td><strong>Finish type</strong></td>
                <td>Semi-stitched</td>
              </tr>

              <tr>
                <td><strong>Occasion Type</strong></td>
                <td>Formal, Special Occasions</td>
              </tr>

              <tr>
                <td><strong>Style</strong></td>
                <td>Lehenga Choli with Dupatta</td>
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
                  Material: Lehenga,Choli Blouse, Dupatta: Georgette; Inner: Crepe
                </li>

                <li>
                  Color:Lehenga,Choli Blouse,Dupatta: OffWhite
                </li>

                <li>
                  Measurements: Lehenga Flair:4.8 mt, Height:43 in; Waist:42 in || Choli Blouse: 0.80 mt, Dupatta Length: 2.5 mt
                </li>
                <li>
                  Work: Embroidery Sequin work
                </li>
                <li>
                  Package Contains: 1 Stitch Lehenga, Unstitch Choli Blouse, Dupatta
                </li>
              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/81Uk+B374EL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71oLPwCh06L._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81zEh90PhGL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71MlxKjAkSL._SY741_.jpg" alt="" />

          </>
        }
      />

      <div className="line" style={{marginTop:"35px"}}></div>


      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/41lljoZVf0L._SY300_SX300_QL70_FMwebp_.jpg"
        imgWidth="500px"
        imgHeight="750px"
        imgBorder="1px"
        productName="Samsung Galaxy S26 Ultra 5G (Cobalt Violet, 12GB RAM, 256GB Storage) with Built-in Privacy Display, AI Phone, Photo Assist, Creative Studio, 200MP Camera, 5000mAh Battery and Snapdragon 8 Elite Gen 5"
        productRate="4.9"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>80+ bought</b> in past month
          </>
        }
        productOff="22% off"
        productPrice="1,30,999 /-"
        productMrp="₹1,39,999/-"
        productTax="Inclusive of all taxes"
        productEmi={
          <>
            <b>EMI </b>starts at ₹829. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
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
                <td><strong>Brand	</strong></td>
                <td>Samsung</td>
              </tr>

              <tr>
                <td><strong>Operating System</strong></td>
                <td>Android 16</td>
              </tr>

              <tr>
                <td><strong>RAM Memory Installed Size	</strong></td>
                <td>12 GB</td>
              </tr>

              <tr>
                <td><strong>CPU Model	</strong></td>
                <td>Snapdragon</td>
              </tr>

              <tr>
                <td><strong>CPU Speed	</strong></td>
                <td>4.74 GHz</td>
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
                  Built-in Privacy Display - Say hi to world's first Privacy Display on mobile.
                </li>

                <li>
                  Agentic AI Experience - Enjoy the pinnacle of mobile AI innovation with the easiest and effortless AI phone built to simplify everyday interactions and inspire confidence as the all-new Galaxy AI.
                </li>

                <li>
                  200MP High Resolution Camera - Capture bright, detailed videos.
                </li>

              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/71lzDDoMx8L._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71RBZZ6VkvL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/61BqjcsSH3L._SL1000_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/61YILVmenZL._SL1500_.jpg" alt="" />

          </>
        }
      />

      <div className="line" style={{marginTop:"35px"}}></div>


      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/81qjm0OlzmS._SY741_.jpg"
        imgWidth="500px"
        imgHeight="730px"
        imgBorder="1px"
        productName="Mens Ethnic Wear Indo Western Set"
        productRate="4.0"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>45+ bought</b> in past month
          </>
        }
        productOff="28% off"
        productPrice="₹1599/-"
        productMrp="₹2399/-"
        productTax="Inclusive of all taxes"
        productEmi={
          <>
            <b>EMI </b>starts at ₹59. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
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
                <td><strong>Material composition</strong></td>
                <td>Cotton Blend</td>
              </tr>

              <tr>
                <td><strong>Length</strong></td>
                <td>Knee Length</td>
              </tr>

              <tr>
                <td><strong>Sleeve type</strong></td>
                <td>Full Sleeve</td>
              </tr>

              <tr>
                <td><strong>Neck style</strong></td>
                <td>Round Neck</td>
              </tr>

              <tr>
                <td><strong>Style</strong></td>
                <td>Western</td>
              </tr>
              <tr>
                <td><strong>Item Dimensions LxWxH</strong></td>
                <td>33 x 30 x 6 Centimeters</td>
              </tr>

              <tr>
                <td><strong>Material type</strong></td>
                <td>Cotton</td>
              </tr>
              <tr>
                <td><strong>Generic Name</strong></td>
                <td>Mens Indo Western Set</td>
              </tr>
              <tr>
                <td><strong>Manufacturer</strong></td>
                <td>N.B.F Fashion</td>
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
                  Fabric - Cotton Blend; Pattern - Floral
                </li>

                <li>
                  Collar / Neck - Round Neck; Sleeve - Long Sleeve
                </li>

                <li>
                  Package Content - Sherwani
                </li>
                <li>
                  Work: Embroidery Sequin work
                </li>
                <li>
                  Item Length Description: Knee-Long
                </li>
              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/91SUFWgt-yS._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81LDKVyPygS._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/91LD0V-YAQS._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81jh302VMcS._SY741_.jpg" alt="" />

          </>
        }
      />

      <div className="line" style={{marginTop:"35px"}}></div>

      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/717ZO6Zz3KL._SX679_.jpg"
        imgWidth="500px"
        imgHeight="730px"
        imgBorder="1px"
        productName="Sherwani Dupatta Stole for Men | Maroon & Gold Traditional Wedding Chunni Dupatta for Kurta Pajama, Festival & Special Occasions | 2.25 Meters | 1 Piece"
        productRate="4.6"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>55+ bought</b> in past month
          </>
        }
        productOff="48% off"
        productPrice="₹2599/-"
        productMrp="₹2899/-"
        productTax="Inclusive of all taxes"
        productEmi={
          <>
            <b>EMI </b>starts at ₹159. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
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
                <td><strong>Care instructions</strong></td>
                <td>Hand Wash Only</td>
              </tr>

              <tr>
                <td><strong>Style</strong></td>
                <td>Sherwani dupatta stole for men</td>
              </tr>

              <tr>
                <td><strong>Pattern</strong></td>
                <td>Solid</td>
              </tr>

              <tr>
                <td><strong>Neck style</strong></td>
                <td>Round Neck</td>
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
                  ✔ Cotton Blend Fabric: Crafted from soft woven cotton-blend material that feels smooth on the skin and offers breathable, all-day comfort.

                </li>

                <li>
                  ✔ Traditional Ethnic Design: Rich maroon and gold color combination with classic Indian woven patterns adds elegance to festive and wedding outfits.
                </li>

                <li>
                  ✔ Weeding & Festival Wear: Ideal ethnic stole for weddings, puja, Diwali, Navratri, religious ceremonies, cultural events, and traditional functions.
                </li>

              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/71HIstKlUJL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71XyTCxr6nL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/816AIPzHjKL._SX679_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/710kiwU9haL._SX679_.jpg" alt="" />

          </>
        }
      />

      <div className="line" style={{marginTop:"35px"}}></div>


      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/81O1uCPS8lL._SX522_.jpg"
        imgWidth="500px"
        imgHeight="730px"
        imgBorder="1px"
        productName="Lenovo Legion 5 2025 AMD Ryzen 7 260 | NVIDIA RTX 5050 8GB (16GB RAM/1TB SSD/WUXGA IPS/165Hz/15(39.6cm)/Windows 11/Office 2024+AI Now/Black/2.5Kg), 83M00073IN AI Powered Gaming Laptop"
        productRate="4.9"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>55+ bought</b> in past month
          </>
        }
        productOff="22% off"
        productPrice="₹1,49,990 /-"
        productMrp="₹1,89,990 /-"
        productTax="Inclusive of all taxes"
        productEmi={
          <>
            <b>EMI </b>starts at ₹959. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
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
                <td><strong>Brand	</strong></td>
                <td>Lenovo</td>
              </tr>

              <tr>
                <td><strong>Screen Size	</strong></td>
                <td>15 Inches</td>
              </tr>

              <tr>
                <td><strong>Model Name	</strong></td>
                <td>Legion 5</td>
              </tr>

              <tr>
                <td><strong>Colour</strong></td>
                <td>Eclipse Black</td>
              </tr>
              <tr>
                <td><strong>RAM Memory Installed Size	</strong></td>
                <td>16 GB</td>
              </tr>
              <tr>
                <td><strong>Operating System</strong></td>
                <td>Windows 11 Home	</td>
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
                  Processor: AMD Ryzen 7 260 (8C / 16T, 3.8 / 5.1GHz, 8MB L2 / 16MB L3)

                </li>

                <li>
                  Display: 16" WUXGA (1920x1200) IPS Technology | 165Hz Refresh Rate | 100% sRGB |Brightness: 300Nits | Dolby Vision, GSYNC | Low Blue Light
                </li>


              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/71sVPhmHEqL._SX522_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71XuqsVyKFL._SX522_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71XuqsVyKFL._SX522_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71Xdbjxt1BL._SL1500_.jpg" alt="" />

          </>
        }
      />

      <div className="line" style={{marginTop:"35px"}}></div>


      <BestsellerImg
        productImg="https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/y/h/2/-original-imahmgpjz5dkhpu5.jpeg?q=90"
        imgWidth="500px"
        imgHeight="710px"
        imgBorder="1px"
        productName="adidas Flexion ST M Running Shoes For Men (Black , 7)"
        productRate="4.9"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>55+ bought</b> in past month
          </>
        }
        productOff="57% off"
        productPrice="₹2,190 /-"
        productMrp="₹8,990 /-"
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
                <td><strong>Outer material </strong></td>
                <td>Mesh</td>
              </tr>

              <tr>
                <td><strong>Occasion </strong></td>
                <td>Sports</td>
              </tr>

              <tr>
                <td><strong>Brand</strong></td>
                <td>ADIDAS</td>
              </tr>

              <tr>
                <td><strong>Colour</strong></td>
                <td>CBLACK/OWHITE/LUCLEM</td>
              </tr>
              <tr>
                <td><strong>Model name</strong></td>
                <td>Flexion ST M</td>
              </tr>
              <tr>
                <td><strong>Type For Sports</strong></td>
                <td>Running Shoes</td>
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
                  Care instructions - Clean with dry slightly wet (warm) cloth, don't use machine

                </li>

                <li>
                  Upper Pttern - Printed
                </li>

                <li>Tip shape - Round</li>
                <li>Weight - 950 g (per single Shoe) - Weight of the product may vary depending on size.</li>
              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/8/h/z/-original-imahmgpjayg9n2uq.jpeg?q=90" alt="" />
            <img src="https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/d/o/i/-original-imahmgpjaevszmjy.jpeg?q=90" alt="" />
            <img src="https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/9/m/c/-original-imahmgpjsjppaz8d.jpeg?q=90" alt="" />
            <img src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/shoe/y/h/2/-original-imahmgpjz5dkhpu5.jpeg?q=90" alt="" />

          </>
        }
      />

      <div className="line" style={{marginTop:"35px"}}></div>


      <BestsellerImg
        productImg="https://m.media-amazon.com/images/I/61QPfwWu-JL._SY879_.jpg"
        imgWidth="500px"
        imgHeight="750px"
        imgBorder="1px"
        productName="Women’s Shirt | Premium Chiffon Allover Print Sleeveless Shirts for Casual & Office Wear | Stylish Summer Button-Down Shirt for Girls & Women"
        productRate="4.9"
        productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
        productBrought={
          <>
            <b>25+ bought</b> in past month
          </>
        }
        productOff="57% off"
        productPrice="₹790 /-"
        productMrp="₹1,990 /-"
        productTax="Inclusive of all taxes"
        productEmi={
          <>
            <b>EMI </b>starts at ₹29. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
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
                <td><strong>Material composition</strong></td>
                <td>Chiffon</td>
              </tr>

              <tr>
                <td><strong>Fit type</strong></td>
                <td>Regular Fit</td>
              </tr>

              <tr>
                <td><strong>Sleeve type</strong></td>
                <td>Short Sleeve</td>
              </tr>

              <tr>
                <td><strong>StyleModern</strong></td>
                <td>Modern</td>
              </tr>
              <tr>
                <td><strong>Closure type</strong></td>
                <td>Button</td>
              </tr>
              <tr>
                <td><strong>Care instructions</strong></td>
                <td>Machine Wash</td>
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
                  🌸 Premium Chiffon Fabric – Made with soft, airy and breathable chiffon that feels ultra-light and comfortable, perfect for summer & daily wear.
                </li>

                <li>
                  ✨ Double Layer Ruffle Design – Stylish ruffles on the shoulder and front panel give an elegant, feminine and trendy look.
                </li>

                <li>
                  🔘 Button-Down Front – Easy-to-wear top with smooth buttons and a neat neckline for a polished western finish.
                </li>
              </ul>
            </div>
          </>
        }

        productSmallImg={
          <>
            <img src="https://m.media-amazon.com/images/I/81okArZZExL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71zI4bGqGuL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81o2fHckeOL._SY741_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71P95us0-gL._SY741_.jpg" alt="" />

          </>
        }
      />


    </div>
  )
}

export default Bestsellers

import React from 'react'
import Navbar from './Navbar'

const ViewPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">SL No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Address</th>
                    <th scope="col">subcription date</th>
                    <th scope="col">Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td> Vijetha  </td>
                    <td>99995xxxxx</td>
                    <td>jjk.123</td>
                    <td>16/07/2019</td>
                    <td>JL@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Divya</td>
                    <td>8845xxxxx</td>
                    <td>NSP.123</td>
                    <td>7/08/2017</td>
                    <td>NTP@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Aashique </td>
                    <td>7775xxxxx</td>
                    <td>OP.123</td>
                    <td>1/06/2017</td>
                    <td>OON@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>shaji</td>
                    <td>6665xxxxx</td>
                    <td>BLC.123.123</td>
                    <td>4/012/2016</td>
                    <td>AHTC@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Gokul</td>
                    <td>5355xxxxx</td>
                    <td>DBZ.123</td>
                    <td>5/04/2009</td>
                    <td>TEZ@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Anshul</td>
                    <td>744xxxxxx</td>
                    <td>COTE.123</td>
                    <td>29/04/2015</td>
                    <td>FSk@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>abin</td>
                    <td>383xxxxxxx</td>
                    <td>BH.123</td>
                    <td>1/1/2025</td>
                    <td>FVTR@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>mini</td>
                    <td>25672xxxxx</td>
                    <td>SLVL.123</td>
                    <td>4/02/2024</td>
                    <td>DTTKOL@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>riya</td>
                    <td>11145xxxxx</td>
                    <td>HM.123</td>
                    <td>1/05/2023</td>
                    <td>jGTk@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>mahi</td>
                    <td>00123xxxxx</td>
                    <td>TR.123</td>
                    <td>18/06/2009</td>
                    <td>TGH@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPage

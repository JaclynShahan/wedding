import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    return (
    <div>
     <table>
       <tbody>
       <br></br>
         <tr>
         <th>Apparel</th>
           <tr><Checkbox onChange={this.onChange} />Wedding Gown <input /></tr>
           <tr><Checkbox onChange={this.onChange} />Bridal Shoes <input /></tr>   
           <tr><Checkbox onChange={this.onChange} />Bridal Veil <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Bridesmaid Dresses <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Bridesmaid Shoes <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Grooms Tux <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Groomsmen Tuxes <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Garters <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Reception Dress <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Flower Girl Dress <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Ring Bearer Outfit <input /></tr>  
          </tr>
           <br></br>
         <tr>
           <th>Flowers</th>
           <tr><Checkbox onChange={this.onChange} />Bride Bouquet <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Bridesmaid Bouquets <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Reception Centerpieces <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Altarpiece <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Flower Girl Flowers <input /></tr>  
         </tr>
         <br></br>
           <tr>
             <th>Stationery</th>
             <tr><Checkbox onChange={this.onChange} />Invitations <input /></tr>
             <tr><Checkbox onChange={this.onChange} />Save the Date Cards <input /></tr> 
             <tr><Checkbox onChange={this.onChange} />Postage <input /></tr> 
             <tr><Checkbox onChange={this.onChange} />Calligrapher <input /></tr>
             <tr><Checkbox onChange={this.onChange} />Thank You Notes <input /></tr>
             <tr><Checkbox onChange={this.onChange} />Address Labels <input /></tr>          
           </tr>
           <br></br>
           <tr>
             <th>Reception/Ceremony</th>
             <tr><Checkbox onChange={this.onChange} />Location Fee <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Caterer <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Music <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Alcohol/Beverages <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Wedding Cake <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Table Decorations <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Tables <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Chairs <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Dishes/Cups <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Napkins/Silerware <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Guestbook <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Parking <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Gratuity <input /></tr>  
           </tr>
           <br></br>
           <tr>
            <th>Miscellaneous</th>
            <tr><Checkbox onChange={this.onChange} />Marraige License <input /></tr>  
            <tr><Checkbox onChange={this.onChange} />Hairdresser <input /></tr>  
            <tr><Checkbox onChange={this.onChange} />Manicure/Pedicure <input /></tr>  
            <tr><Checkbox onChange={this.onChange} />Makeup <input /></tr>
            <tr><Checkbox onChange={this.onChange} />Flower Girl Basket <input /></tr>  
            <tr><Checkbox onChange={this.onChange} />Ring Bearer Pillow <input /></tr> 
            <tr><Checkbox onChange={this.onChange} />Wedding Bands <input /></tr>  
           </tr>
           <br></br>
           <tr>
             <th>Photography</th>
           <tr><Checkbox onChange={this.onChange} />Enagement Photos <input /></tr>
           <tr><Checkbox onChange={this.onChange} />Photorapher <input /></tr>  
           <tr><Checkbox onChange={this.onChange} />Disposable Cameras <input /></tr>   
           </tr>
           <br></br>
           <tr>
             <th>Honeymoon</th>
             <tr><Checkbox onChange={this.onChange} />Airfare <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Hotels <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Rental Car <input /></tr>  
             <tr><Checkbox onChange={this.onChange} />Entertainment <input /></tr> 
             <tr><Checkbox onChange={this.onChange} />Vacation Clothing/Toiletries <input /></tr>   
           </tr>
       </tbody>
     </table>
    
    </div>
  );
  }
}

export default App;

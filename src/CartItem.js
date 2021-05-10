import React from 'react';


class CartItem extends React.Component{

    constructor () {
      
        super();
        this.state = {
            
            price : 199,
            title : 'Mobile',
            qty : 1,
            img : '',
            

        }
      //  this.increment = this.increment.bind(this);


    }
    increment = () => {
        // console.log('Quantity' + this.state.qty );
        // this.state.qty +=1;

        // setstate form 1 

        // this.setState({

        //     qty : this.state.qty+1

        // });

        // setState form 2 if previous state is required use this 

        this.setState((prevState) =>{

            return {
                qty:prevState.qty+1
            }
        })

       

     }

     decrement = () => {

        this.setState((prevState) => {

            return{
                qty:prevState.qty-1,
                
            }

        })

     }

    render(){
        const {title,price,qty}= this.state;

      return (  
          
        <div className="cart-item">
         
            <div className = "left-block">

                <img style={styles.image}/>

            </div>
            <div className = "right-block">

                <div style = {{fontSize:25}}>{title}</div>
                <div style = {{color:'black'}}>Rs {price}</div>
                <div style = {{color:'black'}}>Qty: {qty}</div>
                <div  className = "cart-item-actions">
                        {/* Buttons */ }
                        <img 
                         alt = "increase" 
                         className = "action-icons"
                         src ="https://www.flaticon.com/svg/vstatic/svg/1828/1828919.svg?token=exp=1620489393~hmac=ef15a920a2e6ec825cd34e7f80aaba28"
                         onClick = {this.increment}
                         />
                        <img 
                         alt = "decrease"
                        className = "action-icons" 
                        src ="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620489432~hmac=49bb5fcf154651e9310df30183c42e2c"
                        onClick = {this.decrement}
                        />
                        <img  
                        alt = "delete" 
                        className = "action-icons" 
                        src ="https://as1.ftcdn.net/jpg/00/65/77/26/500_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg"
                        onClick = {() => {}}
                        />
                </div>

            </div>

        </div>
      );
    }

}
const styles = {
    
    image :{
        height:110,
        width:110,
        borderRadius:4,
        background:'grey',
    }

}

export  default CartItem;
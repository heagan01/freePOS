import React, { useState } from "react";
import "./App.css";

// let matcha = 0;
// let itemsThingy = [];
// let count = {
//   matcha: 0,
//   taro: 0,
//   cookie: 0,
//   americano: 0,
//   vanilla: 0,
//   aren: 0,
//   taroL: 0,
//   pandan: 0,
//   rum: 0,
//   mocha: 0,
// };

// function Item(props) {
//   return [
//     <div className={props.color + ' item'}  onClick={() => setMatcha((item) => item + 1)}><h1>{props.name}</h1></div>
//   ]
// }

// function addOne(x) {
//   // add 1 to a variable
//   count[x] += 1;

//   if (itemsThingy.includes(x) == false) {
//     itemsThingy.push(x);
//     console.log("item " + x + " has been added");
//   } else {
//     console.log("item " + x + " has already existed!");
//   }
//   console.log(count[x], x, itemsThingy);
//   document.getElementsByClassName("preview").innerHTML =
//     itemsThingy[0] + count["matcha"];
//   var i = 0;
// }

let price = 0

const data250ml = [
    { color: "brown", name: "Americano", id: "americano", price: 18000 },
    { color: "brown", name: "Aren Latte", id: "aren", price: 18000 },
    { color: "grey", name: "Vanilla Latte", id: "vanilla", price: 18000 },
    { color: "green", name: "Pandan Latte", id: "pandan", price: 18000 },
    { color: "purple", name: "Taro Latte", id: "taro", price: 18000 },
    { color: "brown", name: "Rum Coffee", id: "rum", price: 18000 },
    { color: "brown", name: "Dolce Coffee", id: "dolce", price: 18000 },
    { color: "brown", name: "Mochacino", id: "mocha", price: 18000 },
    { color: "green", name: "Creamy Matcha", id: "matcha", price: 18000 },
    { color: "purple", name: "Taro Frappé", id: "taro", price: 18000 },
    { color: "brown", name: "Choco Signature", id: "choco", price: 18000 },
    { color: "brown", name: "Brown Sugar MT", id: "milktea", price: 18000 },
    { color: "yellow", name: "Mango Tea", id: "mango", price: 12000},
  ];

const data500ml = [
  { color: "brown", name: "Americano", id: "americano", price: 35000 },
  { color: "brown", name: "Aren Latte", id: "aren", price: 35000 },
  { color: "grey", name: "Vanilla Latte", id: "vanilla", price: 35000 },
  { color: "green", name: "Pandan Latte", id: "pandan", price: 35000 },
  { color: "purple", name: "Taro Latte", id: "taro", price: 35000 },
  { color: "brown", name: "Rum Coffee", id: "rum", price: 35000 },
  { color: "brown", name: "Dolce Coffee", id: "dolce", price: 35000 },
  { color: "brown", name: "Mochacino", id: "mocha", price: 35000 },
  { color: "green", name: "Creamy Matcha", id: "matcha", price: 35000 },
  { color: "purple", name: "Taro Frappé", id: "taro", price: 35000 },
  { color: "brown", name: "Choco Signature", id: "choco", price: 35000 },
  { color: "brown", name: "Brown Sugar MT", id: "milktea", price: 35000 },
  { color: "yellow", name: "Mango Tea", id: "mango", price: 20000},
]

function Item(props) {
  return (
    <div
      className={props.color + " item"}
      onMouseEnter={() => console.log("I have been hovered")}
    >
      <h1>{props.name}</h1>
      <input
        onChange={props.add_item}
        id={props.name}
        className="input250ml"
        placeholder="250ml"
        type="number"
      ></input>
      <input
        onChange={props.add_item}
        id={props.name + "500ml"}
        className="input500ml"
        placeholder="500ml"
        type="number"
      ></input>
    </div>
  );
}

class SignUpDialog extends React.Component {
  constructor(eprops) {
    super(eprops);
    this.calculate = this.calculateR.bind(this);
    // This may be the most inefficient code I've ever written
    this.addItem = this.addItem.bind(this);
    this.state = {
      americano: 0,
      aren: 0,
      vanilla: 0,
      pandan: 0,
      taroL: 0,
      rum: 0,
      dolce: 0,
      mocha: 0,
      discount: 0,
      matcha: 0,
      cookie: 0,
      taro: 0,
      choco: 0,
      milktea: 0,
      mango: 0,
    };

    this.state500 = {
      americano: 0,
      aren: 0,
      vanilla: 0,
      pandan: 0,
      taroL: 0,
      rum: 0,
      dolce: 0,
      mocha: 0,
      matcha: 0,
      cookie: 0,
      taro: 0,
      choco: 0,
      milktea: 0,
      mango: 0,
    };
  }

  render() {
    return [
      <div className="products">

          <div className='gray item'><h1>Discount</h1><input className='input250ml' id='Discount' onChange={this.addItem} placeholder='Discount'></input></div>
          
          {data250ml.map(item => (
              <Item color={item.color} name={item.name} add_item={this.addItem}/>
          ))}

      </div>,
      <div className="preview">
        {this.state.americano != 0 && "Americano: " + this.state.americano}
        {this.state.americano != 0 && <br />}
        {this.state.aren != 0 && "Aren Latte: " + this.state.aren}
        {this.state.aren != 0 && <br />}
        {this.state.vanilla != 0 && "Vanilla Latte: " + this.state.vanilla}
        {this.state.vanilla != 0 && <br />}
        {this.state.pandan != 0 && "Pandan Latte: " + this.state.pandan}
        {this.state.pandan != 0 && <br />}
        {this.state.taroL != 0 && "Taro Latte: " + this.state.taroL}
        {this.state.taroL != 0 && <br />}
        {this.state.rum != 0 && "Rum Coffee: " + this.state.rum}
        {this.state.rum != 0 && <br />}
        {this.state.dolce != 0 && "Dolce Coffee: " + this.state.dolce}
        {this.state.dolce != 0 && <br />}
        {this.state.mocha != 0 && "Mochacino: " + this.state.mocha}
        {this.state.mocha != 0 && <br />}
        {this.state.matcha != 0 && "Creamy Matcha: " + this.state.matcha}
        {this.state.matcha != 0 && <br />}
        {this.state.cookie != 0 && "Cookies N Cream: " + this.state.cookie}
        {this.state.cookie != 0 && <br />}
        {this.state.taro != 0 && "Taro Frappé: " + this.state.taro}
        {this.state.taro != 0 && <br />}
        {this.state.choco != 0 && "Choco Signature: " + this.state.choco}
        {this.state.choco != 0 && <br />}
        {this.state.milktea != 0 && "Brown Sugar Milk Tea: " + this.state.milktea}
        {this.state.milktea != 0 && <br />}
        {this.state.mango != 0 && "Mango Tea: " + this.state.mango}
        {this.state.mango != 0 && <br />}
      </div>,
      <svg viewBox="0 0 200 200" className='blob' xmlns="http://www.w3.org/2000/svg">
        <path className='path' fill="#FF0066" d="M36.3,-52.6C45.5,-43.3,50.3,-30.6,56.7,-17C63.1,-3.4,71,11.1,69.8,25C68.5,38.9,58,52.1,44.8,56.4C31.6,60.6,15.8,56,2.1,53.1C-11.6,50.1,-23.1,48.9,-37.2,44.9C-51.2,40.9,-67.8,34.2,-73.9,22.4C-80.1,10.5,-75.7,-6.3,-69.8,-22C-63.8,-37.7,-56.1,-52.2,-44.2,-60.7C-32.3,-69.1,-16.2,-71.5,-1.3,-69.7C13.5,-67.9,27.1,-61.9,36.3,-52.6Z" transform="translate(100 100)" />
      </svg>,
    ];
  }

  // this is the function to calculate all of the prices
  calculateR(e) {
    price = this.state.americano * data250ml[0].price + this.state.aren * data250ml[0].price + this.state.vanilla * data250ml[0].price + this.state.pandan * data250ml[0].price + this.state.taroL * data250ml[0].price + this.state.rum * data250ml[0].price + this.state.dolce * data250ml[0].price + this.state.mocha * data250ml[0].price + this.state.matcha * data250ml[0].price + this.state.cookie * data250ml[0].price + this.state.taro * data250ml[0].price + this.state.choco * data250ml[0].price + this.state.milktea * data250ml[0].price + this.state.mango * data250ml[12].price + this.state500.americano * data500ml[0].price + this.state500.aren * data500ml[0].price + this.state500.vanilla * data500ml[0].price + this.state500.pandan * data500ml[0].price + this.state500.taroL * data500ml[0].price + this.state500.rum * data500ml[0].price + this.state500.dolce * data500ml[0].price + this.state500.mocha * data500ml[0].price + this.state500.matcha * data500ml[0].price + this.state500.cookie * data500ml[0].price + this.state500.taro * data500ml[0].price + this.state500.choco * data500ml[0].price + this.state500.milktea * data500ml[0].price + this.state500.mango * data500ml[12].price - this.state.discount
    console.log(data500ml[12].price)
    console.log(price)
  }

  // new code
  addItem=async e =>{
    if (e.target.value >= 0) {
      if (e.target.id == "Americano") {
        await this.setState({ americano: e.target.value });
      } else if (e.target.id == "Aren Latte") {
        await this.setState({ aren: e.target.value });
      } else if (e.target.id == "Vanilla Latte") {
        await this.setState({ vanilla: e.target.value });
      } else if (e.target.id == "Pandan Latte") {
        await this.setState({ pandan: e.target.value });
      } else if (e.target.id == "Taro Latte") {
        await this.setState({ taroL: e.target.value });
      } else if (e.target.id == "Rum Coffee") {
        await this.setState({ rum: e.target.value });
      } else if (e.target.id == "Dolce Coffee") {
        await this.setState({ dolce: e.target.value });
      } else if (e.target.id == "Mochacino") {
        await this.setState({ mochacino: e.target.value });
      } else if (e.target.id == "Creamy Matcha") {
        await this.setState({ matcha: e.target.value });
      } else if (e.target.id == "Cookies n Cream") {
        await this.setState({ cookie: e.target.value });
      } else if (e.target.id == "Taro Frappé") {
        await this.setState({ taro: e.target.value });
      } else if (e.target.id == "Choco Signature") {
        await this.setState({ choco: e.target.value });
      } else if (e.target.id == "Brown Sugar MT") {
        await this.setState({ milktea: e.target.value });
      } else if (e.target.id == "Mango Tea") {
        await this.setState({ mango: e.target.value });
      } else if (e.target.id == 'Discount') {
        await this.setState({ discount: e.target.value})
      }

      if (e.target.id == "Americano500ml") {
        this.state500.americano = e.target.value
      } else if (e.target.id == "Aren Latte500ml") {
        this.state500.aren = e.target.value
      } else if (e.target.id == "Vanilla Latte500ml") {
        this.state500.vanilla = e.target.value
      } else if (e.target.id == "Pandan Latte500ml") {
        this.state500.pandan = e.target.value
      } else if (e.target.id == "Taro Latte500ml") {
        this.state500.taroL = e.target.value
      } else if (e.target.id == "Rum Coffee500ml") {
        this.state500.rum = e.target.value
      } else if (e.target.id == "Dolce Coffee500ml") {
        this.state500.dolce = e.target.value
      } else if (e.target.id == "Mochacino500ml") {
        this.state500.mochacino = e.target.value
      } else if (e.target.id == "Creamy Matcha500ml") {
        this.state500.matcha = e.target.value
      } else if (e.target.id == "Cookies n Cream500ml") {
        this.state500.cookie = e.target.value
      } else if (e.target.id == "Taro Frappé500ml") {
        this.state500.taro = e.target.value
      } else if (e.target.id == "Choco Signature500ml") {
        this.state500.choco = e.target.value
      } else if (e.target.id == "Brown Sugar MT500ml") {
        this.state500.milktea = e.target.value
      } else if (e.target.id == "Mango Tea500ml") {
        this.state500.mango = e.target.value
      }
      this.calculate()
    } else {
      var alertDialogue = ['Woi!! Mana ada customer yg mau -1, mau rugi kau?', 'Cie yg mau ngasih duit gratis', 'Anda terlalu percaya diri', 'Jualan yang bener...', 'Seriously? -_-']
      alert(alertDialogue[Math.floor((Math.random() * 5))]);
      e.target.value = "";
    }
    // console.log(e.target.id, e.target.value); mainly for debug purposes
  }
}

export default SignUpDialog;

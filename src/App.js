import React from "react";
import "./App.css";

let width = 0
let price = 0;
var nf = new Intl.NumberFormat();

const data250ml = [
  { color: "brown", name: "Americano", id: "americano", price: 18000 },
  { color: "grey", name: "Cookies n Cream", id: "cookie", price: 18000 },
  { color: "brown", name: "Aren Latte", id: "aren", price: 18000 },
  { color: "green", name: "Pandan Latte", id: "pandan", price: 18000 },
  { color: "purple", name: "Taro Latte", id: "taro", price: 18000 },
  { color: "brown", name: "Rum Coffee", id: "rum", price: 18000 },
  { color: "brown", name: "Dolce Coffee", id: "dolce", price: 18000 },
  { color: "brown", name: "Mochacino", id: "mocha", price: 18000 },
  { color: "green", name: "Creamy Matcha", id: "matcha", price: 18000 },
  { color: "purple", name: "Taro Frappé", id: "taro", price: 18000 },
  { color: "brown", name: "Choco Signature", id: "choco", price: 18000 },
  { color: "brown", name: "Brown Sugar MT", id: "milktea", price: 18000 },
  { color: "yellow", name: "Mango tea", id: "mango", price: 12000 },
];

const data500ml = [
  { color: "brown", name: "Americano", id: "americano", price: 35000 },
  { color: "grey", name: "Cookies n Cream", id: "cookie", price: 35000 },
  { color: "brown", name: "Aren Latte", id: "aren", price: 35000 },
  { color: "green", name: "Pandan Latte", id: "pandan", price: 35000 },
  { color: "purple", name: "Taro Latte", id: "taro", price: 35000 },
  { color: "brown", name: "Rum Coffee", id: "rum", price: 35000 },
  { color: "brown", name: "Dolce Coffee", id: "dolce", price: 35000 },
  { color: "brown", name: "Mochacino", id: "mocha", price: 35000 },
  { color: "green", name: "Creamy Matcha", id: "matcha", price: 35000 },
  { color: "purple", name: "Taro Frappé", id: "taro", price: 35000 },
  { color: "brown", name: "Choco Signature", id: "choco", price: 35000 },
  { color: "brown", name: "Brown Sugar MT", id: "milktea", price: 35000 },
  { color: "yellow", name: "Mango tea", id: "mango", price: 20000 },
];

const getName = (id, type) => {
  //console.log(id);
  if (type == 250) {
    let drink = 0;

    if (data250ml.filter((item) => item.id == id).length > 0) {
      drink = data250ml.filter((item) => item.id == id)[0].name;
    }
    return drink
  } else {
    let drink = 0;

    if (data500ml.filter((item) => item.id == id).length > 0) {
      drink = data500ml.filter((item) => item.id == id)[0].name
    }

    return drink
  }
};

const getPrice = (id, qty, type) => {
  if (type == 250) {
    if (data250ml.filter((item) => item.id == id).length > 0) {
      return( 
        qty * data250ml.filter((item) => item.id == id)[0].price
      );
    }
  } else {
    let strPrice = 0;
    if (data500ml.filter((item) => item.id == id).length > 0) {
      strPrice = data500ml.filter((item) => item.id == id)[0].price;
    }
    
    return (qty * strPrice);
  
  }
};

function Preview(props) {
  return "Preview - " + props.data != 0 && props.name;
}

function Item(props) {
  return (
    <div
      className={props.color + " item"}
      onMouseEnter={() => console.log("I have been hovered")}
    >
      <h1>{props.name}</h1>
      <input
        onChange={props.add_item}
        name={props.id}
        size="250"
        id={props.name}
        className="input250ml"
        placeholder="250ml"
        type="number"
      ></input>
      <input
        onChange={props.add_item}
        name={props.id}
        id={props.name + "500ml"}
        size="500"
        className="input500ml"
        placeholder="500ml"
        type="number"
      ></input>
    </div>
  );
}

class signUpDialog extends React.Component {
  constructor(eprops) {
    super(eprops);    
    this.previewRef = React.createRef();
    this.calculate = this.calculateR.bind(this);
    this.viewToggle = this.viewToggleR.bind(this);
    this.price = 0;
    // this may be the most inefficient code I've ever written
    this.addItem = this.addItem.bind(this);
    this.state = {
      am250: {
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
      },

      am500: {
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
      },
      discount: 0,
      price: 0,
      view: 0,
    };
  }

  render() {
    return [
      <div className={this.state.view == 0?"separator":"hidden"}></div>,
      <div className={this.state.view == 0?"products":"full"}>
        <div className="gray item">
          <h1>discount</h1>
          <input
            className="input250ml"
            id="discount"
            type="number"
            onChange={this.addItem}
            placeholder="discount"
          ></input>
        </div>

        {data250ml.map((item) => (
          <Item
            color={item.color}
            name={item.name}
            id={item.id}
            add_item={this.addItem}
          />
        ))}
      </div>,
      <div className={this.state.view == 0?"preview":"hidden"}>
        ----------------------
        <br />
        <pre> Selera Ngopi</pre>
        ----------------------
        <br />
        {
          // data250ml.map((item)=>{
          //   return this.state.am250.americano;
          // })

          Object.keys(this.state.am250).map((item) => {
            //console.log(item);
            if (this.state.am250[item] > 0) {
              //console.log(getName(item))
              return (
                <>
                  <pre>
                    {this.state.am250[item]}x {getName(item, 250)}
                  </pre>
                  <pre>250ml         {nf.format(getPrice(item, this.state.am250[item], 250 ))}</pre>
                </>
              );
              // return <pre>{this.state.am250[item]}x {item.name}</pre>;
            }
          })
        }
        {
          // data250ml.map((item)=>{
          //   return this.state.am250.americano;
          // })

          Object.keys(this.state.am500).map((item) => {
            if (this.state.am500[item] > 0) {
              //console.log(getName(item))
              return (
                <>
                  <pre>
                    {this.state.am500[item]}x {getName(item, 500)}
                  </pre>
                  <pre>500ml         {nf.format(getPrice(item, this.state.am500[item], 500))}</pre>
                </>
              );
              // return <pre>{this.state.am250[item]}x {item.name}</pre>;
            }
          })
        }
        <pre>
          {this.state.discount != 0 &&
            "DISCOUNT      " + nf.format(this.state.discount)}
        </pre>
        <pre>
          {this.state != 0 && "TOTAL         " + nf.format(this.state.price)}
        </pre>
      </div>,
    ];
  }

  updateDimensions = () => {
    width = window.innerWidth;
    console.log(width);
    if (width > 1000) {
      console.log('Hello!')
      this.setState({ view: 0 })
    } else if (width < 960){
      this.setState({ view: 1 })
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  viewToggleR(e) {
    // 0 means default
    if (this.state.view == 0) {
      this.setState({ view: 1 })
    } else {
      this.setState({ view: 0 })
    }
  }
  // this is the function to calculate all of the prices
  calculateR(e) {
    let tmpPrice = 0
    
    Object.keys(this.state.am250).map((item) => {
      if (this.state.am250[item] > 0) {
        tmpPrice += getPrice(item, this.state.am250[item], 250 )
      }
    })

    Object.keys(this.state.am500).map((item) => {
      if (this.state.am500[item] > 0) {
        tmpPrice += getPrice(item, this.state.am500[item], 500 )
      }
    })
    
    tmpPrice -= this.state.discount

    this.setState({ price: tmpPrice });
  }

  viewHide() {
    this.state.view = 1
  }

  viewShow() {
    this.state.view = 0    
  }

  // new code
  addItem = async (e) => {
    if (e.target.value >= 0) {
      if (e.target.size == "250") {
        const productId = e.target.name;
        await this.setState({
          am250: { ...this.state.am250, [e.target.name]: e.target.value },
        });
      } else if (e.target.size == "500") {
        const productId = e.target.name;
        await this.setState({
          am500: { ...this.state.am500, [e.target.name]: e.target.value },
        });
      } else if (e.target.id == "discount") {
        await this.setState({ discount: e.target.value });
        console.log(this.state.discount - 1);
      }
      this.calculate();
    } else {
      var alertDialogue = [
        "woi!! mana ada customer yg mau -1, mau rugi kau?",
        "cie yg mau ngasih duit gratis",
        "anda terlalu percaya diri",
        "jualan yang bener...",
        "seriously? -_-",
      ];
      alert(alertDialogue[Math.floor(Math.random() * 5)]);
      e.target.value = "";
    }
    // console.log(e.target.id, e.target.value); mainly for debug purposes
  };
}

export default signUpDialog;

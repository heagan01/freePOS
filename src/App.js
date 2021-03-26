import React from "react";
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
// function item(props) {
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
  { color: "yellow", name: "Mango tea", id: "mango", price: 12000},
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
  { color: "yellow", name: "Mango tea", id: "mango", price: 20000},
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

class signUpDialog extends React.Component {
  constructor(eprops) {
    super(eprops);
    this.calculate = this.calculateR.bind(this);
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
      price: 0
    };
  }

  render() {
    return [
      <div className='separator'></div>,
      <div className="products">
        <div className="gray item">
          <h1>discount</h1>
          <input
            className="input250ml"
            id="discount"
            type='number'
            onChange={this.addItem}
            placeholder="discount"
          ></input>
        </div>

        {data250ml.map((item) => (
          <Item color={item.color} name={item.name} add_item={this.addItem} />
        ))}
      </div>,
      <div className="preview">
        ----------------------
        <br />
        <pre>     Selera Ngopi</pre>
        ----------------------
        <br />
        {/* this too is the most unefficient code I've ever written */}
        <pre>
          {this.state.am250.americano != 0 &&
            this.state.am250.americano + "x  Americano"}
        </pre>
        <pre>
          {this.state.am250.americano != 0 &&
            "250ml          " + nf.format(this.state.am250.americano * 18000)}
        </pre>
        <pre>{this.state.am250.americano != 0 && <br />}</pre>
        <pre>
          {this.state.am500.americano != 0 &&
            this.state.am500.americano + "x  Americano"}
        </pre>
        <pre>
          {this.state.am500.americano != 0 &&
            "500ml          " + nf.format(this.state.am500.americano * 35000)}
        </pre>
        {this.state.am500.americano != 0 && <br />}
        <pre>
          {this.state.am250.cookie != 0 &&
            this.state.am250.cookie + "x  Cookies & cream"}
        </pre>
        <pre>
          {this.state.am250.cookie != 0 &&
            "250ml          " + nf.format(this.state.am250.cookie * 18000)}
        </pre>
        <pre>{this.state.am250.cookie != 0 && <br />}</pre>
        <pre>
          {this.state.am500.cookie != 0 &&
            this.state.am500.cookie + "x  Cookies & cream"}
        </pre>
        <pre>
          {this.state.am500.cookie != 0 &&
            "500ml          " + nf.format(this.state.am500.cookie * 35000)}
        </pre>
        <pre>{this.state.am500.cookie != 0 && <br />}</pre>
        <pre>
          {this.state.am250.aren != 0 &&
            this.state.am250.aren + "x  Aren Latte"}
        </pre>
        <pre>
          {this.state.am250.aren != 0 &&
            "250ml          " + nf.format(this.state.am250.aren * 18000)}
        </pre>
        {this.state.am250.aren != 0 && <br />}
        <pre>
          {this.state.am500.aren != 0 &&
            this.state.am500.aren + "x  Aren Latte"}
        </pre>
        <pre>
          {this.state.am500.aren != 0 &&
            "500ml          " + nf.format(this.state.am500.aren * 35000)}
        </pre>
        <pre>{this.state.am500.aren != 0 && <br />}</pre>
        <pre>
          {this.state.am500.aren != 0&& <br />}
        </pre>
        <pre>
          {this.state.am250.vanilla != 0 &&
            this.state.am250.vanilla + "x  Vanilla Latte"}
        </pre>
        <pre>
          {this.state.am250.vanilla != 0 &&
            "250ml          " + nf.format(this.state.am250.vanilla * 18000)}
        </pre>
        <pre>{this.state.am250.vanilla != 0 && <br />}</pre>
        <pre>{this.state.am500.vanilla != 0 &&
          "500ml          " + nf.format(this.state.am500.vanilla * 35000)}
      </pre>
      {this.state.am500.vanilla != 0 && <br />}
        <pre>
          {this.state.am250.pandan != 0 &&
            this.state.am250.pandan + "x  Pandan Latte"}
        </pre>
        <pre>
          {this.state.am250.pandan != 0 &&
            "250ml          " + nf.format(this.state.am250.pandan * 18000)}
        </pre>
        <pre>{this.state.am250.pandan != 0 && <br />}</pre>
        <pre>
          <pre>
            {this.state.am500.pandan != 0 &&
              this.state.am500.pandan + "x  Pandan Latte"}
          </pre>
          <pre>
            {this.state.am500.pandan != 0 &&
              "500ml          " + nf.format(this.state.am500.pandan * 18000)}
          </pre>
            <pre>{this.state.am500.pandan != 0 && <br />}</pre>
          </pre>
        <pre>
          {this.state.am250.taroL != 0 &&
            this.state.am250.taroL + "x  Taro Latte"}
        </pre>
        <pre>
          {this.state.am250.taroL != 0 &&
            "250ml          " + nf.format(this.state.am250.taroL * 18000)}
        </pre>
        <pre>{this.state.am250.taroL != 0 && <br />}</pre>
          <pre>
            {this.state.am500.taroL != 0 &&
              this.state.am500.taroL + "x  Taro Latte"}
          </pre>
          <pre>
            {this.state.am500.taroL != 0 &&
              "500ml          " + nf.format(this.state.am500.taroL * 18000)}
          </pre>
          <pre>{this.state.am500.taroL != 0 && <br />}</pre>
        <pre>
          {this.state.am250.rum != 0 && this.state.am250.rum + "x  Rum Coffee"}
        </pre>
        <pre>
          {this.state.am250.rum != 0 &&
            "250ml          " + nf.format(this.state.am250.rum * 18000)}
        </pre>
        <pre>{this.state.am250.rum != 0 && <br />}</pre>
          <pre>
            {this.state.am500.rum != 0 && this.state.am500.rum + "x  Rum Coffee"}
          </pre>
          <pre>
            {this.state.am500.rum != 0 &&
              "500ml          " + nf.format(this.state.am500.rum * 18000)}
          </pre>
          <pre>{this.state.am500.rum != 0 && <br />}</pre>
          <pre>
          {this.state.am250.dolce != 0 &&
            this.state.am250.dolce + "x  Dolce Coffee"}
        </pre>
        <pre>
          {this.state.am250.dolce != 0 &&
            "250ml          " + nf.format(this.state.am250.dolce * 18000)}
        </pre>
        <pre>{this.state.am250.dolce != 0 && <br />}</pre>
        <pre>
          <pre>
          {this.state.am500.dolce != 0 &&
            this.state.am500.dolce + "x  Dolce Coffee"}
        </pre>
        <pre>
          {this.state.am500.dolce != 0 &&
            "500ml          " + nf.format(this.state.am500.dolce * 18000)}
        </pre>
        <pre>{this.state.am500.dolce != 0 && <br />}</pre>
        <pre>
          {this.state.am250.mocha != 0 &&
            this.state.am250.mocha + "x  Mochacino"}
        </pre>
        <pre>
          {this.state.am250.mocha != 0 &&
            "250ml          " + nf.format(this.state.am250.mocha * 18000)}
        </pre>
        <pre>{this.state.am250.mocha != 0 && <br />}</pre>
          <pre>
            {this.state.am500.mocha != 0 &&
              this.state.am500.mocha + "x  Mochacino"}
          </pre>
          <pre>
            {this.state.am500.mocha != 0 &&
              "500ml          " + nf.format(this.state.am500.mocha * 18000)}
          </pre>
          <pre>{this.state.am500.mocha != 0 && <br />}</pre>
        <pre>
          {this.state.am250.matcha != 0 &&
            this.state.am250.matcha + "x  Creamy Matcha"}
        </pre>
        <pre>
          {this.state.am250.matcha != 0 &&
            "250ml          " + nf.format(this.state.am250.matcha * 18000)}
        </pre>
        <pre>{this.state.am250.matcha != 0 && <br />}</pre>
          <pre>
            {this.state.am500.matcha != 0 &&
              this.state.am500.matcha + "x  Creamy Matcha"}
          </pre>
          <pre>
            {this.state.am500.matcha != 0 &&
              "500ml          " + nf.format(this.state.am500.matcha * 18000)}
          </pre>
          <pre>{this.state.am500.matcha != 0 && <br />}</pre>
        <pre>
          {this.state.am250.taro != 0 &&
            this.state.am250.taro + "x  Taro Frappé"}
        </pre>
        <pre>
          {this.state.am250.taro != 0 &&
            "250ml          " + nf.format(this.state.am250.taro * 18000)}
        </pre>
        <pre>{this.state.am250.taro != 0 && <br />}</pre>
          <pre>
            {this.state.am500.taro != 0 &&
              this.state.am500.taro + "x  Taro Frappé"}
          </pre>
          <pre>
            {this.state.am500.taro != 0 &&
              "500ml          " + nf.format(this.state.am500.taro * 18000)}
          </pre>
          <pre>{this.state.am500.taro != 0 && <br />}</pre>
        <pre>
          {this.state.am250.choco != 0 &&
            this.state.am250.choco + "x  Choco Signature"}
        </pre>
        <pre>
          {this.state.am250.choco != 0 &&
            "250ml          " + nf.format(this.state.am250.choco * 18000)}
        </pre>
        <pre>{this.state.am250.choco != 0 && <br />}</pre>
          <pre>
            {this.state.am500.choco != 0 &&
              this.state.am500.choco + "x  Choco Signature"}
          </pre>
          <pre>
            {this.state.am500.choco != 0 &&
              "500ml          " + nf.format(this.state.am500.choco * 18000)}
          </pre>
          <pre>{this.state.am500.choco != 0 && <br />}</pre>
        <pre>
          {this.state.am250.milktea != 0 &&
            this.state.am250.milktea + "x  Brown Sugar Milktea"}
        </pre>
        <pre>
          {this.state.am250.milktea != 0 &&
            "250ml           " +
              nf.format(this.state.am250.milktea * 18000)}
        </pre>
        <pre>{this.state.am250.milktea != 0 && <br />}</pre>
          <pre>
            {this.state.am500.milktea != 0 &&
              this.state.am500.milktea + "x  Brown Sugar Milktea"}
          </pre>
          <pre>
            {this.state.am500.milktea != 0 &&
              "500ml           " +
                nf.format(this.state.am500.milktea * 18000)}
          </pre>
          <pre>{this.state.am500.milktea != 0 && <br />}</pre>
        <pre>
          {this.state.am250.mango != 0 &&
            this.state.am250.mango + "x  Mango Tea"}
        </pre>
        <pre>
          {this.state.am250.mango != 0 &&
            "250ml           " +
              nf.format(this.state.am250.mango * 12000)}
        </pre>
        <pre>{this.state.am250.mango != 0 && <br />}</pre>
          <pre>
            {this.state.am500.mango != 0 &&
              this.state.am500.mango + "x  Mango Tea"}
          </pre>
          <pre>
            {this.state.am500.mango != 0 &&
              "500ml           " +
                nf.format(this.state.am500.mango * 20000)}
          </pre>
          <pre>{this.state.am500.mango != 0 && <br />}</pre>
          <pre>{this.state.discount != 0 && "DISCOUNT       " + nf.format(this.state.discount)}</pre>
        <pre>{this.state != 0 && "TOTAL	       " + nf.format(this.state.price)}</pre>
      </pre></div>,
    ];
  }

  // this is the function to calculate all of the prices
  calculateR(e){
    let tmpPrice = this.state.am250.americano * data250ml[0].price + this.state.am250.aren * data250ml[0].price + this.state.am250.vanilla * data250ml[0].price + this.state.am250.pandan * data250ml[0].price + this.state.am250.taroL * data250ml[0].price + this.state.am250.rum * data250ml[0].price + this.state.am250.dolce * data250ml[0].price + this.state.am250.mocha * data250ml[0].price + this.state.am250.matcha * data250ml[0].price + this.state.am250.cookie * data250ml[0].price + this.state.am250.taro * data250ml[0].price + this.state.am250.choco * data250ml[0].price + this.state.am250.milktea * data250ml[0].price + this.state.am250.mango * data250ml[12].price + this.state.am500.americano * data500ml[0].price + this.state.am500.aren * data500ml[0].price + this.state.am500.vanilla * data500ml[0].price + this.state.am500.pandan * data500ml[0].price + this.state.am500.taroL * data500ml[0].price + this.state.am500.rum * data500ml[0].price + this.state.am500.dolce * data500ml[0].price + this.state.am500.mocha * data500ml[0].price + this.state.am500.matcha * data500ml[0].price + this.state.am500.cookie * data500ml[0].price + this.state.am500.taro * data500ml[0].price + this.state.am500.choco * data500ml[0].price + this.state.am500.milktea * data500ml[0].price + this.state.am500.mango * data500ml[12].price - this.state.discount;
    this.setState({price: tmpPrice});

    console.log(data500ml[12].price)
    console.log(this.state.price)
  }

  // new code
  addItem=async e =>{
    if (e.target.value >= 0) {
      if (e.target.id == "Americano") {
        await this.setState({am250: {...this.state.am250, americano: e.target.value } });
      } else if (e.target.id == "Aren Latte") {
        await this.setState({am250: {...this.state.am250, aren: e.target.value } });
      } else if (e.target.id == "Vanilla Latte") {
        await this.setState({am250: {...this.state.am250, vanilla: e.target.value } });
      } else if (e.target.id == "Pandan Latte") {
        await this.setState({am250: {...this.state.am250, pandan: e.target.value } });
      } else if (e.target.id == "Taro Latte") {
        await this.setState({am250: {...this.state.am250, taroL: e.target.value } });
      } else if (e.target.id == "Rum Coffee") {
        await this.setState({am250: {...this.state.am250, rum: e.target.value } });
      } else if (e.target.id == "Dolce Coffee") {
        await this.setState({am250: {...this.state.am250, dolce: e.target.value } });
      } else if (e.target.id == "Mochacino") {
        await this.setState({am250: {...this.state.am250, mochacino: e.target.value } });
      } else if (e.target.id == "Creamy Matcha") {
        await this.setState({am250: {...this.state.am250, matcha: e.target.value } });
      } else if (e.target.id == "Cookies n Cream") {
        await this.setState({am250: {...this.state.am250, cookie: e.target.value } });
      } else if (e.target.id == "Taro Frappé") {
        await this.setState({am250: {...this.state.am250, taro: e.target.value } });
      } else if (e.target.id == "Choco Signature") {
        await this.setState({am250: {...this.state.am250, choco: e.target.value } });
      } else if (e.target.id == "Brown Sugar MT") {
        await this.setState({am250: {...this.state.am250, milktea: e.target.value } });
      } else if (e.target.id == "Mango tea") {
        await this.setState({am250: {...this.state.am250, mango: e.target.value } });
      } else if (e.target.id == 'discount') {
        await this.setState({discount: e.target.value})
        console.log(this.state.discount - 1)
      }

      if (e.target.id == "Americano500ml") {
        await this.setState({am500: {...this.state.am500, americano: e.target.value} })
      } else if (e.target.id == "Aren Latte500ml") {
        await this.setState({am500: {...this.state.am500, aren: e.target.value} })
      } else if (e.target.id == "Vanilla Latte500ml") {
        await this.setState({am500: {...this.state.am500, vanilla: e.target.value} })
      } else if (e.target.id == "Pandan Latte500ml") {
        await this.setState({am500: {...this.state.am500, pandan: e.target.value} })
      } else if (e.target.id == "Taro Latte500ml") {
        await this.setState({am500: {...this.state.am500, taroL: e.target.value} })
      } else if (e.target.id == "Rum Coffee500ml") {
        await this.setState({am500: {...this.state.am500, rum: e.target.value} })
      } else if (e.target.id == "Dolce Coffee500ml") {
        await this.setState({am500: {...this.state.am500, dolce: e.target.value} })
      } else if (e.target.id == "Mochacino500ml") {
        await this.setState({am500: {...this.state.am500, mochacino: e.target.value} })
      } else if (e.target.id == "Creamy Matcha500ml") {
        await this.setState({am500: {...this.state.am500, matcha: e.target.value} })
      } else if (e.target.id == "Cookies n Cream500ml") {
        await this.setState({am500: {...this.state.am500, cookie: e.target.value} })
      } else if (e.target.id == "Taro Frappé500ml") {
        await this.setState({am500: {...this.state.am500, taro: e.target.value} })
      } else if (e.target.id == "choco signature500ml") {
        await this.setState({am500: {...this.state.am500, choco: e.target.value} })
      } else if (e.target.id == "Brown Sugar MT500ml") {
        await this.setState({am500: {...this.state.am500, milktea: e.target.value} })
      } else if (e.target.id == "Mango tea500ml") {
        await this.setState({am500: {...this.state.am500, mango: e.target.value} })
      }
      this.calculate()
    } else {
      var alertDialogue = ['woi!! mana ada customer yg mau -1, mau rugi kau?', 'cie yg mau ngasih duit gratis', 'anda terlalu percaya diri', 'jualan yang bener...', 'seriously? -_-']
      alert(alertDialogue[Math.floor((Math.random() * 5))]);
      e.target.value = "";
    }
    // console.log(e.target.id, e.target.value); mainly for debug purposes
  }
}

export default signUpDialog;

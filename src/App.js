import React , {Component} from 'react'
import Button from './Components/Button'



class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      currentNum: "0",
      lastPressed: undefined ,
      boolean : 0,
      Counter : 0
    }
  }
  clickable = (e) => {
    const {lastPressed , currentNum , boolean , Counter} = this.state;
    const {innerText} = e.target;
    const array = ["+" , "-" , "*" , "/"];
    

      
    if(innerText === "="){
      this.setState({
        Counter:Counter + 1
      })
    }
    if(innerText === "-"){
      this.setState({
        boolean:boolean + 1
      })
    }    
      
        if(innerText==="-"){
          if(Counter<=1 && boolean <1) {
          this.setState({
            currentNum:currentNum + ` ${innerText}`,
            lastPressed:innerText
          })
        }
        }else {
          this.setState({
            currentNum:currentNum+innerText,
            lastPressed: innerText , 
            boolean: 0
          })
        }
        console.log(lastPressed , innerText)
      
    switch(innerText) {
         case "CE" :
           this.setState({
             currentNum:"0",
             Counter : 0 ,
             boolean : 0
           })
           break;
         case "=" :
           const e = eval(currentNum);
            this.setState({
              currentNum:e , 
              Counter: Counter + 1 , 
              boolean : 0
             })
           break;
          case "." :
            const splitted = currentNum.split(/[\+\-\*\/]/);
            if(!splitted[splitted.length-1].includes(innerText)){
              this.setState({
                currentNum:currentNum+innerText
              })
            }else {
              this.setState({
                currentNum:currentNum
              })
            }
            break;
         default: {
              if(array.includes(lastPressed) ){
                if(array.includes(innerText) && innerText!=="-"){
                  const lastI = currentNum.split("");
                  const deleteIndex = lastI.reverse().findIndex( char=>
                  char!==" " && (char>0 || char<10)
                )
                this.setState({
                  currentNum: currentNum.slice(0,lastI.length-deleteIndex) + ` ${innerText} ` ,
                  Counter: 0 ,
                  boolean : 0
                })
              }
              } else {
                  if(boolean<1){
                    if(array.includes(innerText)){
                      this.setState({
                        currentNum: currentNum ==="0" ? innerText : currentNum+` ${innerText} `,
                        Counter: 0
                      })
                    }else {
                      this.setState({
                        currentNum: currentNum ==="0" ? innerText : currentNum+innerText , 
                        Counter: 0
                      })
                    }
                  }
                
              }
         }
      }
      if(innerText.length > 1) {
        this.setState({
          currentNum:currentNum
        })
      }
      if(innerText==="CE"){
        this.setState({
          currentNum:"0" , 
          Counter : 0 ,
          boolean : 0
        })
      }
      if(array.includes(innerText) && currentNum==="0"){
        this.setState({
          currentNum:"0"
        })
      }
      if(lastPressed==="=" && !isNaN(Number(innerText))){
        this.setState({
          currentNum:innerText,
          boolean : 0 , 
          Counter : 0
        })
      }
    }
    
  render(){
    let listItems = [
      {
        id:"AC",
        display: "CE"
      },
      {
        id:"divide",
        display: "/"
      },
      {
        id:"seven",
        display: "7"
      },
      {
        id:"eigth",
        display: "8"
      },
      {
        id:"nine",
        display: "9"
      },
      {
        id:"multiply",
        display: "*"
      },
      {
        id:"four",
        display: "4"
      },
      {
        id:"five",
        display: "5"
      },
      {
        id:"six",
        display: "6"
      },
      {
        id:"subtract",
        display: "-"
      },
      {
        id:"one",
        display: "1"
      },
      {
        id:"two",
        display: "2"
      },
      {
        id:"three",
        display: "3"
      },
      {
        id:"add",
        display: "+"
      },
      {
        id:"zero",
        display: "0"
      },
      {
        id:"decimal",
        display: "."
      },
      {
        id:"equals",
        display: "="
      }
    ]
  const {currentNum} = this.state;
  return (
    <div className="parent">
      <div onClick = {this.clickable} className="App">
      <div className = "result">
        {currentNum}
      </div>
     { listItems.map( (items , index) => 
        <Button  func = {items.id} key = {index} info={items}/>
      )
    }      
    </div>
    </div>
  );
  }
}

export default App;

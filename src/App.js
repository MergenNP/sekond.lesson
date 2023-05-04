import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import YandexMap from "./components/YandexMap";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      items:[
{
  id:1,
  title:'Ролл - Калифорния',
  img:'Californiua.jpeg',
  subtitle:"Какое то описание",
  price:'500'
},
{
  id:2,
  title:'Ролл - Унаги',
  img:'unagi.jpeg',
  subtitle:"Какое то описание",
  price:'600'
},
{
  id:3,
  title:'Ролл - Горячий',
  img:'goriachii.jpeg',
  subtitle:"Какое то описание",
  price:'700'
},
{
  id:3,
  title:'Ролл - Дракон',
  img:'drakon.jpeg',
  subtitle:"Какое то описание",
  price:'700'
}
      ],
      objects:[
        {
          title:'Суши-Бар #1',
        lat:55.684758,
        lon:37.738521 
        },
        {
          title:'Суши-Бар #2',
        lat:55.674758,
        lon:37.768521 
        },
        {
          title:'Суши-Бар #3',
        lat:55.687758,
        lon:37.728521 
        },
        {
          title:'Суши-Бар #4',
        lat:55.634758,
        lon:37.638521 
        }
      ]
    }
    
  }
  render(){
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items}/>
        <YandexMap objects={this.state.objects}/>
        
      </div>
    </div>
  );
}
}
export default App;
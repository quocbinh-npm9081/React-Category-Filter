import React,{useState, useEffect} from 'react';
import './style/App.css';

import items from './data';
import Menu from './Components/menu/Menu';
import Button from './Components/button/Button';
import dataButtons from './Components/button/Data';


function App() {

    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(dataButtons);
   
  
    const filter = (button) =>{

        let filteredData = items.filter(item => button === 'all' ? items : item.category === button);
        let newActiveBtn = buttons.map(btn => btn.type === button ? {...btn, active: true}:{...btn, active: false});
      
        setMenuItem(filteredData);  
        updateActiveBtn(newActiveBtn);
    }
    
    
   
    const updateActiveBtn = (newActiveBtn)=>{
        setButtons(newActiveBtn);
    }


    return (
         <div className = "App" >
            <div className="title">
                <h1>
                    Category
                <span> Filter</span>
            </h1>
            </div>
            <div className="buttons">
                {
                    buttons.map((btn,index) =>(
                          <Button filter={filter} type={btn.type} active={btn.active} key={index}>{btn.label}</Button>
                    ))
                }
            </div>
             <Menu menuItem={menuItem}></Menu>
        </div>
    );
}

export default App;
import React from 'react';
import {Category, SortPopup, PizzaBlock} from '../components';

function Home({items}) {
  
    return (
      <div className="container">
        <div className="content__top">  
            <Category 
            items = {['Мясные', 'Вегатрианские', 'Гриль', 'Острые', 'Закрытые']}
            onClickCategory={(name)=> {console.log(name)}}
            />
          <SortPopup items= {['популярности', 'цена', 'алфавит']}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
          items.map((obj) =>(
          <PizzaBlock key={obj.id} {...obj}/>))
          }
        </div>
      </div>   
    );
}

export default Home;
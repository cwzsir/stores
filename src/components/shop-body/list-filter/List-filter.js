import React from 'react';
import listFilterStyle from "./List-filter.module.css"
import tilesViewFilter from "../../../icon/tilesViewFilter.svg"
import smallIconViewFilter from "../../../icon/smallIconViewFilter.svg"

const ListFilter = () => {
    return(
         <div className={listFilterStyle.listFilter}>
             <div className={listFilterStyle.listFilterSort}>
                 <span>Сортировать по:</span>
                 <span>Популярности</span>
                 <span>Возврастанию цены</span>
                 <span>Убыванию цены</span>
                 <span>Названию</span>
                 <span>Новизне</span>
             </div>

             <div className={listFilterStyle.listFilterButtons}>
                 <button><img src={tilesViewFilter} alt=""/></button>
                 <button><img src={smallIconViewFilter} alt=""/></button>
             </div>
         </div>
    );

};

export default ListFilter;
//import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions/actions';

import { Card } from '../Card'
import style from './Favorites.module.css'


export default function Favorites(){
    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();

    const handleClick = (e) =>{
        const {name, value} = e.target
        
        switch (name){
            case 'order':
                return dispatch(orderCards(value))
            case 'filter':
                return dispatch(filterCards(value))
            default: return null;
        }
    }
    
    return (
        <div>
            <div className={style.selector}>
                <select name='order' onChange={handleClick}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>     
                <select name='filter' onChange={handleClick}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {myFavorites?.map((char, i) => (
                <Card
                    detailId = {char.detailId}
                    key={i}
                    name = {char.name}
                    species = {char.species}
                    gender = {char.gender}
                    image = {char.image}
                    status = {char.status}
                />
            )    )}
        </div>
    )
}

// export function mapStateToProps(state){
//     return ({
//         myFavorites: state.myFavorites
//     })
// }
// export default connect(mapStateToProps, null)(Favorites)
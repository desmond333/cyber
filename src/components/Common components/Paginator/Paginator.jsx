import React, {useState} from 'react'
import styles from "./Paginator.module.css"
import cn from "classnames"

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    //Math.ceil при делении округляет число в большую сторону, это нужно чтобы мы не теряли последних юзеров при делении

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    let portionState = useState(1) // useState возвращает массив из двух элементов
    let portionNumber = portionState[0] //одиночное значение массива, которое хранится где-то в космосе
    let setPortionNumber = portionState[1] //f, которая меняет одиночное значение массива
    // let [portionNumber, setPortionNumber] = useState(1) эта строчка заменяет три строчки выше


    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={styles.paginator}>
        { portionNumber > 1 && //если номер порции > 1, то появляется кнопка ПРЕДЫДУЩИЕ
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={ cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        { portionCount > portionNumber && //если число порций > номера порции, то появляется кнопка СЛЕДУЮЩИЕ
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
}

export default Paginator
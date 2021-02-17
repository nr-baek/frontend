import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import DropDownMenu from './DropDownMenu';
import ItemNavLink from './ItemNavLink';
export const listStyle =
  'inline-block pr-5 pl-5 pb-3 text-gray-900 border-solid border-b-2 hover:text-kp-600 hover:border-kp-600 duration-100 cursor-pointer';
const btnStyle =
  'text-xl text-gray-900 pr-5 pb-5 mr-3 border-none text-right inline-block focus:outline-0 bg-blue-400';

const ItemNavigation = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="flex justify-between pt-3">
      <nav className="w-p-870">
        <ul className="text-xl ml-2 ">
          <ItemNavLink />
          <li className={listStyle}>제철과일</li>
          <li className={listStyle}>국산과일</li>
          <li className={listStyle}>수입과일</li>
          <li className={listStyle}>간편과일</li>
          <li className={listStyle}>
            냉동<span>&#183;</span>건과일
          </li>
          <li className={listStyle}>견과류</li>
          <li className={listStyle}>
            쌀<span>&#183;</span>잡곡
          </li>
        </ul>
      </nav>
      <div className="relative">
        <button className={btnStyle} onClick={onClick}>
          <span className="mr-2 ">추천순</span>
          {dropDown ? (
            <AiOutlineUp className="inline-block align-middle" />
          ) : (
            <AiOutlineDown className="inline-block align-middle" />
          )}
        </button>
        {dropDown && <DropDownMenu />}
      </div>
    </div>
  );

  function onClick() {
    setDropDown(!dropDown);
  }
};

export default ItemNavigation;
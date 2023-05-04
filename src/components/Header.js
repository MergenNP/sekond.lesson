import React from 'react'

export default function Header() {
  return (
<header>
        <div>
            <span className='Logo'>Суши Мания</span>
            <ul className='nav'>
                <li className='nav-item'> Про нас </li>
                <li className='nav-item'> Главная </li>
                <li className='nav-item'> Контакты </li>
            </ul>
        </div>
        <div className='presentation'></div>
</header>
  )
}

import "./navbar.css"
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'
import { FaLanguage, FaSun, FaMoon } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import i18n from "../i18next"

export default function Navbar() {
  const { languageOn, viewLanguage, changeTheme, theme, menu, toggleMenu, languages, setLanguageOn, setLoading} = useContext(AppContext)
  const { t, i18n } = useTranslation()

  const handleLanguage = (lang) => {
    setLoading(true)
    i18n.changeLanguage(lang)
    setLanguageOn(false)
    setLoading(false)
  }

  return (
    <nav className={theme ? 'navbar dark' : 'navbar'}>
      <section className='pc-nav'>
        <h1 className='navbar-title'>{t("title")}</h1>
        <div className='navbar-pages'>
            <ul>
              <li><NavLink className={({isActive}) => isActive ? 'active btn' : 'active'} to='/'>{t("home")}</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'active btn' : 'active'} to='/weather'>{t("weather")}</NavLink></li>
            </ul>
        </div>
        <div className='language'>
          <div className='dark-btn'>
            {theme ? <FaSun onClick={changeTheme} className='theme-btn icon' /> : <FaMoon onClick={changeTheme} className='theme-btn icon' />}
            <FaLanguage onClick={viewLanguage} className='lang-btn icon' />
          </div>
          {
            languageOn && 
            <div className='lang-list'>
                <ul>
                    {
                      languages.map(lng => {
                        return <button key={lng.code} onClick={() => handleLanguage(lng.code)}>{lng.name}</button>
                      })
                    }
                </ul>
            </div>
          }
        </div>
      </section>
      <section className='mobile-nav'>
          <div className='header'>
                <h1 className='navbar-title'>{t("title")}</h1>
                <div className='header-btn'>
                  {theme ? <FaSun onClick={changeTheme} className='theme-btn icon' /> : <FaMoon onClick={changeTheme} className='theme-btn icon' />}
                  <AiOutlineMenu className='icon' onClick={toggleMenu} />
                </div>
          </div>
            {menu &&
              <main className='main-mobile'>
                    <aside className='language-part'>
                      <FaLanguage onClick={viewLanguage} className='lang-btn icon' />
                        {
                          languageOn && 
                          <div className='mobile-list'>
                              <ul>
                                {
                                  languages.map(lng => {
                                    return <button key={lng.code} onClick={() => handleLanguage(lng.code)}>{lng.name}</button>
                                  })
                                }
                            </ul>
                          </div>
                      }
                    </aside>
                    <div className='navbar-pages'>
                      <ul>
                        <li><NavLink className={({isActive}) => isActive ? 'active btn' : 'active'} to='/'>{t("home")}</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'active btn' : 'active'} to='/weather'>{t("weather")}</NavLink></li>
                      </ul>
                    </div>
                </main>
              }
      </section>
    </nav>
  )
}

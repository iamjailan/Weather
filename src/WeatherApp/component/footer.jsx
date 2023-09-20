import React, { useContext } from 'react'
import "./footer.css"
import { AppContext } from '../context/context'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { theme } = useContext(AppContext)
    const { t } = useTranslation()
  return (
    <footer className={theme ? 'footer dark' : 'footer'}>
        <div className='footer-text'>
            <p>&copy; {t("copy_right")}{new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

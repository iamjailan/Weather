import React, { useContext, useEffect } from 'react'
import "./pages.css"
import { AppContext } from '../context/context'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


export default function Home() {
    const { handleHomeSubmit, homeMail, setHomeMail, homeLocation, setHomeLocation, homeLocationError, homeMailError, theme } = useContext(AppContext)
    const { t } = useTranslation()
    document.title = t("title")
  return (
    <main className={theme ? 'home dark' : 'home'}>
        <div className='home-text'>
            <h1>{t("home-text")}</h1>
            <Link className='home-button' to="/weather">{t("home-button")} {document.body.dir === 'rtl' ? <p>&larr;</p> : <p>&rarr;</p>}</Link>
        </div>
        <div className='home-form'>
            <h3>{t("home-form-text-1")}</h3>
            <h4>{t("home-form-text-2")}</h4>
            <form className='form' onSubmit={handleHomeSubmit}>
                <label>{t("form-location")}</label>
                <input value={homeLocation} onChange={e => setHomeLocation(e.target.value)} type='text' placeholder={t("p_city")}/>
                {homeLocationError && <p className='form-alert'>{t("location_error")}</p>}
                <label>{t("form-mail")}</label>
                <input value={homeMail} onChange={e => setHomeMail(e.target.value)} type='email' placeholder={t("p_email")} />
                {homeMailError && <p className='form-alert'>{t("email_error")}</p>}
                <button type='submit'>{t("subscribe")}</button>
            </form>
        </div>
    </main>
  )
}

import React from "react";
import { useEffect } from "react";
import { createContext } from "react";
import cookies from "js-cookie"
import axios from "axios";
import i18next from "i18next";

const AppContext = createContext()

const AppProvider = ({children}) =>  {
    const [languageOn, setLanguageOn] = React.useState(false)
    const [theme, setTheme] = React.useState(false)
    const [menu, setMenu] = React.useState(false)
    const [homeLocationError, setHomeLocationError] = React.useState(false)
    const [homeLocation, setHomeLocation] = React.useState('')
    const [homeMailError, setHomeMailError] = React.useState(false)
    const [homeMail, setHomeMail] = React.useState('')
    const [cityValue, setCityValue] = React.useState('')
    const [weatherData, setWeatherData] = React.useState(null)
    const [showError, setShowError] = React.useState(null) 
    const [loading, setLoading] = React.useState(false)
    const [emptyInput, setEmptyInput] = React.useState(false)

    useEffect(() => {
        const savedState = localStorage.getItem("theme")
        if(savedState){
             setTheme(savedState === 'true')
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLanguageOn(false)
        }, 6000)
        return () => clearTimeout(timeout);
    }, [languageOn])

    setTimeout(() => {
        setHomeLocationError(false),
        setHomeMailError(false)
    }, 1000)

    const fetchData = async () => {
        setLoading(true)
        try {
            await axios.get(url)
            .then(response => {
                setWeatherData(response.data)
            })
            .catch(err => {
                setShowError(err)
            })
            
        } catch (error) {
            setShowError(error)
        }
        setLoading(false)
    }
    
    

    const ApiKey = 'ce9d3f3835631871dba83111b38ff243'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${ApiKey}`       

    const toggleMenu = () => {
        setMenu(prevState => !prevState)
    }

    const changeTheme = () => {
        setTheme(prevTheme => !prevTheme)
    }

    const viewLanguage = () => {
        setLanguageOn(prevState => !prevState)
    }
    const handleHomeSubmit = (e) => {
        e.preventDefault()
        if(!homeLocation){
            setHomeLocationError(true)
        } else if(!homeMail){
            setHomeMailError(true)
        } else {
            setHomeLocation('')
            setHomeMail('')
        }
    }
    const handleWeatherForm = (e) => {
        e.preventDefault()
        if(!cityValue) {
            setEmptyInput(true)
            const timeout = setTimeout(() => {
                setEmptyInput(false)
            }, 3000)
            return () => clearTimeout(timeout)
        } else {
            fetchData()
        }
    }
    

    const languages = [
        {
          name: 'English',
          code: 'en',
          dir: 'ltr',
          font: '',
        },
        {
          name: 'پښتو',
          code: 'ps',
          dir: 'rtl',
          font: "Noto Naskh Arabic', serif",
          width: "300"
        },
        {
          name: 'دری',
          code: 'dr',
          dir: 'rtl',
          font: "Noto Naskh Arabic', serif",
          width: "300"
        }
      ]
  const currentLanguageCode = cookies.get('i18next') || 'en' 
  const currentLanguage = languages.find(l => l.code === currentLanguageCode) 
  
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.body.style.fontFamily = currentLanguage.font
    document.body.style.fontWeight = currentLanguage.width
  }, [currentLanguage])


    return (
    <AppContext.Provider value={{languageOn, viewLanguage, theme, changeTheme, menu, toggleMenu, handleHomeSubmit, homeLocation, setHomeLocation, homeMail, setHomeMail, homeLocationError, homeMailError, handleWeatherForm, cityValue, setCityValue, weatherData, showError, loading, setLanguageOn, languages, emptyInput}}>
        {children}
    </AppContext.Provider>
    )
}

export {AppContext, AppProvider}
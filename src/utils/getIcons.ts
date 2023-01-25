import iconClear from 'assets/svg/icons/iconClear.svg'
import iconClouds from 'assets/svg/icons/iconClouds.svg'
import iconRain from 'assets/svg/icons/iconRain.svg'
import iconSnow from 'assets/svg/icons/iconSnow.svg'

export const getImage = (mode: string): string => {
  switch (mode) {
    case 'Clouds':
      return iconClouds
    case 'Rain':
      return iconRain
    case 'Snow':
      return iconSnow
    default:
      return iconClear
  }
}

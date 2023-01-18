import iconClear from '@assets/svg/iconClear.svg'
import iconClouds from '@assets/svg/iconClouds.svg'
import iconRain from '@assets/svg/iconRain.svg'
import iconSnow from '@assets/svg/iconSnow.svg'

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

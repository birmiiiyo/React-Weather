export interface ILocation {
  name: string
  local_names: LocalNames
  lat: number
  lon: number
  country: string
  state: string
}

interface LocalNames {
  en: string
  ru: string
  sr: string
  lt: string
  de: string
  es: string
  nl: string
  feature_name: string
  pl: string
  be: string
  fr: string
  uk: string
  eo: string
  ascii: string
  et: string
}

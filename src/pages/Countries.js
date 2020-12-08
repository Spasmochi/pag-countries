import { Menu } from '../components/menu/Menu'
import { handleResponseState } from '../middleware/handleResponseState'

export const Countries = () => handleResponseState(Menu)

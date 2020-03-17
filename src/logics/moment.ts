import * as moment from 'moment'

// Imports all language data.
import 'moment/min/locales'

declare var window: any

// Initialize the moment according
// to browser's language setting.
const locale = window.navigator.userLanguage || window.navigator.language
moment.locale(locale)

export const Moment = {
    ...moment,
}

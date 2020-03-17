import * as ReusableLogics from 'svelte-reusable/logics'
import { API } from './api'
import { Service } from './service'
import { Moment } from './moment'

export const Logics = {
    ...ReusableLogics,
    API,
    Service,
    Moment,
}

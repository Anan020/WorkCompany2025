import moment from 'moment/min/moment-with-locales'

export const datateFormate=(date)=>{
    return moment(date).locale('lo').format('lll')
}
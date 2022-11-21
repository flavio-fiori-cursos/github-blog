import * as dayjs from 'dayjs'
import relativeTime  from 'dayjs/plugin/relativeTime'
import ptBR from 'dayjs/locale/pt-br'

dayjs.locale(ptBR)
dayjs.extend(relativeTime)

export function timeFromNow(date: string) {
  return dayjs(new Date(date)).fromNow()  
}
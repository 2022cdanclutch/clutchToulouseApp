import { useGetAllEventsQuery } from '../../../../api/events.service'
import CardEvent from '../../../../components/card/CardEvent'
import Ievent from '../../../../redux/slices/Ievent'
import { useEffect, useState } from 'react'
import { filter, map } from 'lodash'

const NextEvents = (locationId: string) => {
  const { data } = useGetAllEventsQuery('')
  const [dataFiltered, setDataFiletred] = useState<Ievent[] | null>(null)

  useEffect(() => {
    if (data) {
      const updatedData = filter(data, event => event.location['@id'] === locationId)
      setDataFiletred(updatedData)
    }
  }, [data])

  return (
    <>
      {dataFiltered && map(dataFiltered, (event, index) => (
        <CardEvent key={index} color={'#FA4E74'} event={event} marginTop={10}/>
      ))}
    </>
  )
}

export default NextEvents

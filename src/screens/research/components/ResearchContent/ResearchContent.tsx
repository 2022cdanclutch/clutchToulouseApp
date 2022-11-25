import ResearchContentEvents from './components/ResearchContentEvents'
import Loading from '../../../../components/loading/Loading'
import { TGetDataError } from '../../../../redux/store'
import Ievent from '../../../../redux/slices/Ievent'
import { Text } from 'react-native'
import { isEmpty } from 'lodash'
import { FC } from 'react'

type TResearchContent = {
  error: TGetDataError,
  data: Ievent[] | undefined,
  isLoading: boolean
}

const ResearchContent: FC<TResearchContent> = ({ error, data, isLoading }) => {
  if (error) {
    return (
      <Text>Une erreur est survenue</Text>
    )
  }

  if (isLoading) {
    return (
      <Loading color={'#ffffff'}/>
    )
  }

  // si pas d'events
  if (!data || isEmpty(data)) {
    return (
      <Text style={{ color: '#fff' }}>Désolé, aucun évènement ne correspond à votre recherche</Text>
    )
  }

  return (
    <ResearchContentEvents events={data} />
  )
}

export default ResearchContent

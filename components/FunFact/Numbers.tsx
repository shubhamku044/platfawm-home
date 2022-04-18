import styles from '../../styles/components/FunFact/Numbers.module.scss'
import GridBox from './GridBox'

const BoxData = [
  {
    id: 1,
    number: 425,
    description: 'Happy Customers',
  },
  {
    id: 2,
    number: 12,
    description: 'Cups of Coffee',
  },
  {
    id: 3,
    number: 1320,
    description: 'Inovations',
  },
  {
    id: 4,
    number: 860,
    description: 'Great Projects',
  },
]

const Numbers = () => {
  return (
    <div className={styles.container}>
      {BoxData.map(({ id, description, number }) => {
        return <GridBox key={id} description={description} number={number} />
      })}
    </div>
  )
}

export default Numbers

import styles from '../../styles/components/FunFact/GridBox.module.scss'

const GridBox = ({
  description,
  number,
}: {
  description: string
  number: number
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__number}>{number}</div>
      <div className={styles.container__name}>{description}</div>
    </div>
  )
}

export default GridBox

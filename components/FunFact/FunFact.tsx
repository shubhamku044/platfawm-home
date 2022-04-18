import styles from '../../styles/components/FunFact/FunFact.module.scss'
import Numbers from './Numbers'

const FunFact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__heading}>
        <h5>
          Fun <span>Facts</span>
        </h5>
        <p>
          Over the years we have done many things that we are proud of. This
          motivates us to continue looking for new challenges in order to
          improve our services.
        </p>
      </div>
      <Numbers />
    </div>
  )
}

export default FunFact

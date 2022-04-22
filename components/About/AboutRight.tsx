import styles from '../../styles/components/About/AboutRight.module.scss'

const AboutRight = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__about}>
        <h4>About the studio</h4>
        <h3>
          Unlimited Skills for <span>Super Projects.</span>
        </h3>
        <p>
          <span>Web design</span> encompasses many different skills and
          disciplines in the production and maintenance of websites. The
          different areas of web design include web graphic design, interface
          design, including standardized code.
        </p>
        <ul>
          <li>Beautiful and easy to understand UI, professional animations</li>
          <li>
            These advantages are pixel perfect design & clear code delivered
          </li>
          <li>
            Present your services with flexible, convenient and multipurpose
          </li>
        </ul>
        <button>Get the offer &rarr;</button>
      </div>
    </div>
  )
}

export default AboutRight

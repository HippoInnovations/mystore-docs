import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import aiImage from './images/ai.png';


const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mystore is an ONDC network-connected ecosystem built in India for Indian sellers. Mystore is the first ONDC network participant to connect as a Buyer and Seller NP.

      </>
    ),
  },
  // {
  //   title: 'AI-First Ecommerce Ecosystem',
  //   Svg: require('@site/static/img/ai.svg').default,
  //   description: (
  //     <>
  //      Mystore offers agentic AI-powered digital commerce solutions to automate processes, accelerate growth and enhance customer experiences. With intelligent, agentic AI-Powered Ecommerce, we enable merchants and enterprises to hack ecommerce growth by selling smarter, faster and better.


  //      </>
  //   ),
  // },
  {
    title: 'Powered by Storehippo',
    Svg: require('@site/static/img/storehippo_image.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <div className={clsx('col col--4')}>
            <div className="text--center">
              {/* <Svg className={styles.featureSvg} role="img" /> */}
              {/* <img src='/images/ai.png'></img> */}
              <img src={aiImage} alt="AI" className={styles.featureSvg} />

              {/* <Image img={require('@site/static/img/ai.png')} /> */}


            </div>

            <div className="text--center padding-horiz--md">
              <Heading as="h3">AI-First Ecommerce Ecosystem</Heading>
              <p>       Mystore offers agentic AI-powered digital commerce solutions to automate processes, accelerate growth and enhance customer experiences. With intelligent, agentic AI-Powered Ecommerce, we enable merchants and enterprises to hack ecommerce growth by selling smarter, faster and better.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    </>

  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Import your new PNG images
import paymentImage from '@site/static/img/payment3.png';
import useImage from '@site/static/img/easytouse.png';
import documentImage from '@site/static/img/documents.png';

const FeatureList = [
  {
    title: 'Easy to Use',
    image: useImage,
    description: (
      <>
        My abilities allow me to design several <code>modules</code> that assist you in modifying product settings.
      </>
    ),
  },
  {
    title: 'Certification',
    image: documentImage,
    description: (
      <>
        In my <code>discord</code> server you have the right to check all of the vouches.
      </>
    ),
  },
  {
    title: 'Payment Methods',
    image: paymentImage,
    description: (
      <>
        You can make payments using <code>Robux, Giftcards, or Paypal</code>.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

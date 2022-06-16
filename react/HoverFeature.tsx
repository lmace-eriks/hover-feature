import React, { ReactChildren } from 'react';

// Styles
import styles from "./styles.css";

interface HoverFeatureProps {
  children: ReactChildren
}

const HoverFeature: StorefrontFunctionComponent<HoverFeatureProps> = ({ }) => {

  return (
    <div className={styles.hoverFeatureContainer}>
      Hello World!
    </div>
  )
}

HoverFeature.schema = {
  title: 'editor.hoverfeature.title',
  description: 'editor.hoverfeature.description',
  type: 'object',
  properties: {}
}

export default HoverFeature;
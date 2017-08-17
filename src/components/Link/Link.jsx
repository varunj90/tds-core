import React from 'react'
import PropTypes from 'prop-types'

import ChevronLink from './ChevronLink/ChevronLink'
import ButtonLink from './ButtonLink/ButtonLink'
import safeRest from '../../safeRest'
import { warn } from '../../warn'

import styles from './Link.modules.scss'

const getClassName = invert => (invert ? styles.inverted : styles.base)

/**
 * <span class="docs--badge green">new!</span> <span class="docs--badge purple">v0.21.0</span>
 */
const Link = ({ reactRouterLinkComponent, invert, children, ...rest }) => {
  if (!(reactRouterLinkComponent && rest.to)) {
    warn('Link', 'The props `reactRouterLinkComponent` and `to` must be used together.')
  }
  return React.createElement(
    reactRouterLinkComponent || 'a',
    {
      ...safeRest(rest),
      className: getClassName(invert)
    },
    children
  )
}
Link.propTypes = {
  /**
   * Target URL (if using 'reactRouterLinkComponent')
   */
  to: PropTypes.string,
  /**
   * Target URL.
   */
  href: PropTypes.string,
  /**
   * React Router Link component.
   */
  reactRouterLinkComponent: PropTypes.func,
  /**
   * Whether to invert the component styles.
   */
  invert: PropTypes.bool,
  /**
   * Link text.
   */
  children: PropTypes.node.isRequired
}
Link.defaultProps = {
  to: null,
  href: null,
  reactRouterLinkComponent: null,
  invert: false
}

Link.Chevron = ChevronLink
Link.Button = ButtonLink

export default Link

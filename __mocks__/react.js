/*
 * There seems to be an issue with current alpha version of React.
 * It does not trigger useEffect.
 * See: https://github.com/facebook/react/issues/14050
 */
const React = require('react');

module.exports = { ...React, useEffect: React.useLayoutEffect };

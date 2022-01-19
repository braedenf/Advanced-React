/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

Page.propTypes = {
  children: PropTypes.any,
  Component: PropTypes.any,
};

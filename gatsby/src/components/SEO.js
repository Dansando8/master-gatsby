import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      {/* Favicons */}
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <link rel="alternate icon" href="favicon.svg" />
      {/* Metatags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle"/>
      <meta property="og:site-name" content={site.site} key="ogsitename"/>
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}

export default SEO;

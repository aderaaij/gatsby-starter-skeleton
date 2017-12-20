import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../site-config/';
import Favicons from './Favicons';
import TwitterCard from './TwitterCard';
import OGMeta from './OGMeta';

const SEO = () => {
    let currentTitle;
    let currentDescription;
    let currentImage;
    const meta = {
        locale: config.meta.siteLanguage,
        siteName: config.meta.siteName,
    };

    if (config) {
        meta.description = config.meta.siteDescription;
        meta.title = config.meta.siteTitle;
        meta.image = config.meta.siteUrl + config.meta.siteLogo;
        meta.url = config.meta.siteUrl;
        meta.siteColor = config.meta.siteColor;
    }

    return (
        <div>
            <Helmet>
                <title>{currentTitle}</title>
                {/* standard meta stuff */}
                <meta name="description" content={meta.description} />
                <meta name="image" content={meta.image} />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content={meta.siteColor} />
            </Helmet>
            <OGMeta meta={meta} />
            {config.faviconDir &&
            <Favicons meta={meta} />
            }
            {config.contact.twitter &&
            <TwitterCard meta={meta} />
            }
        </div>
    );
};

export default SEO;

SEO.defaultProps = {
    currentDescription: config.meta.siteDescription,
    currentTitle: config.meta.siteTitle,
    currentUrl: config.meta.siteUrl,
    currentImage: config.meta.siteUrl + config.siteLogo,
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../translations';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOFaqItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: SEOFaqItem[];
  schemaType?: 'LegalService' | 'WebPage' | 'ContactPage' | 'AboutPage' | 'FAQPage';
}

const BASE_URL = 'https://www.justiopro.lv';

export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage,
  breadcrumbs,
  faqs,
  schemaType = 'LegalService',
}: SEOHeadProps) {
  const { lang } = useTranslation();
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${BASE_URL}${currentPath === '/' ? '' : currentPath}`;
  const shareImageUrl = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`)
    : `${BASE_URL}/logo%20share/logo_share.png`;

  const fullTitle = title.includes('JustioPro')
    ? title
    : `${title} | JustioPro`;

  const ogLocale = lang === 'en' ? 'en_US' : lang === 'ru' ? 'ru_RU' : 'lv_LV';
  const langCode = lang === 'en' ? 'en-US' : lang === 'ru' ? 'ru-RU' : 'lv-LV';

  useEffect(() => {
    // 1. Document Title & html lang
    document.title = fullTitle;
    document.documentElement.lang = lang;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // 3. Meta Description & Robots
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph Tags
    setMetaTag('property', 'og:site_name', 'JustioPro');
    setMetaTag('property', 'og:locale', ogLocale);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', shareImageUrl);
    setMetaTag('property', 'og:image:secure_url', shareImageUrl);
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:alt', 'JustioPro');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', shareImageUrl);

    // 6. Canonical Link Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }

    // 7. Structured Data (JSON-LD)
    const jsonLdData: Record<string, any>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': `${BASE_URL}/#legalservice`,
        name: 'JustioPro',
        alternateName: 'JustioPro',
        legalName: 'Juridisko pakalpojumu sniedzējs Mag.iur. Kaspars Linters',
        url: BASE_URL,
        logo: `${BASE_URL}/Justiopro-logo.webp`,
        image: `${BASE_URL}/juridiskas-konsultacijas.webp`,
        description:
          'Profesionāli juridiskie pakalpojumi, līgumu sagatavošana un analīze, pārstāvība tiesā, komerctiesības, nekustamo īpašumu darījumi, parādu piedziņa un juridiskās konsultācijas Rīgā un visā Latvijā.',
        telephone: '+371 26841758',
        email: 'info@justiopro.lv',
        priceRange: '€€',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'LV',
          addressLocality: 'Rīga',
          streetAddress: 'Brīvības iela 85',
          postalCode: 'LV-1001',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 56.9587,
          longitude: 24.1275,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: {
          '@type': 'Country',
          name: 'Latvija',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'JustioPro',
        description:
          'Profesionāls juridiskais atbalsts Jūsu biznesa izaugsmei un jebkurai ikdienā risināmai situācijai.',
        publisher: {
          '@id': `${BASE_URL}/#legalservice`,
        },
        inLanguage: langCode,
      },
    ];

    // Add BreadcrumbList schema if breadcrumbs are present
    if (breadcrumbs && breadcrumbs.length > 0) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url.startsWith('http') ? crumb.url : `${BASE_URL}${crumb.url}`,
        })),
      });
    }

    // Add FAQPage schema if faqs are present
    if (faqs && faqs.length > 0) {
      jsonLdData.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);
  }, [fullTitle, description, canonicalUrl, shareImageUrl, breadcrumbs, faqs, schemaType, lang, ogLocale, langCode]);

  return null;
}


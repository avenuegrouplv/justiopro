import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | JustioPro Juridiskie Pakalpojumi`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | JustioPro`);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const shareImageUrl = `${window.location.origin}/logo%20share/logo_share.png`;
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', shareImageUrl);
    }
    let ogImgSecure = document.querySelector('meta[property="og:image:secure_url"]');
    if (ogImgSecure) {
      ogImgSecure.setAttribute('content', shareImageUrl);
    }
  }, [title, description]);

  return null;
}

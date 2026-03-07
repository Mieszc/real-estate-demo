interface ValuationSchemaProps {
    title: string;
    description: string;
    url: string;
    targetUrl: string;
    language: string;
}

export function ValuationSchema({
    title,
    description,
    url,
    targetUrl,
    language
}: ValuationSchemaProps) {
    const defaultData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": url,
        "inLanguage": language,
        "potentialAction": {
            "@type": "AssessAction",
            "target": targetUrl,
            "name": "Get Free Valuation"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultData) }}
        />
    );
}

interface OrganizationSchemaProps {
    name: string;
    description: string;
    url: string;
    logo?: string;
    contactPoint?: string;
    areaServed?: string;
}

export function OrganizationSchema({
    name,
    description,
    url,
    logo,
    contactPoint,
    areaServed
}: OrganizationSchemaProps) {
    const defaultData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "description": description,
        "url": url,
        ...(logo && { "logo": logo }),
        ...(contactPoint && {
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contactPoint,
                "contactType": "customer service",
                ...(areaServed && { "areaServed": areaServed })
            }
        })
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(defaultData) }}
        />
    );
}


import React from 'react'

export interface BreadcrumbItem {
  name: string
  url: string
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[], id?: string) {
  return {
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function BreadcrumbSchema({ items, id }: { items: BreadcrumbItem[]; id?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    ...buildBreadcrumbSchema(items, id),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default BreadcrumbSchema


import React from 'react'

import { useLocale } from '../i18n/LocaleContext'

function SummaryRow({ term, definition }) {
  return (
    <div>
      <dt>{term}</dt>
      <dd>{definition}</dd>
    </div>
  )
}

function SummaryCard({ name, computerType, mpType, language }) {
  const { strings } = useLocale()
  const { summaryCard } = strings

  return (
    <div className="summary-card">
      <h3>{name}</h3>
      <dl>
        {computerType && (
          <SummaryRow term={summaryCard.computer} definition={computerType} />
        )}
        {mpType && <SummaryRow term={summaryCard.microprocessor} definition={mpType} />}
        {language && <SummaryRow term={summaryCard.language} definition={language} />}
      </dl>
    </div>
  )
}

export default SummaryCard

import { privacyPolicyData } from '@/constants/privacy_policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka Prywatności | SONAMED - Klinika Dentystyczna',
  description:
    'Polityka prywatności i ochrony danych osobowych SONAMED. Dowiedz się, jak przetwarzamy i chronimy Twoje dane zgodnie z RODO.',
  keywords:
    'polityka prywatności, RODO, ochrona danych, SONAMED, dane osobowe, prywatność',
  openGraph: {
    title: 'Polityka Prywatności | SONAMED',
    description:
      'Polityka prywatności i ochrony danych osobowych SONAMED. Dowiedz się, jak przetwarzamy i chronimy Twoje dane zgodnie z RODO.',
    type: 'website',
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero sekcja */}
      <section className="bg-gradient-to-br from-[#3C8C7D] to-[#72C7C2] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {privacyPolicyData.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-center">
            {privacyPolicyData.companyInfo.shortName}
          </p>
        </div>
      </section>

      {/* Treść polityki */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            {privacyPolicyData.sections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {section.id}. {section.title}
                </h2>

                {/* Zwykła treść */}
                {section.content && (
                  <div className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {section.content.split('**').map((part, index) => {
                      // Pogrubione fragmenty
                      if (index % 2 === 1) {
                        return (
                          <strong key={index} className="font-semibold">
                            {part}
                          </strong>
                        );
                      }
                      return <span key={index}>{part}</span>;
                    })}
                  </div>
                )}

                {/* Definicje */}
                {section.definitions && (
                  <dl className="space-y-4">
                    {section.definitions.map((def, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-[#3C8C7D] pl-4"
                      >
                        <dt className="font-semibold text-gray-900 mb-1">
                          {def.term}
                        </dt>
                        <dd className="text-gray-700">{def.definition}</dd>
                        {def.contact && (
                          <dd className="mt-2 text-sm text-gray-600">
                            <strong>Kontakt:</strong>
                            <ul className="list-disc list-inside ml-4 mt-1">
                              {def.contact.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                )}

                {/* Kategorie */}
                {section.categories && (
                  <div className="space-y-4">
                    {section.categories.map((cat, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {cat.category}
                        </h3>
                        <p className="text-gray-700">{cat.data}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Okresy przechowywania */}
                {section.periods && (
                  <div className="space-y-3">
                    {section.periods.map((period, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-start gap-2"
                      >
                        <span className="font-semibold text-gray-900 min-w-[200px]">
                          {period.dataType}:
                        </span>
                        <span className="text-gray-700">{period.period}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Prawa pacjentów */}
                {section.rights && (
                  <div>
                    <ul className="space-y-2 mb-4">
                      {section.rights.map((right, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#3C8C7D] mr-2 mt-1">•</span>
                          <span className="text-gray-700">{right}</span>
                        </li>
                      ))}
                    </ul>
                    {section.additionalInfo && (
                      <p className="text-gray-700 mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        {section.additionalInfo}
                      </p>
                    )}
                  </div>
                )}

                {/* Odbiorcy danych */}
                {section.recipients && (
                  <div>
                    <ul className="space-y-2">
                      {section.recipients.map((recipient, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#3C8C7D] mr-2 mt-1">•</span>
                          <span className="text-gray-700">{recipient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Informacje o firmie */}
          <div className="mt-12 bg-[#3C8C7D]/10 rounded-lg p-6 md:p-8 border border-[#3C8C7D]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Dane kontaktowe Administratora
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">
                {privacyPolicyData.companyInfo.name}
              </p>
              <p>
                {privacyPolicyData.companyInfo.address.street}
                <br />
                {privacyPolicyData.companyInfo.address.postalCode}{' '}
                {privacyPolicyData.companyInfo.address.city}
              </p>
              <p className="pt-2">
                <strong>Telefon:</strong>{' '}
                <a
                  href={`tel:${privacyPolicyData.companyInfo.contact.phone}`}
                  className="text-[#3C8C7D] hover:underline"
                >
                  {privacyPolicyData.companyInfo.contact.phone}
                </a>
              </p>
              <p>
                <strong>Email (rejestracja wizyt):</strong>{' '}
                <a
                  href={`mailto:${privacyPolicyData.companyInfo.contact.emailPrimary}`}
                  className="text-[#3C8C7D] hover:underline"
                >
                  {privacyPolicyData.companyInfo.contact.emailPrimary}
                </a>
              </p>
              <p>
                <strong>Email (kontakt ogólny):</strong>{' '}
                <a
                  href={`mailto:${privacyPolicyData.companyInfo.contact.emailSecondary}`}
                  className="text-[#3C8C7D] hover:underline"
                >
                  {privacyPolicyData.companyInfo.contact.emailSecondary}
                </a>
              </p>
              <div className="pt-4 text-sm">
                <p>
                  <strong>KRS:</strong>{' '}
                  {privacyPolicyData.companyInfo.registrationData.krs}
                </p>
                <p>
                  <strong>NIP:</strong>{' '}
                  {privacyPolicyData.companyInfo.registrationData.nip}
                </p>
                <p>
                  <strong>REGON:</strong>{' '}
                  {privacyPolicyData.companyInfo.registrationData.regon}
                </p>
              </div>
            </div>
          </div>

          {/* Data ostatniej aktualizacji */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


const TermGeneral = ({ currentSectionContent, ids, idSubitems }: { currentSectionContent: any, ids: string[], idSubitems: string[] }) => {
    return (
        <div className="lg:w-3/4">
            <div className="bg-opacity-40 backdrop-blur-sm rounded-lg lg:p-8 px-4">

                {/* Header */}
                {currentSectionContent.header?.title && (
                    <h2 className="text-3xl font-semibold text-[#FFF] mb-6">
                        {currentSectionContent.header.title}
                    </h2>
                )}
                {currentSectionContent.header?.lastUpdated && (
                    <p className="text-gray-300 text-sm mb-8">{currentSectionContent.header.lastUpdated}</p>
                )}
                {currentSectionContent.header?.introSection && (
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-[#FFF] mb-4">{currentSectionContent.header.introSection.title}</h3>
                        {currentSectionContent.header.introSection.paragraphs.map((p: string, i: number) => (
                            <p key={i} className="text-[#AEAEAE] mb-4 leading-relaxed text-sm">{p}</p>
                        ))}
                    </div>
                )}

                {/* Main title */}
                <h3 className="text-xl font-semibold text-[#FFF] mb-4">{currentSectionContent.title}</h3>

                {/* Sections */}
                <div className="space-y-8">
                    {currentSectionContent.sections.map((section: any, idx: number) => (
                        <div key={idx} id={ids[idx + 1]} className="text-sm">
                            <h4 className="font-semibold text-[#FFF] mb-3">{section.title}</h4>


                            {section.content.map((contentItem: any, cIdx: number) => {
                                return (
                                    <div key={cIdx} className="mb-6">
                                        {contentItem.subsection && (
                                            <h5 className="font-semibold text-[#FFF] mb-2">{contentItem.subsection}</h5>
                                        )}

                                        {contentItem.paragraph && (
                                            <p className="text-[#AEAEAE] mb-2 leading-relaxed">{contentItem.paragraph}</p>
                                        )}

                                        {contentItem.subItems && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.subItems.map((item: string, i: number) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.definitions && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.definitions.map((def: string, i: number) => (
                                                    <li key={i}>{def}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.services && (
                                            <ul className="text-[#AEAEAE] mb-2">
                                                {contentItem.services.map((service: any, i: number) => (
                                                    <li key={i} className="mb-4">
                                                        <p className="text-[#FFF] font-semibold mb-1">{service.name}</p>
                                                        <ul className="list-disc ml-6 text-[#AEAEAE]">
                                                            {service.description.map((desc: string, j: number) => (
                                                                <li key={j}>{desc}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}


                                        {contentItem.restrictions && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.restrictions.map((r: string, i: number) => (
                                                    <li key={i}>{r}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.requirements && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.requirements.map((req: string, i: number) => (
                                                    <li key={i}>{req}</li>
                                                ))}
                                            </ul>
                                        )}


                                        {contentItem.steps && (
                                            <ol className="list-decimal text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.steps.map((step: string, i: number) => (
                                                    <li key={i}>{step}</li>
                                                ))}
                                            </ol>
                                        )}

                                        {contentItem.components && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.components.map((comp: string, i: number) => (
                                                    <li key={i}>{comp}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.methods && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.methods.map((m: string, i: number) => (
                                                    <li key={i}>{m}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.situations && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.situations.map((sit: string, i: number) => (
                                                    <li key={i}>{sit}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.refund && (
                                            <div className="mb-6">
                                                <ul className="space-y-6 text-sm text-[#AEAEAE]">
                                                    {contentItem.refund.map((refundItem: any, i: number) => (
                                                        <li key={i}>
                                                            <p className="text-[#FFF] font-semibold mb-1">{refundItem.type}</p>
                                                            <p className="mb-2">{refundItem.paragraph}</p>
                                                            {refundItem['description-refund'] && (
                                                                <ul className="list-disc ml-6">
                                                                    {refundItem['description-refund'].map((desc: string, j: number) => (
                                                                        <li key={j}>{desc}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}


                                        {contentItem.feeTable && (
                                            <div className="overflow-x-auto border border-gray-700 rounded mt-4">
                                                <table className="min-w-full text-left text-[#AEAEAE] text-sm">
                                                    <thead className="bg-[#1f1f1f] text-white">
                                                        <tr>
                                                            {contentItem.feeTable.headers.map((header: string, hIdx: number) => (
                                                                <th key={hIdx} className="px-4 py-2 border-b border-gray-700">
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {contentItem.feeTable.rows.map((row: string[], rIdx: number) => (
                                                            <tr key={rIdx} className="hover:bg-[#2a2a2a]">
                                                                {row.map((cell: string, cIdx: number) => (
                                                                    <td key={cIdx} className="px-4 py-2 border-b border-gray-700">
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {contentItem.fees && (
                                            <ul className="list-disc text-[#AEAEAE] ml-6 mb-2">
                                                {contentItem.fees.map((fee: string, i: number) => (
                                                    <li key={i}>{fee}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {contentItem.paragraph2 && (
                                            <p className="text-[#AEAEAE] mb-2 leading-relaxed">{contentItem.paragraph2}</p>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TermGeneral
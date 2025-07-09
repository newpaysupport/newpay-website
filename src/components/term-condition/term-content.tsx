
const TermContent = ({ content, idPivacy, idCommission }: { content: any, idPivacy: string[], idCommission: string[] }) => {

    if (!content) return null;
    const idArray = content.title.toLowerCase().includes('privacy') ? idPivacy : idCommission;

    return (
        <div className="lg:w-3/4">
            <div className="bg-opacity-40 backdrop-blur-sm rounded-lg p-8">
                {/* Content Sections */}
                <div className="space-y-8">
                    <section>
                        <h3 className="text-xl font-semibold text-[#FFF] mb-4">{content.title}</h3>

                        <div className="space-y-6">
                            {content.sections?.map((section: any, index: number) => (
                                <div
                                    className="text-sm"
                                    key={index}
                                    id={idArray[index]}
                                >
                                    <h4 className="font-semibold text-[#FFF] mb-3">{section.title}</h4>

                                    {/* Render subsections */}
                                    {section.subsections ? (
                                        section.subsections.map((sub: any, subIdx: number) => {
                                            return (
                                                <div key={subIdx} className="mb-6">
                                                    <h5 className="font-semibold text-[#FFF] mb-2">{sub.title}</h5>
                                                    {sub.content.map((c: any, i: number) => (
                                                        <div key={i} className="mb-4">
                                                            {c.paragraph && (
                                                                <p className="text-[#AEAEAE] mb-2 leading-relaxed">{c.paragraph}</p>
                                                            )}
                                                            {c.subItems && c.subItems.map((subItem: string, j: number) => (
                                                                <li key={j} className="text-[#AEAEAE] list-disc ml-6">{subItem}</li>
                                                            ))}
                                                            {c.table && (
                                                                <div className="overflow-x-auto border border-gray-700 rounded mt-4">
                                                                    <table className="min-w-full text-left text-[#AEAEAE] text-sm">
                                                                        <thead className="bg-[#1f1f1f] text-white">
                                                                            <tr>
                                                                                {c.table.headers.map((header: string, hIdx: number) => (
                                                                                    <th key={hIdx} className="px-4 py-2 border-b border-gray-700">{header}</th>
                                                                                ))}
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {c.table.rows.map((row: string[], rIdx: number) => (
                                                                                <tr key={rIdx} className="hover:bg-[#2a2a2a]">
                                                                                    {row.map((cell: string, cIdx: number) => (
                                                                                        <td key={cIdx} className="px-4 py-2 border-b border-gray-700">{cell}</td>
                                                                                    ))}
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        // Render if no has subsections
                                        section.content.map((c: any, idx: number) => {
                                            return (
                                                <div key={idx} className="mb-4">
                                                    {c.paragraph && (
                                                        <p className="text-[#AEAEAE] mb-2 leading-relaxed">{c.paragraph}</p>
                                                    )}
                                                    {c.requirements && (
                                                        <div className="mb-6">
                                                            <ul className="space-y-4 text-[#AEAEAE] text-sm">
                                                                {c.requirements.map((req: any, i: number) => (
                                                                    <li key={i}>
                                                                        <p className="text-[#FFF] font-semibold mb-1">{req.paragraph}</p>
                                                                        <p className="leading-relaxed">{req.paragraph2}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {c.subItems && c.subItems.map((subItem: string, j: number) => (
                                                        <li key={j} className="text-[#AEAEAE] list-disc ml-6">{subItem}</li>
                                                    ))}
                                                    {c.definitions && (
                                                        <ul className="list-disc text-[#AEAEAE] ml-6 mt-2 space-y-1">
                                                            {c.definitions.map((def: string, dIdx: number) => (
                                                                <li key={dIdx}>{def}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {c.services && (
                                                        <ul className="list-disc text-[#AEAEAE] ml-6 mt-2 space-y-4">
                                                            {c.services.map((service: any, sIdx: number) => (
                                                                <li key={sIdx}>
                                                                    <p className="text-[#FFF] font-semibold mb-1">{service.name}</p>
                                                                    <p>{service.description}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {c.restrictions && (
                                                        <ul className="list-disc text-[#AEAEAE] ml-6 mt-2 space-y-1">
                                                            {c.restrictions.map((r: string, rIdx: number) => (
                                                                <li key={rIdx}>{r}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermContent;
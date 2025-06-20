import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-[32px] font-bold text-[#1B1B1B] mb-5 mt-0">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-bold text-[#1B1B1B] mb-6 mt-0">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold text-[#1B1B1B] mb-6 mt-0">
                {children}
            </h3>
        ),

        // Custom paragraph styles
        p: ({ children }) => (
            <p className="text-[#1B1B1B] text-base font-normal mb-8">
                {children}
            </p>
        ),

        // Custom strong/bold styles
        strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">
                {children}
            </strong>
        ),

        // Custom list styles
        ul: ({ children }) => (
            <ul className="space-y-2 mb-4 ml-6 list-disc">
                {children}
            </ul>
        ),
        li: ({ children }) => (
            <li className="text-gray-700">
                {children}
            </li>
        ),
        ol: ({ children }) => (
            <ol className="space-y-2 mb-4 ml-6 list-decimal">
                {children}
            </ol>
        ),

        // Custom table styles
        table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse border border-gray-300">
                    {children}
                </table>
            </div>
        ),
        thead: ({ children }) => (
            <thead className="bg-gray-50">
                {children}
            </thead>
        ),
        th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-3 text-gray-700">
                {children}
            </td>
        ),
        ...components,
    }
}

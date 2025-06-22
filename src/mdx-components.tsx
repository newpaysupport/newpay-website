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
        hr: () => (
            <hr className="my-8 border-t border-gray-300" />
        ),
        // Blockquote styles
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
                {children}
            </blockquote>
        ),

        // Code styles
        code: ({ children }) => (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
                {children}
            </code>
        ),

        // Pre-formatted code blocks
        pre: ({ children }) => (
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                {children}
            </pre>
        ),

        // Links
        a: ({ children, href }) => (
            <a
                href={href}
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),

        // Custom table styles - UPDATED
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
        // ADD THIS - Missing tbody component
        tbody: ({ children }) => (
            <tbody>
                {children}
            </tbody>
        ),
        tr: ({ children }) => (
            <tr className="hover:bg-gray-50">
                {children}
            </tr>
        ),
        th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900 text-center">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-3 text-gray-700 text-center">
                {children}
            </td>
        ),
        wrapper: ({ children }) => (
            <div className="prose max-w-none">
                {children}
            </div>
        ),

        ...components,
    }
}

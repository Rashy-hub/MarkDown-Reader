import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownReader = () => {
    const [markdown, setMarkdown] = useState('')

    const handleInputChange = (e) => {
        setMarkdown(e.target.value)
    }

    const insertMarkdownSyntax = (syntax) => {
        setMarkdown((prevMarkdown) => `${prevMarkdown}${syntax}`)
    }

    const resetMarkdown = () => {
        setMarkdown('')
    }

    return (
        <div className="flex flex-col md:flex-row items-start justify-center p-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col space-y-2">
                <button
                    onClick={resetMarkdown}
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                >
                    Reset
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('# This is my H1 title\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    H1
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('## This is my H2 title\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    H2
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('### This is my H3 title\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    H3
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('**This is bold text**\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Bold
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('_This is italic text_\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Italic
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('---\n\nThis is a line rule\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Line Rule
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('> This is a blockquote\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Block Quote
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax(
                            '1. First item\n2. Second item\n\n'
                        )
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Ordered List
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('- First item\n- Second item\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Unordered List
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax('```\nThis is some code\n```\n\n')
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Code
                </button>
                <button
                    onClick={() =>
                        insertMarkdownSyntax(
                            '[This is a link](http://example.com)\n\n'
                        )
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                    Link
                </button>
            </div>

            <textarea
                className="w-full md:w-1/2 h-full min-h-[50vh] p-4 border-2 border-gray-300 rounded shadow resize-none"
                value={markdown}
                onChange={handleInputChange}
                placeholder="Write your markdown here..."
            />

            <div className="w-full md:w-1/2 h-full min-h-[50vh] p-4 border-2 border-gray-300 rounded shadow overflow-y-auto bg-white">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="prose max-w-none"
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkdownReader

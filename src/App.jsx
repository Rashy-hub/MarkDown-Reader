import './App.css'

import Header from './containers/Header'
import Footer from './containers/Footer'
import MarkdownReader from './components/MarkDown'

function App() {
    const title = 'MarkDown Reader App'

    return (
        <>
            <Header title={title} />
            <main className="container mx-auto my-10 px-4">
                <div className="container mx-auto p-4">
                    <MarkdownReader />
                </div>
            </main>
            <Footer title={title} />
        </>
    )
}

export default App

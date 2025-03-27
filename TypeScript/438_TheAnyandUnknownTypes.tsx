////////////////
//438. The "Any" and "Unknown" Types

interface Book {
    title: string;
}

async function fetchBook(): Promise<Book> {
    const res = await fetch('/book');
    const data: unknown = await res.json();

    if(data && typeof data === 'object' && 'title' in data && typeof data.title === 'string') {
        return data as Book;
    }

    throw new Error('Expected to get a book, but didnt')
    // return data as Book;
}

async function run() {
    const book = await fetchBook();
}

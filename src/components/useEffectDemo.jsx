import { ChevronFirst, ChevronLast } from "lucide-react";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseEffectDemo() {
  const [quotes, setQuotes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 5;

  const fetchQuotes = async () => {
    try {
      const skip = (page - 1) * limit;
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      setQuotes(data.quotes);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  const codeString = `import { useState, useEffect } from "react";

export default function Demo() {
  const [quotes, setQuotes] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 5;

  const fetchQuotes = async () => {
    try {
      const skip = (page - 1) * limit;
      const response = await fetch(
        \`https://dummyjson.com/quotes?limit=\${limit}&skip=\${skip}\`
      );
      const data = await response.json();
      setQuotes(data.quotes);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      -- Followed JSX --
    </div>
  )
}`;
  return (
    <div className="hook-demo">
      <h2>useEffect Demo</h2>
      <p>
        The <code>useEffect</code> hook lets you perform side effects in
        function components. It runs after every render by default, but can be
        configured to run only when certain values change.
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
      <div className="api-example">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="table-header">
              <h1 className="table-title">Inspirational Quotes</h1>
              <p className="table-subtitle">
                A collection of wisdom and motivation
              </p>
            </div>
            <div className="table-container">
              <table border="1" cellPadding="10">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Quote</th>
                    <th>Author</th>
                  </tr>
                </thead>
                <tbody>
                  {quotes.map((quote) => (
                    <tr key={quote.id}>
                      <td>{quote.id}</td>
                      <td>{quote.quote}</td>
                      <td>{quote.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination">
              <button
                className="back-button"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                <ChevronFirst size={20} />
                Previous
              </button>
              <span style={{ margin: "0 10px" }}>
                Page {page} of {totalPages}
              </span>
              <button
                className="back-button"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
              >
                Next
                <ChevronLast size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

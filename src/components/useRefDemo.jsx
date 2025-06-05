import { CircleChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function UseRefDemo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const fetchResults = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?limit=5&q=${searchTerm}`
      );
      const data = await response.json();
      setResults(data.products || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (value.trim()) {
        fetchResults(value.trim());
      } else {
        setResults([]);
      }
    }, 500);
  };

  const codeString = `import { useState, useEffect } from "react";

export default function Demo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const fetchResults = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(
        \`https://dummyjson.com/products/search?limit=5&q=\${searchTerm}\`
      );
      const data = await response.json();
      setResults(data.products || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (value.trim()) {
        fetchResults(value.trim());
      } else {
        setResults([]);
      }
    }, 500);
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      -- Followed JSX --
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="styled-input"
      />
    </div>
  )
}`;

  return (
    <div className="hook-demo">
      <h2>useRef Demo</h2>
      <p>
        The <code>useRef</code> lets you create a mutable reference to store a
        value that persists across renders without causing re-renders when it
        changes.
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
      <div className="counter-example">
        <h3>Debounced Search</h3>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="styled-input"
        />
        {loading ? (
          <p>Loading...</p>
        ) : results.length > 0 ? (
          <ul className="results-list">
            {results.map((result) => (
              <li key={result.id}>
                <CircleChevronRight
                  size={16}
                  style={{ marginRight: 8, color: "var(--primary)" }}
                />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Type here to search and retrieve results !</p>
        )}
      </div>
    </div>
  );
}

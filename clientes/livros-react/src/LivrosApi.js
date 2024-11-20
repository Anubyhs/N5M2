import React from 'react';

const LivrosApi = () => {
    const [livros, setLivros] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch('/api/livros')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                if (response.headers.get('content-type') !== 'application/json') {
                    throw new Error('Invalid content-type');
                }
                return response.json();
            })
            .then(data => setLivros(data))
            .catch(error => setError(error.message));
    }, []);

    return (
        <div>
            <h2>API de Livros</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {livros.map((livro, index) => (
                        <li key={index}>{livro.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LivrosApi;

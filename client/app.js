async function fetchGreeting() {
    const resp = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: 'query { greeting }' })
    });

    const { data } = await resp.json();
    return data
}

fetchGreeting().then((data) => {
    document.getElementById('greeting').textContent = data.greeting;
})
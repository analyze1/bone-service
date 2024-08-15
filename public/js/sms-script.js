document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copyButton');
    const curlCommand = document.getElementById('curlCommand');

    copyButton.addEventListener('click', () => {
        curlCommand.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    });

    fetch('/api/sms/list', {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            const serviceList = document.getElementById('serviceList');
            data.forEach(service => {
                const card = document.createElement('div');
                card.className = 'bg-white border border-gray-200 rounded-lg shadow-md p-6';

                const title = document.createElement('h2');
                title.className = 'text-xl font-semibold text-gray-800 mb-2';
                title.textContent = `Service Name: ${service.title}`;

                const description = document.createElement('p');
                description.className = 'text-gray-600';
                description.textContent = `Description: ${service.description}`;

                card.appendChild(title);
                card.appendChild(description);
                serviceList.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching services:', error);
        });
});
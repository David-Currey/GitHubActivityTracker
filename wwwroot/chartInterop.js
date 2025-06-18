window._charts = window._charts || {};

window.renderEventChart = (ctxId, labels, counts) => {
    const existing = window._charts[ctxId];
    if (existing) {
        existing.destroy();
    }

    const ctx = document.getElementById(ctxId).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Commits by Hour (UTC)',
                data: counts,
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Hour of Day' }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Number of Commits' }
                }
            }
        }
    });

    window._charts[ctxId] = chart;
};

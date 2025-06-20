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
                backgroundColor: '#1F6FEB', 
                borderColor: '#39C5BB',    
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    ticks: {
                        color: '#F0F6FC' // text color
                    },
                    title: {
                        display: true,
                        text: 'Hour of Day',
                        color: '#F0F6FC'
                    },
                    grid: {
                        color: '#21262D'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#F0F6FC'
                    },
                    title: {
                        display: true,
                        text: 'Number of Commits',
                        color: '#F0F6FC'
                    },
                    grid: {
                        color: '#21262D'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#F0F6FC'
                    }
                },
                tooltip: {
                    backgroundColor: '#161B22',
                    titleColor: '#F0F6FC',
                    bodyColor: '#F0F6FC',
                    borderColor: '#39C5BB',
                    borderWidth: 1
                }
            }
        }
    });

    window._charts[ctxId] = chart;
};

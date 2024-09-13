document.addEventListener('DOMContentLoaded', () => {
    // Element references
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section');
    const drugForm = document.getElementById('drug-form');
    const drugList = document.getElementById('drug-table');
    const modal = document.getElementById('drug-modal');
    const addDrugBtn = document.getElementById('add-drug-btn');
    const closeModal = document.getElementById('close-modal');
    const toggleThemeBtn = document.getElementById('toggle-theme');
    const body = document.body;

    // Dynamic Content
    const noticeBoard = document.getElementById('notice-board');
    const updatesList = document.getElementById('updates-list');

    // Sample Notices and Updates
    const notices = [
        'Annual maintenance scheduled for 15th September.',
        'Stock count to be conducted on 1st October.',
        'New drug regulation policies have been implemented.',
    ];

    const updates = [
        'System downtime on 10th September for updates.',
        'New feature: Drug expiry alerts added.',
        'Vendor performance tracking is now live.',
    ];

    // Render Notices
    notices.forEach(notice => {
        const li = document.createElement('li');
        li.textContent = notice;
        noticeBoard.appendChild(li);
    });

    // Render Updates
    updates.forEach(update => {
        const li = document.createElement('li');
        li.textContent = update;
        updatesList.appendChild(li);
    });

    // Tab Navigation
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.add('hidden'));
            tab.classList.add('active');
            sections[index].classList.remove('hidden');
        });
    });

    // Open and Close Modal
    addDrugBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.classList.add('hidden');
    });

    // Add Drug
    drugForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        const vendor = document.getElementById('vendor').value;
        const expirationDate = document.getElementById('expirationDate').value;
        const location = document.getElementById('location').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="py-3 px-4">${name}</td>
            <td class="py-3 px-4">${quantity}</td>
            <td class="py-3 px-4">${vendor}</td>
            <td class="py-3 px-4">${expirationDate}</td>
            <td class="py-3 px-4">${location}</td>
            <td class="py-3 px-4">
                <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Remove</button>
            </td>
        `;
        drugList.appendChild(newRow);
        modal.classList.remove('active');
        modal.classList.add('hidden');
        drugForm.reset();
    });

    // Toggle Dark Mode
    toggleThemeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
    });

    // Initialize Charts (for Reports Section)
    const ctx = document.getElementById('reportsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Drug A', 'Drug B', 'Drug C'],
            datasets: [{
                label: '# of Usage',
                data: [12, 19, 3],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.getElementById('chat-button').addEventListener('click', function () {
    document.getElementById('chat-box').style.display = 'block';
  });
  
  document.getElementById('close-chat').addEventListener('click', function () {
    document.getElementById('chat-box').style.display = 'none';
  });
  

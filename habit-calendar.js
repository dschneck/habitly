class HabitCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.createTable();
    }

    createTable() {
        const table = document.createElement('table');
        table.setAttribute('role', 'grid');
        table.setAttribute('aria-readonly', 'true');
        table.style.borderSpacing = '3px';
        table.style.overflow = 'hidden';
        table.style.position = 'relative';

        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        // ... Add header cells for each month (similar to your example) ...
        // Example for January
        const janCell = document.createElement('td');
        janCell.colSpan = 4;
        janCell.className = 'ContributionCalendar-label';
        headerRow.appendChild(janCell);
        // Repeat for other months...

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');

        // Add styles for hover effect
        const style = document.createElement('style');
        style.textContent = `
            .ContributionCalendar-day {
                transition: background-color 1.0s;
                width: 10px;
                height: 10px;
                border-radius: 4px;
                background-color: white;
            }
            .ContributionCalendar-day:hover {
                background-color: #efd9ce; /* Hover color */
            }
            .clicked {
                background-color: #efd9ce; /* Clicked color */
            }
        `;
        this.shadowRoot.appendChild(style);

        for (let i = 0; i < 7; i++) { // For each day of the week
            const row = document.createElement('tr');
            for (let j = 0; j < 52; j++) { // For each week
                const cell = document.createElement('td');
                cell.className = 'ContributionCalendar-day';

                // Add click effect
                cell.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent event bubbling
                    cell.classList.add('clicked'); // Mark as clicked
                    console.log('Cell clicked:', cell); // Debugging log
                });

                // Debugging: Confirm event listener is added
                console.log('Event listener added to cell:', cell);
                
                // Add any necessary attributes or data here
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);

        this.shadowRoot.appendChild(table);
    }
}

customElements.define('habit-calendar', HabitCalendar);
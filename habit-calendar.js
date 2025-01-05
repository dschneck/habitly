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
                transition: background-color 0.3s;
            }
            .ContributionCalendar-day:hover {
                background-color: lightblue; /* Hover color */
            }
            .clicked {
                background-color: blue; /* Clicked color */
            }
        `;
        this.shadowRoot.appendChild(style);

        for (let i = 0; i < 7; i++) { // For each day of the week
            const row = document.createElement('tr');
            for (let j = 0; j < 52; j++) { // For each week
                const cell = document.createElement('td');
                cell.className = 'ContributionCalendar-day';
                cell.style.width = '10px';
                cell.style.height = '10px';
                cell.style.backgroundColor = 'white';

                // Add click effect
                cell.addEventListener('click', () => {
                    cell.classList.add('clicked'); // Mark as clicked
                });

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
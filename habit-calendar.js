class HabitCalendar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.color = this.getAttribute('color');
        this.cardId = this.getAttribute('cardId');

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
                width: 10px;
                height: 10px;
                border-radius: 4px;
                background-color: white;
            }
            .ContributionCalendar-day:hover {
                background-color: ${this.color}; /* Hover color */
            }
            .clicked {
                background-color: ${this.color}; /* Clicked color */
            }
        `;
        this.shadowRoot.appendChild(style);

        // Load state from localStorage using a unique key for each card
        const savedState = JSON.parse(localStorage.getItem(`habitCalendarState-${this.cardId}`)) || {};

        for (let i = 0; i < 7; i++) { // For each day of the week
            const row = document.createElement('tr');
            for (let j = 0; j < 52; j++) { // For each week
                const cell = document.createElement('td');
                cell.className = 'ContributionCalendar-day';

                // Check if the cell was previously clicked
                if (savedState[`${i}-${j}`]) {
                    cell.classList.add('clicked'); // Restore clicked state
                }

                // Add click effect
                cell.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent event bubbling
                    cell.classList.toggle('clicked'); // Toggle clicked state

                    // Save the state in localStorage using the unique key
                    savedState[`${i}-${j}`] = cell.classList.contains('clicked');
                    localStorage.setItem(`habitCalendarState-${this.cardId}`, JSON.stringify(savedState));
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
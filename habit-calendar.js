class HabitCalendar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.createGrid();
    }

    createGrid() {
        const gridContainer = document.createElement('div');
        gridContainer.style.display = 'grid';
        gridContainer.style.gridTemplateColumns = 'repeat(52, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(7, 1fr)';
        gridContainer.style.gap = '2px';
        gridContainer.style.width = '50%';
        gridContainer.style.height = '90%';

        for (let i = 0; i < 7 * 52; i++) {
            const square = document.createElement('div');
            square.style.width = '8px';
            square.style.height = '8px';
            square.style.borderRadius = '2px';
            square.style.backgroundColor = '#e0e0e0';
            gridContainer.appendChild(square);
        }

        this.shadowRoot.appendChild(gridContainer);
    }
}

customElements.define('habit-calendar', HabitCalendar);
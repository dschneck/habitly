class HabitCard extends HTMLElement {
    constructor() {
      super(); // Always call super() in the constructor.
      this.title = this.getAttribute('title');
      this.description = this.getAttribute('description');
      // Attach a shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
        
      const color = this.getAttribute('color') || '#efd9ce';

      // Create the card container
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
  
      // Add title and description
      const title = document.createElement('h2');
      title.textContent = this.title;
      
      const description = document.createElement('p');
      description.textContent = this.description;

      const calendar = document.createElement('habit-calendar');
      calendar.setAttribute('class', 'calendar');
      calendar.setAttribute('color', color);
      calendar.setAttribute('cardId', this.title);
      calendar.style.margin = '10px';
      calendar.style.display = 'block';
  
      // Create a container for title and description
      const titleDescriptionContainer = document.createElement('div');
      titleDescriptionContainer.setAttribute('class', 'title-description');

      // Add title and description to the container
      titleDescriptionContainer.appendChild(title);
      titleDescriptionContainer.appendChild(description);

      // Append the title-description container and calendar to the card
      card.appendChild(titleDescriptionContainer);
      card.appendChild(calendar);
      
      // Update styles to align title and description on the same line
      const style = document.createElement('style');
      style.textContent = `
        .card {
          display: flex;
          flex-direction: column; /* Stack items vertically */
          background-color: #efd9ce;
          margin: 32px; /* Add margin around the card */
          border-radius: 8px;
          align-items: center; /* Center items horizontally */
        }
        .title-description {
          display: flex;
          align-items: center; /* Vertically aligns the items */
          gap: 10px; /* Adds space between the h2 and p elements (optional) */
        }

        .title-description h2 {
          margin: 0; /* Remove default margin to avoid misalignment */
        }

        .title-description p {
          margin: 0; /* Remove default margin to avoid misalignment */
          color: #666; /* Keep your existing color */
        }
      `;
  
      // Attach styles and card to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(card);
    }
  }
  
  // Define the custom element
  customElements.define('habit-card', HabitCard);
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
          margin: 16px; /* Add margin around the card */

        }
        .title-description {
          display: flex; /* Use flexbox for title and description */
          align-items: left; /* Center items vertically */
          justify-content: space-between; /* Space between title and description */
        }
        .title-description h2 {
          margin: 0 8px 0 0; /* Add margin to the right */
          font-size: 18px;
          color: #333;
        }
        .title-description p {
          margin: 0;
          color: #666;
        }
      `;
  
      // Attach styles and card to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(card);
    }
  }
  
  // Define the custom element
  customElements.define('habit-card', HabitCard);
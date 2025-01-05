class HabitCard extends HTMLElement {
    constructor() {
      super(); // Always call super() in the constructor.
  
      // Attach a shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create the card container
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
  
      // Add title and description
      const title = document.createElement('h2');
      title.textContent = this.getAttribute('title');
      
      const description = document.createElement('p');
      description.textContent = this.getAttribute('description');
  
      // Append elements to the card
      card.appendChild(title);
      card.appendChild(description);
  
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        .card {
          padding: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin: 8px 0;
          background-color: #f9f9f9;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .card h2 {
          margin: 0 0 8px;
          font-size: 18px;
          color: #333;
        }
        .card p {
          margin: 0;
          color: #8F3985
        }
      `;
  
      // Attach styles and card to shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(card);
    }
  }
  
  // Define the custom element
  customElements.define('habit-card', HabitCard);
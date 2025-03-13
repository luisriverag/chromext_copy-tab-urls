document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({}, (tabs) => {
      const list = document.getElementById('tabs-list');
      
      // If no tabs are found, show a message
      if (!tabs || tabs.length === 0) {
        list.innerHTML = '<li>No tabs found</li>';
        return;
      }
      
      // Create a list item for each tab, showing the URL as the link text
      tabs.forEach((tab) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = tab.url;
        // Instead of using the page title, display the URL
        link.textContent = tab.url;
        link.target = '_blank'; // Opens the link in a new tab
        listItem.appendChild(link);
        list.appendChild(listItem);
      });
    });
  });
  
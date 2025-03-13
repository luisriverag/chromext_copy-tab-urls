document.addEventListener('DOMContentLoaded', () => {
    // Query all open tabs
    chrome.tabs.query({}, (tabs) => {
      console.log('Tabs returned:', tabs); // Debug log to check what tabs are returned
      const list = document.getElementById('tabs-list');
      
      // If no tabs are found, show a message
      if (!tabs || tabs.length === 0) {
        list.innerHTML = '<li>No tabs found</li>';
        return;
      }
      
      // Create a list item for each tab with a clickable link
      tabs.forEach((tab) => {
        console.log('Tab URL:', tab.url); // Debug log for each tab URL
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = tab.url;
        // Use tab title if available; otherwise, use the URL
        link.textContent = tab.title || tab.url;
        link.target = '_blank'; // Opens the link in a new tab
        listItem.appendChild(link);
        list.appendChild(listItem);
      });
    });
  });
  
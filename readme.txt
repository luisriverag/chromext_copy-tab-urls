Tab URL Collector
=================

Tab URL Collector is a simple Chrome extension that captures the URLs (and titles) of all open tabs and displays them in a popup.
This tool is useful for quickly accessing, sharing, or saving your current session's URLs.

Features
--------
- Capture Open Tab URLs: Retrieves the URLs from all open tabs.
- Display as Clickable Links: Shows the tab titles or URLs as clickable links in a popup.
- Easy Navigation: Clicking on a link opens the tab in a new window.

Installation
------------
1. Clone the Repository

   If you haven't already, clone the repository:

       git clone https://github.com/<USERNAME>/<REPO_NAME>.git
       cd <REPO_NAME>

2. Load the Extension in Chrome

   - Open Chrome and navigate to chrome://extensions/.
   - Enable Developer mode using the toggle in the upper right.
   - Click "Load unpacked" and select the repository folder (where manifest.json is located).

Usage
-----
1. Click the extension icon in your Chrome toolbar.
2. The popup will display a list of URLs (or tab titles) from all open tabs.
3. Click any link to open the corresponding tab in a new window.

Files Overview
--------------
- manifest.json: Configures the extension (permissions, popup, etc.).
- popup.html: Defines the UI for the popup window.
- popup.js: Contains the JavaScript that queries open tabs and populates the popup with URLs.
- icon16.png, icon48.png, icon128.png: Icon files used for the extension (ensure these are valid PNG images).

Development
-----------
Modifications:
- Update UI: Edit popup.html and the inline CSS for any UI customizations.
- JavaScript Logic: Modify popup.js to adjust the behavior of tab querying or data display.

Debugging:
- Right-click on the popup and choose "Inspect" to open Developer Tools.
- Use console.log statements (already added in popup.js) to verify that tabs are being queried correctly.

Reloading the Extension:
- After making any changes, go to chrome://extensions/ and click "Reload" on your extension.

Creating a GitHub Repository and Pushing Files
-----------------------------------------------
Using Standard Git Commands:

       cd ~/Documents/source_code/chromext_copy-tab-urls
       git init
       git add .
       git commit -m "Initial commit"
       git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
       git branch -M main
       git push -u origin main

Using GitHub CLI:

       cd ~/Documents/source_code/chromext_copy-tab-urls
       git init
       git add .
       git commit -m "Initial commit"
       gh repo create <REPO_NAME> --public --source=. --remote=origin --push

Replace <USERNAME> and <REPO_NAME> with your GitHub username and desired repository name.

License
-------
This project is licensed under the MIT License.

Acknowledgments
---------------
- Utilizes the Chrome Tabs API to access open tab data.
- Thanks to the Chrome extension community for their contributions and resources.

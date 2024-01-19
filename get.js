document.addEventListener("DOMContentLoaded", function () {
    // Replace 'your_server_address' with the actual server IP or domain
    const serverAddress = '24.163.117.201';
    async function displayServerStatus() {

        // Fetch and display server status
        const apiUrl = `https://api.mcstatus.io/v2/status/bedrock/${serverAddress}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Access information from the response
            const status = data.online;
            const playersOnline = data.players.online;
            const maxPlayers = data.players.max;
            const eula = true

            // Update the HTML elements with server status
            document.getElementById('status').textContent = `Server Status: ${status ? 'Online' : 'Offline'}`;
            document.getElementById('players').textContent = `Players Online: ${playersOnline}/${maxPlayers}`;
            document.getElementById('eula').textContent = `EULA: ${eula}`;
            
            setTimeout(displayServerStatus, 6000);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            setTimeout(displayServerStatus, 60000);
        }
    }

    // Call the function to display server status when the page loads
    displayServerStatus();
});
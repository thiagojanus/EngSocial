function closeWindow() {
  window.close();
}


  window.onload = function() {
    
    fetchIPAddress();
  
    fetchDNSInfo();
  
    fetchTorrentAddress();
  
    fetchSystemInfo();
  
    displayWarnings();
  };
  
  function fetchIPAddress() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('ip-address').textContent = data.ip;
        fetchIPDetails(data.ip);
      });
  }
  
  function fetchIPDetails(ip) {
    fetch(`https://ipinfo.io/${ip}/json`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('isp').textContent = data.org;
        document.getElementById('country').textContent = data.country;
        document.getElementById('region').textContent = data.region;
        document.getElementById('city').textContent = data.city;
      });
  }
  
 
  function displayWarnings() {
    
    document.getElementById('webrtc-warning').textContent = 'WebRTC leak detected. Disable WebRTC in your browser to prevent this.';
  
    document.getElementById('dns-warning').textContent = 'DNS leak detected. Configure your system to use the VPN DNS servers.';
  }
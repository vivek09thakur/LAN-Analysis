import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ConnectedDevices from "./components/Dash/ConnectedDevices/Devices";
import Bandwidth from "./components/Band/BandWidth";
import IPAddresses from "./components/Dash/IPs/IP";
import DNSServers from "./components/DNS/DNS";
import NetworkInterfaces from "./components/Net/Network";
import Usage from "./components/DataUsage/Usage";
import WiFiDetails from "./components/WiFi/WiFi";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [networkInfo, setNetworkInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = import.meta.env.VITE_API_URL || " http://127.0.0.1:5000";

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${api}/api/network_info`
      );
      setNetworkInfo(response.data);
      console.log("Fetched network info:", response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching network information");
      setLoading(false);
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 50000);

    return () => clearInterval(interval);
  }, [fetchData]);

  if (loading) return <div>Loading...This might take few seconds</div>;
  if (error) return <div>{error}</div>;
  if (!networkInfo) return <div>No data available</div>;

  return (
    <div className="app-wrapper">
      <Sidebar />
      <header className="app-header">
        <h1 className="app-name">LAN Analysis</h1>
      </header>
      <main className="app-main">
        <div className="container">
          <section data-section="devices">
            <ConnectedDevices
              devices={networkInfo.devices || []}
              pingResults={networkInfo.ping_results || {}}
            />
          </section>
          <section data-section="usage">
            <Usage dataUsage={networkInfo.total_data_usage} />
          </section>
          <section data-section="bandwidth">
            <Bandwidth bandwidth={networkInfo.bandwidth} />
          </section>
          <section data-section="network">
            <NetworkInterfaces networkInterfaces={networkInfo.network_interfaces} />
          </section>
          <section data-section="wifi">
            <WiFiDetails wifi={networkInfo.wifi_details} />
          </section>
          <section data-section="ip">
            <IPAddresses
              localIp={networkInfo.local_ip}
              publicIp={networkInfo.public_ip}
            />
          </section>
          <section data-section="dns">
            <DNSServers dnsServers={networkInfo.dns_servers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

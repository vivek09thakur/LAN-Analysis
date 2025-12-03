from flask import Flask, jsonify
from flask_cors import CORS
from Analyze.analyzer import (
    get_connected_devices,
    ping_device,
    get_bandwidth,
    get_local_ip,
    get_public_ip,
    get_dns_servers,
    get_network_interfaces,
    total_internet_consumed,
    get_wifi_details
)

app = Flask(__name__)
CORS(app)

@app.route('/api/network_info', methods=['GET'])
def get_network_info():
    try:
        # Devices & ping results
        devices = get_connected_devices()
        ping_results = {device: ping_device(device) for device in devices}

        # Bandwidth
        bandwidth = get_bandwidth()

        # IPs
        local_ip = get_local_ip()
        public_ip = get_public_ip()

        # DNS & network interfaces
        dns_servers = get_dns_servers()
        network_interfaces = get_network_interfaces()

        # Total data usage
        total_data_usage = total_internet_consumed()

        # WiFi details
        wifi_details = get_wifi_details()

        # Build structured JSON response
        response = {
            "devices": devices,
            "ping_results": ping_results,
            "bandwidth": bandwidth,
            "local_ip": local_ip,
            "public_ip": public_ip,
            "dns_servers": dns_servers,
            "network_interfaces": network_interfaces,
            "total_data_usage": total_data_usage,
            "wifi_details": wifi_details
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Add CORS headers
@app.after_request
def add_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == '__main__':
    app.run(debug=True)

# LAN Analysis

<img width="1896" height="916" alt="image" src="https://github.com/user-attachments/assets/130de533-55c5-40c1-aea9-3593b2415277" />

## Overview

This project provides a local network analysis tool built with a Python backend and a React.js interface. Designed for star-topology LANs, it offers detailed insights into your hub and connected devices.

## Features

* Detects all devices connected to the hub
* Monitors hub bandwidth usage
* Displays all network interfaces
* Shows Wi-Fi details
* Shows vEthernet details
* Displays DNS server information

## Setup Guide

### Repository Setup

1. Fork the repository and clone it:

```bash
git clone <your-fork-url>
```

2. Move into the project directory:

```bash
cd lan-analysis-backend
```

---

## Backend Setup

1. Enter the backend folder:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate it:

```bash
.\venv\Scripts\activate
```

4. Install the dependencies:

```bash
pip install -r requirements.txt
```

5. Start the Flask server:

```bash
python app.py
```

You can also run the CLI version:

```bash
python cli.py
```

---

## Frontend Setup

1. Open a second terminal and move to the frontend folder:

```bash
cd frontend
```

2. Go to the main directory:

```bash
cd main
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```


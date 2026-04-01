import psutil
import requests
import socket
import time
import getpass

SERVER_URL = "http://192.168.66.241:3000/api/data"

def get_data():
    return {
        "hostname": socket.gethostname(),
        "usuario": getpass.getuser(),
        "cpu": psutil.cpu_percent(interval=1),
        "ram": psutil.virtual_memory().percent,
        "timestamp": time.time()
    }

while True:
    try:
        data = get_data()
        response = requests.post(SERVER_URL, json=data, timeout=5)
        print("📤 Enviado:", data)
    except Exception as e:
        print("❌ Error:", e)

    time.sleep(5)
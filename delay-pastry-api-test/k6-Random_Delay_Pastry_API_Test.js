
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    for (let i = 0; i < 10; i++) {
        const delay = Math.floor(Math.random() * (999 - 50 + 1)) + 50;
        const url = `http://localhost:8080/rest/API+Pastry+-+2.0/2.0.0/pastry?delay=${delay}`;
        const res = http.get(url);
        console.log(`Request ${i + 1} - Delay: ${delay}ms - Status: ${res.status}`);
        sleep(0.5); // optional short pause between requests
    }
}

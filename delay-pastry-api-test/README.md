
# 🥐 delay-pastry-api-test

This project demonstrates the new **Microcks** feature that allows setting **dynamic response delays from the client side**, ideal for simulating latency in API mocking and testing scenarios.

Learn more about the feature here: 👉 [Microcks Delay Guide](https://microcks.io/documentation/guides/usage/delays/)

## 🚀 About This Demo

Microcks now supports client-controlled delays via query parameters or headers—making it easy to simulate real-world latency for your API consumers.

This repo includes two examples that send 10 requests to a mock API endpoint, each with a **random delay between 50 and 999 milliseconds**:
- ✅ A [Postman Collection](./postman_collection-Random_Delay_Pastry_API_Test.json)
- ✅ A [k6 Load Testing Script](k6-Random_Delay_Pastry_API_Test.js)

The endpoint tested:

```
http://localhost:8080/rest/API+Pastry+-+2.0/2.0.0/pastry?delay=VALUE
```

Where `VALUE` is dynamically generated on each request.

## 📦 Requirements

- Microcks running locally (or remotely) with a mock for the `API Pastry - 2.0` endpoint
- [Postman](https://www.postman.com/downloads/) or [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) installed

## 🧪 Postman

### ▶️ How to Use

1. Open Postman and import the file:  
   [`postman_collection-Random_Delay_Pastry_API_Test.json`](./postman_collection-Random_Delay_Pastry_API_Test.json)

2. Use the **Collection Runner** to execute the request.  

## ⚡ k6

### ▶️ How to Use

1. Download the k6 script:
   [`k6-Random_Delay_Pastry_API_Test.js`](./k6-Random_Delay_Pastry_API_Test.js)

2. Run the script: 
```bash
k6 run k6-Random_Delay_Pastry_API_Test.js
```

## 🎥 Demo Video

Watch the live demo here:  
📺 [YouTube Video Link](https://www.youtube.com/c/Microcks)

## 🤝 Contributions & Feedback

Feel free to fork, open issues, or contribute improvements to help others test Microcks' delay features!

## 🧡 About Microcks

[Microcks](https://microcks.io) is the open source cloud native tool for API mocking and testing.  

This feature is part of Microcks' mission to help developers simulate **realistic and robust** API behaviors in testing and development environments.

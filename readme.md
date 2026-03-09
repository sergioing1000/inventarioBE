        
**Inventario** **Backend**

Backend microservice for managing inventory in a microservices-based architecture.  
This service exposes REST APIs to manage inventory items and can be deployed using **Docker** and **Kubernetes**.

The project is designed as part of a distributed system where multiple services (such as **orders** and **sales**) interact through HTTP APIs.

* * *

**Architecture**

This service is part of a microservices ecosystem:

Client (Postman / Frontend)

                │

                ▼
             Ingress

                │
┌───────────────┬───────────────┬───────────────┐

│               │               │               │
▼               ▼               ▼               ▼

Inventario�� Orders Service�� Sales Service

Service

The **Inventario** **service** is responsible for managing product stock and inventory information.

* * *

**Features**

*   REST API for inventory management
*   JSON request/response format
*   CORS enabled
*   Containerized with Docker
*   Deployable in Kubernetes
*   Designed for integration with other microservices

* * *

**Technologies**

*   Node.js
*   Express.js
*   Docker
*   Kubernetes
*   GitHub Actions (CI/CD)
*   REST API

* * *

**API Endpoints**

Base URL (local):

http://localhost/api/inventario

Example endpoints:

**Get inventory**

GET /api/inventario

Returns the list of products available in inventory.

* * *

**Create or update inventory item**

POST /api/inventario

Example request body:

{

� "productId": "123",

� "name": "Laptop",

� "quantity": 10

}

* * *

**Running the project locally**

**1 Clone the repository**

git clone https://github.com/sergioing1000/inventarioBE.git

cd inventarioBE

* * *

**2 Install dependencies**

npm install

* * *

**3 Start the application**

npm start

Server will start on:

http://localhost:3000

* * *

**Running with Docker**

Build the Docker image:

docker build -t inventario\-service .

Run the container:

docker run -p 3000:3000 inventario\-service

* * *

**Kubernetes Deployment**

Typical Kubernetes resources used:

*   Deployment
*   Service
*   Ingress

Example deployment:

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl apply -f ingress.yaml

Once deployed, the service can be accessed through the configured Ingress endpoint.

* * *

**Testing with Postman**

Example requests:

GET http://localhost/api/inventario

POST http://localhost/api/inventario

Content-Type:

application/json

* * *

**Project Structure**

inventarioBE

│

├── Dockerfile

├── package.json

├── server.js

├── src/

│�� ├── controllers/

│�� ├── routes/

│�� └── services/

│

└── README.md

* * *

**CI/CD**

The project can be integrated with **GitHub Actions** to automatically:

*   Build Docker images
*   Push images to a container registry
*   Deploy to Kubernetes

* * *

**Future Improvements**

*   Authentication and authorization
*   Database integration
*   Observability (Prometheus / Grafana)
*   API documentation with Swagger

* * *

**Author**

Sergio Cruz  
Software Developer

* * *

💡 If you want, I can also generate a **much stronger README for portfolio quality**, including:

*   architecture diagram
*   Kubernetes manifests explanation
*   CI/CD pipeline diagram
*   API documentation section
*   badges (Docker, Node, Kubernetes, CI)

That kind of README **looks much more professional on GitHub**.
# Running the Dockerized Frontend

Follow these steps to run the frontend application using Docker:

## Prerequisites

- Docker installed on your machine
- Backend application running locally on port 8000

## Steps

1. **Clone the frontend repository**

   ```bash
   git clone <frontend-repo-url>
   cd <frontend-repo-name>

2. **Clone the frontend repo**

     ```shellscript
      git clone <frontend-repo-url>
      cd <frontend-repo-name>
     ```

3. **Build frontend Docker Image**

       ```shellscript
    docker build -t frontend-app .
        ```

5. ****Run the backend Docker container**

```shellscript
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://host.docker.internal:8000 frontend-app
```

## Last Step: Access the Application

Open a web browser and navigate to:

```plaintext
http://localhost:3000
```

You should now see the frontend of the application, which should be able to communicate with the backend.


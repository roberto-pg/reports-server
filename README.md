# Reports Api

## Restfull API for the Reports Web App
Important - Requests that use the user ID do not depend on sending the ID in the request, because the ID is extracted from the token during authentication

<br/>
<br/>

## Installation:

<br/>

<h3>Clone the repository: </h3>

```
git clone https://github.com/roberto-pg/reports-server.git reports
```

```
cd reports
```

```
npm install
```

```
touch .env
```

</br>

<h3>Enter static values into the .env file:</h3>

```
PORT=
# Prisma URL
DATABASE_URL=
# Postgres
DB_PASS_ROOT=<password>
DB_NAME=<database name>
DB_USER=<dba name>
DB_PASS=<password>
# Redis
REDIS_PORT=
REDIS_HOST=report-redis
REDIS_PASS=
# JsonWebToken
JWT_SECRET_KEY=
TOKEN_EXPIRATION_TIME=
# Multer / fs.unlink
IMAGE_STORAGE=./public/images
# Routes
DIR_IMAGE=http://localhost:8080/reports/

```

<br/>
<br/>
<br/>

## Create Docker Containers:

<br/>

### This Server uses Nginx to provide static images of the book covers. Install the Nginx container before running docker-compose:

```
docker run -d --name nginx -p 8080:80 --restart always -v /home/<user>/docker/nginx/books:/usr/share/nginx/html/books nginx
```

<br/>

<h3>Run the command at the root of the project:</h3>

```
docker compose up -d
```

```
docker ps -a
```

<br/>
<br/>

<h3>Access the Docker container from the terminal:</h3>

```
docker exec -it report-db bash
```

```
psql -U postgres
```

<br/>
<br/>

<h3>Create Database and User (inside the report-db container):</h3>

```
create database <database_name>;
```

```
create user <username> with password '<password>';
```

```
grant all privileges on database "<database_name>" to <username>;
```

```
\c report
```

```
grant usage, create on schema public to <username>;
```

```
Ctrl + D
```

<br/>
<br/>

<h3>Run Migrations (Inside the report container):</h3>

```
docker exec -it report sh
```

```
npx prisma migrate dev
```

```
Ctrl + D
```

<br/>
<br/>

## Okay, it's working!

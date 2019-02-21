FROM devillex/docker-firebase

RUN mkdir /app
WORKDIR /app
ADD . /app/

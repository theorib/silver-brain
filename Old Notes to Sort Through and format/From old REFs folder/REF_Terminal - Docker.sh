
# used to run a container from an image
# If the image does not exist locally, it will be pulled from the docker hub
docker run imageName

# List all running docker containers on your system na dsome basic information about them
docker ps

# List all docker containers on your system including those that have finished running
docker ps -a

# Stop a running container 
docker stop containerIDorNameTag

# Remove a container permanently 
docker rm containerIDorNameTag

# Print a list of available docker images and their sizes
docker images

# Remove an image permanently
# You muse stop and remove any dependent containers before you can remove an image
docker rmi imageIDorNameTag

# Download an image but don't run it
docker pull imageName

# To run a command inside a running docker container
docker exec containerIDorNameTag commandName

# To run a container in the background in detached more
docker run -d imageName

# To attach a container back to your terminal you can run
docker attach containerIDorNameTag
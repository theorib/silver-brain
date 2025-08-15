# Make sure homebrew is installed https://brew.sh/

# Official documentation https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

# Install MongoDB
brew tap mongodb/brew

#Run the update command
brew update

# Install the community edition of MongoDB
brew install mongodb-community

# To run MongoDB as a macOS service
brew services start mongodb-community

# To check the status of the MongoDB as a macOS service
brew services list

# To Stop MongoDB as a macOS Service
brew services stop mongodb-community

# Find where homebrew installed MongoDB
brew --prefix mongodb-community

# Path for homebrew config file
# /opt/homebrew/etc/mongod.conf
# Path for homebrew MongoDB log file
# /opt/homebrew/var/log/mongodb/mongo.log
# Path for homebrew MongoDB data file
# /opt/homebrew/var/mongodb




# To run mongod manually as a background process
mongod --dbpath /mydbpath --logpath /mylogpath/mongo.log
# Example
mongod --dbpath /Users/theorib/Development/mongodb/data --logpath /Users/theorib/Development/mongodb/logs/mongo.log

# To check the status of mongoDB as a background process
ps aux | grep -v grep | grep mongod

# To stop a mongod running as a background process, connect to the mongod using mongosh, and issue the shutdown command as needed.

# Connecting to Mongo Shell (from a new terminal window)
mongosh

############ Mongo Shell Commands ############
# Show all databases
show dbs
# clear the console
cls
# use a database
use mydatabase
# show all collections in the current database
show collections

# create a collection with a document
db.myCollection.insertOne({name:"A book", price: 12.99 })

# show all documents in a collection
db.myCollection.find()

# show all documents in a collection in a formatted way
db.myCollection.find().pretty()


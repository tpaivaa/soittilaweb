# soittilaweb


##requirements
```
install sqlite3
nodejs
node libraries : express, better-sqlite
```
##how to deploy
```
create db

sqlite local.db
run command from testdata file
DROP table awayHome;
CREATE TABLE awayHome (id INTEGER PRIMARY KEY,Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, startDate TEXT UNIQUE, startTime TEXT , stopDate TEXT UNIQUE, stopTime TEXT);
```
###add data
###Send POST to awayhome url
```
curl -i -X POST -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/awayhome \
    --data '{"startDate":"01.01.2022","startTime":"09:00","stopDate":"02.01.2022","stopTime":"08:00"}'
```

##running with systemd
copy file to systemd services library folder
``` 
cp soittilaweb.service to /lib/systemd/system/
```
### Service control
```
sudo systemctl enable soittilaweb --now
sudo systemctl status soittilaweb
sudo journalctl -u soittilaweb.service -f
```
curl -L "https://cli.run.pivotal.io/stable?release=linux64binary&source=github" | tar -zx
./cf api https://api.ng.bluemix.net
./cf login -u chrisdhanaraj@us.ibm.com -p $password -o chrisdhanaraj_org -s Bluemix Design System
ENV=external
./cf push
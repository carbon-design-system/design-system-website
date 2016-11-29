curl -L "https://cli.run.pivotal.io/stable?release=linux64-binary&version=6.16.1&source=github-rel" | tar -zx
./cf install-plugin blue-green-deploy -r CF-Community -f
./cf api https://api.ng.bluemix.net
./cf login -u chrisdhanaraj@us.ibm.com -p $password -o chrisdhanaraj_org -s "Bluemix Design System"
ENV=external npm run build
./cf blue-green-deploy design-system
./cf api https://api.stage1.ng.bluemix.net
./cf login -u chrisdhanaraj@us.ibm.com -p $password -o "Bluemix Dev" -s shared
ENV=internal npm run build
./cf blue-green-deploy design-system
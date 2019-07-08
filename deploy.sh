eval "$(ssh-agent -s)"
chmod 600 id_rsa
ssh-add id_rsa

git config --global push.default matching 
git remote add deploy ssh://root@$IP$PORT$DEPLOY_DIR
git push deploy master

ssh root@$IP -p $PORT <<EOF
	echo "test" >> test2.txt
EOF

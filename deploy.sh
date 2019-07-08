eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 id_rsa # Allow read access to the private key
ssh-add id_rsa # Add the private key to SSH

git config --global push.default matching
git remote add deploy ssh://root@$IP:$PORT$DEPLOY_DIR
git push deploy master

# Skip this command if you don't need to execute any additional commands after deploying.
ssh  root@$IP -p $PORT <<EOF
  echo "tst je presel" >> /root/test.txt
    crystal build --release --no-debug index.cr # Change to whatever commands you need!
    EOF

# Project setup



  - Navigate to the certain folder in which you want the projects to be create
  - cd Projects/Gh
  - After that create a new file called setup.sh
  - In the setup.sh copy and paste this

  ```
    mkdir BlogInfra
    cd BlogInfra
    git clone git@github.com:kedmenecr/BLUI.git
    cd BLUI
    npm i
    cd ..
    git clone git@github.com:kedmenecr/JWTS.git
    cd JWTS
    npm i
    cd ..
    git clone git@github.com:kedmenecr/GDPR.git
    cd GDPR
    npm i
    cd ..
    git clone git@github.com:kedmenecr/USDB.git
    cd USDB
    npm i
    cd ..
    git clone git@github.com:kedmenecr/DATA.git
    cd DATA
    npm i
    cd ..
    git clone git@github.com:kedmenecr/BLDB.git
    cd BLDB
    npm i
    cd ..
    echo "Cloned all repos"
```
 - After this you have to grant permissions to the file

    ```
    chmod 777 setup.sh
    ```
 - And for the last step, you have to start it! Just write :
  ```
  ./setup.sh
  ```


# Pulling all before developing !

  - Navigate to the BlogInfra
  ```
  cd BlogInfra
  ```
 - As before you have to create a new file and copy this content to it

    ```
    cd BLUI
    git checkout master
    git pull origin master
    cd ..
    cd JWTS
    git checkout master
    git pull origin master
    cd ..
    cd GDPR
    git checkout master
    git pull origin master
    cd ..
    cd USDB
    git checkout master
    git pull origin master
    cd ..
    cd DATA
    git checkout master
    git pull origin master
    cd ..
    cd BLDB
    git checkout master
    git pull origin master
    cd ..
    echo "Pulled all repos!"
    ```
 - Give it permssion as describe up and then just run it. This will pull all the changes



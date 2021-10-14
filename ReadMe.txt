

## Comandos y referencias ocupadas en este proyecto sobre Ubuntu/Apache/Docker(MySql)

node -v
npm -v
npm install -g npm
npx create-react-app crud-react
cd crud-react/

npm install -g npm

npm run start
npm install react-router-dom --save
npm install bootstrap --save


docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=Breneli23 -d mysql
docker start some-mysql 

sudo service nginx stop
sudo service apache2 start


_____________________________________________________________________________________________
#How do I enable PHP 7.3 in Apache2
https://askubuntu.com/questions/1148129/how-do-i-enable-php-7-3-in-apache2

#Install mysqli
https://www.php.net/manual/en/mysqli.installation.php
https://zoomadmin.com/HowToInstall/UbuntuPackage/php-mysqli
https://www.cyberciti.biz/faq/unix-linux-restart-php-service-command/

#Test MySql Connection
https://www.w3schools.com/php/php_mysql_connect.asp

INSERT INTO `empleados` (`id`, `nombre`, `correo`) VALUES
(50, 'Marisa', 'marisa@gmail.com'),
(52, 'Edrei', 'edrei@gmail.com');
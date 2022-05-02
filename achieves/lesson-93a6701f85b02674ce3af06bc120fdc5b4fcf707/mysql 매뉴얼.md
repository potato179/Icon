# MySQL 사용법



* [참고사항](##참고사항)


## 기본적인 로그인 방법

    > mysql -u root -p

기본 아이디는 root이고 초기에는 비밀번호는 설정되어 있지 않으니
엔터를 누르면 비밀번호는 건너 뛸 수 있다.

그러면, mysql 쉘이 실행된다.


## 계정 만들기

먼저, 데이터베이스를 mysql로 변경한다.

    mysql> use mysql;

mysql 디비의 테이블들을 먼저 확인한다.

    mysql> show tables;

이중, user 테이블을 확인할 수 있고, user 테이블의 모든 컬럼을 보려면,

    mysql> show full columns from user;

user 테이블에서 호스트와 유저와 페스워드를 조회해보자.

    mysql> select host, user, password_lifetime from user;

유저 생성

    mysql> create user 'happy123'@'localhost' identified by '123';

혹은,

    mysql> create user happy identified by '123';    


```
+-----------+------------------+
| host      | user             |
+-----------+------------------+
| %         | happy            |
| localhost | happy123         |
| localhost | mysql.infoschema |
| localhost | mysql.session    |
| localhost | mysql.sys        |
| localhost | root             |
+-----------+------------------+
```

조회해보면, happy의 hosts는 %로 되어있는 것이 볼 수 있다. local유저가 아닌 외부에서도 접속가능하다는 뜻.


마지막으로 만든 계정을 사용할 수 있으려면, 아래와 같이 변경을 해준다.(php버전에 따라 불필요하기도 함.)

    mysql> ALTER USER 'happy'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';


## 계정에 권한 주기
GRANT ALL PRIVILEGES ON *.* TO '계정이름'@'%';
GRANT ALL PRIVILEGES ON *.* TO '계정이름'@'localhost';
[권한관련 문서][mysqldoc_grant]


## 유저 데이터베이스 및 테이블 생성하기

데이터베이스 생성하기

    mysql> create database happydb;

테이블 생성하기

    mysql> CREATE TABLE member (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(30) NOT NULL,
            phone VARCHAR(30),
            reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            ); 

테이블 열(column) 추가 및 변경하기

    mysql> ALTER TABLE table_name ADD COLUMN ex_column varchar(32) NOT NULL;

    mysql> ALTER TABLE table_name MODIFY COLUMN ex_column varchar(16) NULL;




테이블 확인해보기.

    mysql> show tables;
    mysql> select * from member;


테이블에 데이터 넣어보기

    mysql> INSERT INTO member (id, name, email, password)VALUES (1, '김철수', 'test@gmail.com', '1234');

테이블 삭제하기
    
    mysql> drop table 테이블명;


## 정렬과 범위로 select 하기

select * from user where name between "박정현" and "이동호" order by name;


## php, mysql 연결

php.ini 파일에서 mysqli를 사용할 수 있도록 설정 (설정 후, php서버를 다시 띄워야 한다)

    extension=mysqli






## 참고사항

php 터미널 실행

     > php -S 127.0.0.1:8080



## 참고자료
[초간단 Window 10 PHP 환경 구축][phpsetup]



[phpsetup]: https://wani.kr/posts/2016/07/29/window-enviroment-settings/
[mysqldoc_grant]: https://dev.mysql.com/doc/refman/8.0/en/grant.html

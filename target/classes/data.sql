create table business_users(
    id varchar(255) not null primary key,
    cnpj varchar(50) not null,
    legalName varchar(300) not null ,
    tradeName varchar(300) not null,
    email varchar(300) not null,
    passwordHash varchar(300) not null,
    usertype varchar(300) not null
);
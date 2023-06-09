DROP DATABASE pantry;
CREATE DATABASE pantry;
USE pantry;

CREATE TABLE STORAGE_LOCATION (
	S_ID INT auto_increment,
	Location VARCHAR(30),
	Name VARCHAR(30),
	Temp INT,
	PRIMARY KEY (S_ID)
);

CREATE TABLE FOOD (
	F_ID INT auto_increment,
	S_ID INT,
	Name VARCHAR(30) NOT NULL,
    Exp_date DATE NOT NULL,
	Type VARCHAR(30),
	Quantity INT NOT NULL,
    Nutrition blob,
	PRIMARY KEY (F_ID),
	FOREIGN KEY (S_ID) REFERENCES STORAGE_LOCATION(S_ID)
);

CREATE TABLE NUTRITION (
	F_ID INT,
	Calories INT,
	Servings INT,
	Ingredients VARCHAR(30),
	Allergens VARCHAR(30),
	FOREIGN KEY (F_ID) REFERENCES FOOD(F_ID)
);
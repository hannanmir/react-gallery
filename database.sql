-- Database name: react_gallery

CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path varchar(255),
    description varchar(255),
    likes INT DEFAULT 0
);

INSERT INTO "images" ("path", "description") VALUES ('images/1.jpg', 'Mew and Foxen gazing over their realm.');
INSERT INTO "images" ("path", "description") VALUES ('images/2.jpg', 'Mew has found a Foxen shaped pillow.');
INSERT INTO "images" ("path", "description") VALUES ('images/3.jpg', 'Foxen cosplaying as a croissant.');
INSERT INTO "images" ("path", "description") VALUES ('images/4.jpg', 'Do not be decieved, he is not a heterochromat.');
INSERT INTO "images" ("path", "description") VALUES ('images/5.jpg', 'Senior Photo?');
INSERT INTO "images" ("path", "description") VALUES ('images/6.jpg', 'Willow showing off her elegance.');
INSERT INTO "images" ("path", "description") VALUES ('images/7.jpg', '"So you see thats where the trouble began. That smile. That damned smile."');
INSERT INTO "images" ("path", "description") VALUES ('images/8.jpg', 'Tired after a long day of being cute.');
INSERT INTO "images" ("path", "description") VALUES ('images/9.jpg', 'Willow strikes a dramatic pose.');
INSERT INTO "images" ("path", "description") VALUES ('images/10.jpg', 'Aspen one-ups her sister in a show of elegance.');
INSERT INTO "images" ("path", "description") VALUES ('images/11.jpg', 'A rare pupper makes an appearance.');
INSERT INTO "images" ("path", "description") VALUES ('images/12.jpg', 'Its so fluffy!');
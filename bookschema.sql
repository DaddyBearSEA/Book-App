DROP TABLE IF EXISTS books;

CREATE TABLE books (
id SERIAL PRIMARY KEY,
author VARCHAR(255),
title VARCHAR(255),
isbn VARCHAR(255),
image_url VARCHAR(255),
description VARCHAR
);

INSERT INTO 
books(author, title, isbn, image_url, description) 
VALUES
 ('tom clancy', 'The Hunt for Red October', '9781101010365', 'http://books.google.com/books/content?id=xz2LhK79I3gC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'The #1 New York Times bestseller that launched the phenomenal career of Tom Clancy—a gripping military thriller that introduced the world to his unforgettable hero, Jack Ryan—nominated as one of America’s best-loved novels by PBS’s The Great American Read. Somewhere under the freezing Atlantic, a Soviet sub commander has just made a fateful decision. The Red October is heading west. The Americans want her. The Russians want her back. The chase for the highly advanced nuclear submarine is on—and there’s only one man who can find her... Brilliant CIA analyst Jack Ryan has little interest in fieldwork, but when covert photographs of Red October land on his desk, Ryan soon finds himself in the middle of a high-stakes game of hide-and-seek played by two world powers—a game that could end in all-out war.');


 INSERT INTO 
books(author, title, isbn, image_url, description) 
VALUES
 ('E. L. James', 'Fifty Shades of Grey', '9780385537674', 'http://books.google.com/books/content?id=GbVdlAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'When Anastasia Steele, a young literature student, interviews wealthy young entrepreneur Christian Grey for her campus magazine, their initial meeting introduces Anastasia to an exciting new world that will change them both forever.');


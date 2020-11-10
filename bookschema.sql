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
 ('Brandon Rhiness', 'You are the Reason Mommy Drinks', '9781788300179', 'http://books.google.com/books/content?id=DqKztQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api', 'Everyone thinks it, but nobody says it. Finally, there is an author with the courage to write what everyones been thinking. You are the Reason Mommy Drinks is a childrens book that is definitely not for children. But it will leave every mother worldwide nodding her head in agreement.');


 INSERT INTO 
books(author, title, isbn, image_url, description) 
VALUES
 ('Douglas Davies', 'Reusing Old Graves', '9780721914701', 'http://books.google.com/books/content?id=PjnZNwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'This book represents the results of an extensive survey, carried out by the University of Nottingham at the request of the Institute for Research in the Social Sciences at the University of York, into public opinions on the reuse of graves. The survey covered many related topics as well and, as a result, the book provides an insight into public attitudes to virtually all aspects of death and the disposal of the dead. It is consequently a landmark study and will be of interest to a broad spectrum of those whose profession deals in any way with death, as well as to sociologists, historians, theologians and others interested in the place of funeral memorialisation and death in contemporary Britain.');

INSERT INTO 
books(author, title, isbn, image_url, description) 
VALUES
 ('J M.r. Rice', 'How to Make Money in Your Spare Time', '9781499128307', 'http://books.google.com/books/content?id=vfrzoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'A comical look on how to earn extra cash in a \"not so legitimate\" way. This book takes advice from the Mafia, to politicians, giving insight to readers on how quickly money can be made in the underworld.');

 INSERT INTO 
books(author, title, isbn, image_url, description) 
VALUES
 ('Zack Love', 'Sex in the Title', '9781494812119', 'http://books.google.com/books/content?id=uV4YnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api', 'OVERVIEW: A male \"Sex and the City\" full of sexy laughs, romance, and misadventures. **** MORE DETAILS: New York City, May 2000. The Internet bubble has burst, and Evans boss fires him with an email. The next day, his girlfriend dumps him, also via email. Afraid to check any more emails, Evan desperately seeks a rebound romance but the catastrophes that ensue go from bad to hilariously worse. Fortunately, Evan meets someone whose legendary disasters with females eclipse even his own. To reverse their fortunes, they recruit their friends into a group of five guys who take on Manhattan in pursuit of dates, sex, and adventure. With musings about life, relationships, and human psychology, this quintessential New York story about the search for happiness follows five men on their comical paths to trouble, self-discovery, and love. **** PRAISE FOR \"SEX IN THE TITLE\": \"the funniest book I [have] read in a long time...Never before have I had so much fun with 5 totally clueless but completely lovable guys\" \"This book is so much more than a Romantic Comedy...[Its] funny...clever [and] well written, with superbly developed characters.\" ----Nikki Hardie of the Blissful Book Blog \"A wickedly brilliant story [that] reminded me of the grand influence and power of the written word. [Reading it was like] sitting on a plane and discovering you quite possibly met the most intriguing person you will ever encounter, and for those brief hours suspended in time, all of the universe is up for discussion with out the usual formalities of social standing. \"...spans several genres and does it with such cleverness, you cannot help but be impressed...one of my all-time favorite reads.\" ----Author JL Brooks \"[The] situations [the men] go through will have you laughing hysterically one second, cringing the next, sighing in another and getting misty eyed as well...Its beyond funny, intelligent and heartwarming...[and] will have you hysterically laughing and blissfully satisfied. ----Kristen Karwan of the BOOK fri-ENDS Blog \"loved...the male POV on dating, friends, life and all the [dating] disasters that the characters went through [and their] trials and tribulations [searching for] their life long love.\" \"a fun Romantic Comedy [with]...well developed characters and...hilariously fantastic adventures...\" ----Abbys Book Blog \"a witty, well thought out, splendidly executed satire on growing up\" \"a tale of coincidence and...how to deal with life, when all life is sending is hard knocks\" ----Little Ebook Reviews \"...loved reading about...adventures of being single in NYC! The...characters have...witty and sophisticated dialog and higher-education humor. Misadventures...bring friends together in the most unthinkable [situations]. ----Jennifer Cothran of the Sweet, Beautiful, Moments in West FL book blog \"...a lovely surprise and very, very funny...a page-turner and extremely well written...[with] well developed characters and individual stories. ----Magic Within the Pages Book Blog \"[A] romance...about a bunch of men trying to find love in the craziness [of] New York in the late 90s and early 00s. It was funny, entertaining and kept me wanting to read more... Sex and the City, but from a guys perspective... ----Author Liz King of the Romance Addiction Blog This was one of my top...reads...The laughing never stopped... ----Melinda Swenson of the Keepin It Real Book Blog",');
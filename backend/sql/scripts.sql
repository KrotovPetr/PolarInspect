CREATE DATABASE polar;
\c polar;

BEGIN;

CREATE TABLE IF NOT EXISTS public.pipes
(
    id bigint generated by default as identity,
    name character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.points
(
    id bigint generated by default as identity,
    name character varying NOT NULL,
    width character varying NOT NULL,
    longitude character varying NOT NULL,
    theme character varying NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.pipes_points
(
    id bigint generated by default as identity PRIMARY KEY,
    pipes_id bigint NOT NULL,
    points_id bigint NOT NULL,
    UNIQUE (pipes_id, points_id)
);

ALTER TABLE IF EXISTS public.pipes_points
    ADD FOREIGN KEY (pipes_id)
    REFERENCES public.pipes (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.pipes_points
    ADD FOREIGN KEY (points_id)
    REFERENCES public.points (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;

insert into pipes (id, name) values (1, 'Северный');
insert into pipes (id, name) values (2, 'Южный');
insert into pipes (id, name) values (3, 'Западный');
insert into pipes (id, name) values (4, 'Восточный');
insert into pipes (id, name) values (5, 'Юго-западный');
insert into pipes (id, name) values (6, 'Юго-восточный');
insert into pipes (id, name) values (7, 'Северо-западный');
insert into pipes (id, name) values (8, 'Северо-восточный');

insert into points (id, name, width, longitude, theme) values (1, 'Железнодорожная станция', '61.703602', '30.680139', 'Success');
insert into points (id, name, width, longitude, theme) values (2, 'Пристань Метеоров', '61.699623', '30.690952', 'Success');
insert into points (id, name, width, longitude, theme) values (3, 'Парк Ваккасалми', '61.705707', '30.672616', 'Success');
insert into points (id, name, width, longitude, theme) values (4, 'Старое финское гражданское кладбище', '61.715707', '30.686616', 'Danger');
insert into points (id, name, width, longitude, theme) values (5, 'улица Чкалова, 1', '61.701028', '30.693277', 'Danger');
insert into points (id, name, width, longitude, theme) values (6, 'Комсомольская улица, 8А', '61.701506', '30.69255', 'Success');
insert into points (id, name, width, longitude, theme) values (7, 'улица Кирова, 6', '61.702278', '30.694517', 'Success');
insert into points (id, name, width, longitude, theme) values (8, 'Валаамская улица, 2', '61.700986', '30.699826', 'Success');
insert into points (id, name, width, longitude, theme) values (9, 'Старое финское гражданское кладбище 2', '61.715707', '30.686616', 'Success');
insert into points (id, name, width, longitude, theme) values (10, 'Промышленная улица, 44А', '61.703353', '30.707435', 'Success');
insert into points (id, name, width, longitude, theme) values (11, 'Промышленная улица, 15А', '61.70383', '30.706096', 'Warning');
insert into points (id, name, width, longitude, theme) values (12, 'Карельская улица, 29', '61.704206', '30.692918', 'Danger');
insert into points (id, name, width, longitude, theme) values (13, 'улица Гагарина, 4', '61.702956', '30.68928', 'Danger');
insert into points (id, name, width, longitude, theme) values (14, 'Старое финское гражданское кладбище 3', '61.715707', '30.686616', 'Success');
insert into points (id, name, width, longitude, theme) values (15, 'улица Гагарина, 10', '61.703937', '30.687519', 'Success');
insert into points (id, name, width, longitude, theme) values (16, 'улица Гагарина, 14', '61.705212', '30.68486', 'Warning');
insert into points (id, name, width, longitude, theme) values (17, 'площадь Кирова, 9', '61.70235', '30.691283', 'Danger');
insert into points (id, name, width, longitude, theme) values (18, 'улица Ленина, 13', '61.702756', '30.684779', 'Success');

insert into pipes_points (pipes_id, points_id) values ( 1, 2);
insert into pipes_points (pipes_id, points_id) values (1, 1);
insert into pipes_points (pipes_id, points_id) values (1, 3);

insert into pipes_points (pipes_id, points_id) values (2, 18);
insert into pipes_points (pipes_id, points_id) values (2, 16);
insert into pipes_points (pipes_id, points_id) values (2, 14);
insert into pipes_points (pipes_id, points_id) values (2, 2);

insert into pipes_points (pipes_id, points_id) values (3, 2);
insert into pipes_points (pipes_id, points_id) values (3, 15);
insert into pipes_points (pipes_id, points_id) values (3, 14);

insert into pipes_points (pipes_id, points_id) values (4, 2);
insert into pipes_points (pipes_id, points_id) values (4, 8);
insert into pipes_points (pipes_id, points_id) values (4, 11);
insert into pipes_points (pipes_id, points_id) values (4, 10);

insert into pipes_points (pipes_id, points_id) values (5, 1);
insert into pipes_points (pipes_id, points_id) values (5, 7);
insert into pipes_points (pipes_id, points_id) values (5, 8);

insert into pipes_points (pipes_id, points_id) values (6, 2);
insert into pipes_points (pipes_id, points_id) values (6, 6);
insert into pipes_points (pipes_id, points_id) values (6, 9);

insert into pipes_points (pipes_id, points_id) values (7, 2);
insert into pipes_points (pipes_id, points_id) values (7, 5);
insert into pipes_points (pipes_id, points_id) values (7, 12);

insert into pipes_points (pipes_id, points_id) values (8, 2);
insert into pipes_points (pipes_id, points_id) values (8, 7);
insert into pipes_points (pipes_id, points_id) values (8, 11);
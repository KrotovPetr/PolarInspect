FROM postgres:14-alpine
COPY scripts.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
CMD ["postgres"]
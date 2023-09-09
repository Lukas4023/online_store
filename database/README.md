(Import)
1. Add .sql file to  PostgreSQL\15\bin
2. In cmd in PostgreSQL\15\bin write: psql -h localhost -U postgres -f online_store.sql

(Export) Choose "Backup" in pgAdmin4
1. General:
Filename: online_store.sql
Format: Plain
Encoding: UTF-8
2. Data/Objects stays default
3. Options - switch first 4 to "yes"
4. Add to script:
CREATE USER  crs_user  with PASSWORD 'CRS';   - before line 27
ALTER DATABASE online_store OWNER TO crs_user;  - at the very end


(Possible improvements)
1. Add some sort of "IF Exist" to "create user ..." statement

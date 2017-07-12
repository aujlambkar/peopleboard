# peopleboard

> Db model seeding

Pre-requisite:-
- Neo4j installed with the tar/zip versions or brew on mac to get tools like cypher-shell, etc(https://neo4j.com/developer/kb/using-neo4j-shell-neo4j-ce-3x/)

- Following property uncommented and enabled in neo4j.conf file
    
    dbms.shell.enabled=true

Run below script to generate random data:-
- schema/generateData.sh |  cypher-shell -u `neo4j user` -p `neo4j password`


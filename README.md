# peopleboard

> Db model seeding

Pre-requisite:-
- Neo4j installed
- Following property uncommented and enabled in neo4j.conf file
    
    dbms.shell.enabled=true

Run below script to generate random data:-
- schema/generateData.sh |  cypher-shell -u `neo4j user` -p `neo4j password`


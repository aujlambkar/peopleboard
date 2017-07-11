#!/usr/bin/env bash
echo "match(n) detach delete n;"
echo "CREATE INDEX ON :Person(name);"
echo "CREATE CONSTRAINT ON (person:Person) ASSERT person.email IS UNIQUE;"
echo "CREATE CONSTRAINT ON (person:Person) ASSERT person.id IS UNIQUE;"
echo "CREATE CONSTRAINT ON (team:Team) ASSERT team.name IS UNIQUE;"
echo "CREATE CONSTRAINT ON (team:Team) ASSERT team.id IS UNIQUE;"

script=""
for teamId in {1..5}
do
    script+="create (team$teamId:Team {id: $teamId,name: 'Team$teamId'}), "
    personCount=`awk -v min=1 -v max=10 'BEGIN{srand(); print int(min+rand()*(max-min+1))}'`

    for ((id=1;id <= $personCount;id++))
    do
        personId="$teamId$id"
        script+="(person$personId:Person {id: $personId,name: 'Person$personId', email: 'p$personId@equalexperts.com'}), "
        if (( $id != $personCount ))
        then
            script+="(person$personId)-[:PART_OF { since: 1499764865616, till: 1499765865616 }]->(team$teamId), "
        else
            script+="(person$personId)-[:PART_OF { since: 1499764865616, till: 1499765865616 }]->(team$teamId);"
        fi
    done
done

echo ${script}



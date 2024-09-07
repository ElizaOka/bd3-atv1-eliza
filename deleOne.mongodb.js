const database= 'BD3-NoSQL-AltasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].deleteOne(
    {cod_aluno:'1'}
)
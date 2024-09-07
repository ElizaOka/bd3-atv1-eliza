
const database= 'BD3-NoSQL-AltasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].updateOne(
    {cod_aluno:'2'},
    {$set:{cpf:'253.851.456-87'}}
    

    
);
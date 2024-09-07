const database= 'BD3-NoSQL-AltasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].find({"cpf":"865.458.896-87"},
                    {"cod_aluno":0}
);
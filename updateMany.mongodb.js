
const database= 'BD3-NoSQL-AltasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].updateMany(
    {cod_aluno:'2'},
    {$set:{
        cpf:'666.325.857-63',
        rg:'35.852-741-3',
        nome: 'Alice Maranhão'
    }},
   
    

    
);
const database= 'BD3-NoSQL-AltasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].insertOne(
    {
      "cod_aluno":"1",
      "cod_turma": "DS1",
      "nome": "Joaquim da Silva",
      "cpf": "123.456.458-61",
      "rg":"21.456.658-4",
      "telefone": "97564-7561",
      "email":"joaquim_silva@gmail.com",
      "dat_nascimento":"02/05/1989"

    }
)
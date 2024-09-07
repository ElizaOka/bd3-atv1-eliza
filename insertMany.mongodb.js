const database= 'BD3-NoSQL-AltasMongoDB';

const collection = 'bd3-nosql-atv1';

use(database);

db[collection].insertMany(
  [
    {
      "cod_aluno":"1",
      "cod_turma": "DS1",
      "nome": "Joaquim da Silva",
      "cpf": "123.456.458-61",
      "rg":"21.456.658-4",
      "telefone": "97564-7561",
      "email":"joaquim_silva@gmail.com",
      "dat_nascimento":"02/05/1989"

    },

    {
      "cod_aluno":"2",
      "cod_turma": "DS1",
      "nome": "Maria da Silva",
      "cpf": "456.785.124-98",
      "rg":"217.875.798-3",
      "telefone": "98576-2548",
      "email":"maria_silva@gmail.com",
      "dat_nascimento":"15/08/2000"

    },

    {
      "cod_aluno":"3",
      "cod_turma": "ADM1",
      "nome": "Paula Maria Santos",
      "cpf": "865.458.896-87",
      "rg":"45.852.689-2",
      "telefone": "98562-2541",
      "email":"paulamaria@gmail.com",
      "dat_nascimento":"25/04/2001"

    },
    {
      "cod_aluno":"4",
      "cod_turma": "LOG1",
      "nome": "Adriano Jose Sampaio",
      "cpf": "528.648.856-87",
      "rg":"49.4568.452-5",
      "telefone": "96523-5874",
      "email":"adriano_sampaio@gmail.com",
      "dat_nascimento":"06/12/1998"

    },
    {
      "cod_aluno":"5",
      "cod_turma": "LOG2",
      "nome": "Joaquina das Rosas",
      "cpf": "956.452.325-45",
      "rg":"32.258.468-8",
      "telefone": "94568-8231",
      "email":"joaquina.rosas@gmail.com",
      "dat_nascimento":"30/09/1998"

    },
    {
      "cod_aluno":"6",
      "cod_turma": "DS2",
      "nome": "Fabricio Antonio Moraes",
      "cpf": "654.425.876-41",
      "rg":"38.257.456-2",
      "telefone": "93265-7584",
      "email":"fabricio_moraes@gmail.com",
      "dat_nascimento":"28/02/1999"

    },
    {
      "cod_aluno":"7",
      "cod_turma": "DS1",
      "nome": "Paulina Andrade",
      "cpf": "685.125.458-42",
      "rg":"63.524.426-1",
      "telefone": "96582-4712",
      "email":"paulinaandrade@gmail.com",
      "dat_nascimento":"17/09/2005"

    },
    {
      "cod_aluno":"8",
      "cod_turma": "DS1",
      "nome": "Mauro Marcos de Souza ",
      "cpf": "251.154.786-87",
      "rg":"28.547.421-3",
      "telefone": "98582-3662",
      "email":"mauro.marcos@gmail.com",
      "dat_nascimento":"12/12/2003"

    },
    {
      "cod_aluno":"9",
      "cod_turma": "DS1",
      "nome": "Marcelo Dantas",
      "cpf": "333.656.487-65",
      "rg":"44.582.154-2",
      "telefone": "97564-7561",
      "email":"dantas.marcelo@gmail.com",
      "dat_nascimento":"01/01/2005"

    },

    {
      "cod_aluno":"10",
      "cod_turma": "DS1",
      "nome": "Luciano Marinho",
      "cpf": "752.598.248-31",
      "rg":"33.528.168-2",
      "telefone": "97758-3265",
      "email":"luciano.m@gmail.com",
      "dat_nascimento":"08/10/2001"

    }
  ]

)
# Projeto LAB Medicina

Lab Medicina e um projeto de API usando Node, Express e Sequelize, com o propósito de fazer uma API de adicionar medicos,pacientes e enfermeiros em um banco de dados, atualizar e deletar as informações de cada um deles e fazer os atendimentos medicos.

## Como usar o código

- Intale o Vscode e copie os arquivos do repositorio
- Na pasta raiz abra o terminal e copie > "npm install express sequelize pg pg-hstore dotenv yup" depois isso "npm install nodemon --save-dev"
- Agora para testar a API você pode usar o postman,thunderclient ou insomnia
- Instale tambem o PostgreSQL (caso você prefira usar outro banco de dados so vai ter que mudar algumas linhas de codigo, mas recomendo usar o que eu usei pra evitar mais trabalho)
- No codigo arrume o .env para as suas preferencias
- Agora e so usar "npm start" e se tudo deu certo vai iniciar

**Exemplos de rotas para teste**

# Rota para criar Paciente, Medico e Enfermeiros

**Criar Paciente**

```sh
{
"name": "Kenjiro Tsuda",
"gender": "Male",
"birthDay": "1971/06/11",
"cpf": "48158792677",
"cellphone": "48-9995851545",
"emergencyContact": "Kaiba",
"allergies": "ASTMHA",
"healthCare": "Unimed"
}
```

**Cria Enfermeiro(a)**

```sh
>{
>	"name": "Akio Otsuka",
>   "gender": "Male",
>   "birthDay": "1959/11/24",
>   "cpf": "48155169422",
>   "cellphone": "48-9999751524",
>   "educationInstitution": "UFSC",
>  	"cofenUf": "75864"
>}
```

**Cria Medico(a)**

```sh
{
"name": "Jouji Nakata",
"gender": "Male",
"birthDay": "1954/04/22",
"cpf": "48151348249",
"cellphone": "48-9983851524",
"educationInstitution": "UFSC",
"crmuf": "78954",
"specialty": "GENERAL PRACTITIONER"
}
```

**As rotas para atualizar são iguais as de criar então so darei o exemplo para paciente**

## Atualizar Paciente

```sh
{
"name": "Rie Kugimiya",
"gender": "Female",
"birthDay": "1979/05/30",
"cpf": "48158748677",
"cellphone": "48-9997551545",
"emergencyContact": "Takaya Kuroda",
"allergies": "OTHER",
"healthCare": "None"
}
```

**Existe agora 4 rotas de atualizações especificas**
**Nesse caso darei um exemplo pra cada rota e quais as opções disponiveis para atualizações**

# Atualização status de paciente

**Opções**

> "AWAITING_TREATMENT"
> "IN_TREATMENT"
> "NOT_TREATED"
> "TREATED"

**Exemplo**

```sh
{
"status":"IN_TREATMENT"
}
```

# Atualização alergias de paciente

**Opções**

> "NONE"
> "ASTMHA"
> "SKIN_ALLERGIES"
> "SKIN_ALLERGIES"
> "OTHER"

**Exemplo**

```sh
{
"allergies": "ASTMHA"
}
```

# Atualização status de medico & enfermeiro

**Opções**

> "Active"
> "Not Active"

**Exemplo**

```sh
{
 "systemStatus":  "Not Active"
}
```

**Não vejo necessidade em exemplos para a rota get mas darei o exemplo para o query.params**

# Query de Paciente

```sh
http://localhost:3333/api/patient?status=AWAITING_TREATMENT
http://localhost:3333/api/patient?status=IN_TREATMENT
http://localhost:3333/api/patient?status=NOT_TREATED
http://localhost:3333/api/patient?status=TREATED
```

# Query de Medico

```sh
http://localhost:3333/api/medic?systemStatus=Active
http://localhost:3333/api/medic?systemStatus=Not Active
```

# Query de Enfermeiro

```sh
http://localhost:3333/api/nurse?systemStatus=Active
http://localhost:3333/api/nurse?systemStatus=Not Active
```

# Rotas de Deletar

**So colocar o Id do paciente,medico ou enfermeiro que você tenha criado, caso tente inventar de deletar alguem que não tem Id vai dar erro**

# Rota de Atendimentos

**Nesse caso precisamos ja ter paciente e medico criados, se não vai dar erro**

# Exemplo de atendimento

```sh
{
"patient_id":1,
medic_id": 4
}
```

# O que eu vejo que daria para melhorar

> Melhores verificações

> Frontend basico

> Fazer com que enfermeiro tenha mais interação

# Aonde me encontrar

Muito obrigado por ter lido isso tudo e testado o meu projeto, caso queira me contactar sobre como posso melhorar,dicas ou outra coisa aqui esta os links:

> Linkedin: https://www.linkedin.com/in/glauton-os%C3%B3rio-42bbb4262/

> Github: https://github.com/glautonOsorio

> Id do Discord Pessoal: DarthFriendlyBastard#7875

> Id do Discord Profissional: Glauton.Osorio#3862

# Muito Obrigado e até mais!

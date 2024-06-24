
# Api Dev Web 3

Descrição curta do projeto

## Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:
- Node.js instalado
- npm (Node Package Manager) instalado
- docker instalado

## Instalação

Após clonar o projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Configuração do Banco de Dados

Para configurar o banco de dados, execute o seguinte comando do Prisma:

```bash
npm run prisma
```

Este comando irá gerar o esquema do banco de dados conforme especificado no Prisma Schema.

## Compilação e Execução

Para compilar e executar a aplicação, utilize o seguinte comando:

```bash
docker-compose up --build
```

## Uso

Após a compilação e execução, a API estará disponível para uso. Você pode interagir com ela através dos endpoints definidos.

## Contribuindo

Se deseja contribuir com este projeto, siga estas etapas:

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/MinhaFeature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona MinhaFeature'`)
4. Faça push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

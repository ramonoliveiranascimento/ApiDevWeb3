# Especificar a imagem base
FROM node:20.11.1
# Definir o diretório de trabalho no container
WORKDIR /usr/src/app
# Copiar os arquivos de definição de pacote
COPY package*.json ./
# Instalar as dependências
RUN npm install
# Copiar os arquivos do projeto
COPY . .
# Reinstalar bcrypt para garantir compatibilidade com o ambiente Linux do container
RUN npm rebuild bcrypt --build-from-source
# Gerar os arquivos do Prisma
RUN npx prisma generate --schema=prisma/schema.prisma
# Compilar o TypeScript para JavaScript
RUN npm run build
# Expor a porta que a aplicação usa
EXPOSE 3000
# Comando para iniciar a aplicação
CMD ["node", "./build/server.js"]
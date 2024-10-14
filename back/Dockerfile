FROM node:18-alpine AS development

WORKDIR /src/app

COPY package*.json ./

RUN npm ci

COPY . .

FROM node:18-alpine AS build

COPY --from=development /src/app/node_modules ./node_modules

COPY . . 

RUN npm run build

RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine AS production

COPY --from=build /src/app/node_modules ./node_modules

COPY --from=build /src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]

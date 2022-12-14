FROM node:latest AS build
# 容器内的目录，通常我们会使用 app 目录
WORKDIR /app
COPY . /app
RUN npm install && npm run build
CMD ["npm", "start"] 

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
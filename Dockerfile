FROM node:10

# 将打包后的文件拷贝到容器中
COPY . .
RUN npm install
EXPOSE  10016
ENTRYPOINT ["npm", "run", "dev"]

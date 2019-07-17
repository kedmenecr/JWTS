FROM node:8
COPY . /src
EXPOSE 9001
CMD ["npm", "start"]

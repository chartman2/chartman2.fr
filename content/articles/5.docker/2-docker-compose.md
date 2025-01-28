---
title: 'Docker compose'
description: 'Description'
icon: 'i-mdi:docker'
article_id: '2-docker-compose-description'
---

Docker Compose est un outil open-source fourni avec Docker pour définir et exécuter des applications multi-conteneurs sur une seule machine. Il permet aux développeurs de décrire une application entière en tant que collection de services interconnectés dans un fichier YAML simple, puis d'exécuter l'ensemble de l'application avec une seule commande.


Docker Compose simplifie le processus de configuration et de gestion des applications multi-conteneurs en fournissant plusieurs avantages :



Simplification de la configuration : Docker Compose permet aux développeurs de définir l'ensemble de l'application dans un seul fichier YAML, ce qui simplifie le processus de configuration et facilite la réutilisation des configurations entre les environnements.

Isolation des services : Docker Compose permet de définir chaque service d'une application en tant que conteneur séparé, ce qui garantit une isolation complète entre les différents composants de l'application et évite les conflits de dépendances.

Gestion simplifiée : Docker Compose fournit des commandes simples pour démarrer, arrêter et gérer l'ensemble de l'application, ce qui permet aux développeurs de gagner du temps et d'améliorer leur productivité.

Gestion des dépendances : Docker Compose permet de définir les relations entre les différents services d'une application en spécifiant les dépendances entre eux, ce qui garantit que chaque service est démarré dans le bon ordre et qu'il a accès aux ressources dont il a besoin.

Écosystème riche : Docker Compose dispose d'un écosystème riche en outils, bibliothèques et services tiers qui permettent aux développeurs de déployer facilement des applications multi-conteneurs dans différents environnements.


En résumé, Docker Compose est un outil open-source fourni avec Docker pour simplifier le processus de configuration et de gestion des applications multi-conteneurs en permettant aux développeurs de définir chaque service d'une application dans un fichier YAML simple, de gérer les dépendances entre eux et de démarrer l'ensemble de l'application avec une seule commande.



Le fichier docker-compose.yml est un fichier de configuration utilisé pour définir et exécuter des applications Docker composées d'un ou plusieurs conteneurs. Voici une brève description du fichier :

Exemple avec le fichier docker-compose.yml : 
```yml
version: "3.9"

services:
  frontend:
    build: 
      context: ./
      dockerfile: Dockerfile.nuxt
    command:  sh -c "pnpm run dev"
    working_dir: '/app'
    user: node
    tty: true
    volumes:
      - './:/app'
    environment:
      - PUID="${UID}"
      - PGID="${GID}"
      - UMASK="${USMAK}"
    labels:
      # Ajout dans traefik
      - "traefik.enable=true"
      
      # HTTP
      - "traefik.http.routers.${APP_NAME}.rule=Host(`${APP_URL}`)"
      - "traefik.http.routers.${APP_NAME}.entrypoints=http"

      # HTTPS
      - "traefik.http.routers.${APP_NAME}-secure.service=${APP_NAME}-secure"
      - "traefik.http.routers.${APP_NAME}-secure.rule=Host(`${APP_URL}`)"
      - "traefik.http.routers.${APP_NAME}-secure.entrypoints=https"
      - "traefik.http.routers.${APP_NAME}-secure.tls=true"

      # WSS
      - "traefik.http.routers.${APP_NAME}-wss.service=${APP_NAME}-wss"
      - "traefik.http.routers.${APP_NAME}-wss.rule=Host(`${APP_WS_URL}`)"
      - "traefik.http.routers.${APP_NAME}-wss.entrypoints=https"
      - "traefik.http.routers.${APP_NAME}-wss.tls=true"
      
      # Redirection
      - "traefik.http.middlewares.${APP_NAME}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${APP_NAME}-redirect.redirectscheme.permanent=true"
      - "traefik.http.routers.${APP_NAME}.middlewares=${APP_NAME}-redirect"

      # Port interne
      - "traefik.http.services.${APP_NAME}-secure.loadbalancer.server.port=3000"
      - "traefik.http.services.${APP_NAME}-wss.loadbalancer.server.port=24678"
    expose:
      - 3000
      - 24678
    networks:
      - app-network

  vscode:
    container_name: vscode-${APP_NAME}
    # image: codercom/code-server
    build: 
      context: ./
      dockerfile: Dockerfile.vscode
    depends_on:
      - frontend
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - "$HOME/.local:/home/coder/.local"
      - "$HOME/.config:/home/coder/.config"
      - "$PWD:/home/coder/project"
    environment:
      - TZ=Europe/Paris
      - DOCKER_USER=${USER}
      - USER_PASSWORD=1234
    user: ${UID_GID}
    labels:
      # Ajout dans traefik
      - "traefik.enable=true"
      
      # HTTP
      - "traefik.http.routers.${APP_VSCODE_NAME}.rule=Host(`${APP_VSCODE_URL}`)"
      - "traefik.http.routers.${APP_VSCODE_NAME}.entrypoints=http"

      # HTTPS
      - "traefik.http.routers.${APP_VSCODE_NAME}-secure.service=${APP_VSCODE_NAME}-secure"
      - "traefik.http.routers.${APP_VSCODE_NAME}-secure.rule=Host(`${APP_VSCODE_URL}`)"
      - "traefik.http.routers.${APP_VSCODE_NAME}-secure.entrypoints=https"
      - "traefik.http.routers.${APP_VSCODE_NAME}-secure.tls=true"
      
      # Redirection
      - "traefik.http.middlewares.${APP_VSCODE_NAME}-redirect.redirectscheme.scheme=https"
      - "traefik.http.middlewares.${APP_VSCODE_NAME}-redirect.redirectscheme.permanent=true"
      - "traefik.http.routers.${APP_VSCODE_NAME}.middlewares=${APP_VSCODE_NAME}-redirect"

      # Port interne
      - "traefik.http.services.${APP_VSCODE_NAME}-secure.loadbalancer.server.port=8080"
    networks:
      - app-network

networks:
  app-network:
    name: ${APP_NETWORK}
    external: true
```

La version "3.9" indique la version du format de fichier docker-compose utilisé. Cela signifie que les fonctionnalités spécifiées dans cette version peuvent être utilisées dans ce fichier.

Le bloc services: définit les différents services ou conteneurs qui composent l'application. Dans cet exemple, il y a deux services : frontend et vscode.

Le service frontend est construit à partir du Dockerfile nommé Dockerfile.nuxt, situé dans le répertoire courant (./). Il exécute la commande pnpm run dev pour démarrer l'application. Le conteneur est configuré avec un volume qui monte le répertoire courant vers le répertoire /app à l'intérieur du conteneur, ce qui permet de développer l'application en temps réel sur la machine hôte et de voir les modifications dans le conteneur. Des variables d'environnement sont également définies pour configurer les autorisations du système de fichiers à l'intérieur du conteneur.

Le service vscode est construit à partir du Dockerfile nommé Dockerfile.vscode, situé dans le répertoire courant (./). Il dépend du service frontend. Des volumes sont configurés pour partager les fichiers de configuration et les données entre la machine hôte et le conteneur, ce qui permet d'utiliser VS Code à l'intérieur du conteneur.

Les deux services sont configurés avec des règles Traefik, un proxy réverses et un équilibreur de charge pour gérer les requêtes entrantes vers les services. Les règles spécifient les noms d'hôte à utiliser, le port interne du service, et la configuration des redirections HTTP vers HTTPS.

Le bloc networks: définit un réseau externe nommé app-network, qui est partagé entre les services frontend et vscode. Cela permet à ces deux services de communiquer entre eux via le réseau.


En résumé, ce fichier docker-compose.yml définit une application composée de deux services : un service frontend (construit avec Nuxt) et un service VS Code, qui partagent un réseau commun. Les deux services sont configurés pour être accessibles via Traefik à l'aide de noms d'hôte spécifiques.
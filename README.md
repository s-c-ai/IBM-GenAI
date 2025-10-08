
<p align="center" id="top">
  <a href="https://getwren.ai/?utm_source=github&utm_medium=title&utm_campaign=readme">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="./misc/wrenai_logo.png">
      <img src="./misc/wrenai_logo_white.png" width="300px">
    </picture>
    <h1 align="center">Wren AI - Open-Source GenBI Agent</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Follow us on X" href="https://x.com/getwrenai">
    <img alt="" src="https://img.shields.io/badge/-@getwrenai-blue?style=for-the-badge&logo=x&logoColor=white&labelColor=gray&logoWidth=20">
  </a>
  <a aria-label="Releases" href="https://github.com/canner/WrenAI/releases">
    <img alt="" src="https://img.shields.io/github/v/release/canner/WrenAI?logo=github&label=GitHub%20Release&color=blue&style=for-the-badge">
  </a>
  <a aria-label="License" href="https://github.com/Canner/WrenAI/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/canner/WrenAI?color=blue&style=for-the-badge">
  </a>
  <a href="https://docs.getwren.ai">
    <img src="https://img.shields.io/badge/docs-online-brightgreen?style=for-the-badge" alt="Docs">
  </a>
  <a aria-label="Join the community on GitHub" href="https://discord.gg/5DvshJqG8Z">
    <img alt="" src="https://img.shields.io/badge/-JOIN%20THE%20COMMUNITY-blue?style=for-the-badge&logo=discord&logoColor=white&labelColor=grey&logoWidth=20">
  </a>
  <a aria-label="Canner" href="https://cannerdata.com/?utm_source=github&utm_medium=badge&utm_campaign=readme">
    <img src="https://img.shields.io/badge/%F0%9F%A7%A1-Made%20by%20Canner-blue?style=for-the-badge">
  </a>
</p>

<p align="center">
<a href="#sobre-o-projeto">Sobre o Projeto</a> •
<a href="#sobre-o-cliente">Sobre o Cliente</a> •
<a href="#equipe-técnica">Equipe Técnica</a> •
<a href="#licença">Licença</a>
</p>

> Wren AI is your GenBI Agent, that you can query any database with natural language → get accurate SQL(Text-to-SQL), charts(Text-to-Charts) & AI-generated insights in seconds. ⚡️

<p align="center">
  <img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/bba9d37a-33e3-49ab-b7cb-32fd6dddc8d1" />
</p>
 
## 😍 Demos

https://github.com/user-attachments/assets/f9c1cb34-5a95-4580-8890-ec9644da4160

[Watch GenBI Demo](https://github.com/user-attachments/assets/90ad1d35-bb1e-490b-9676-b29863ff090b)

## 🤖 Features

|                    | What you get | Why it matters |
|--------------------|--------------|----------------|
| **Talk to Your Data** | Ask in any language → precise SQL & answers | Slash the SQL learning curve﻿ |
| **GenBI Insights** | AI-written summaries, charts & reports | Decision-ready context in one click﻿ |
| **Semantic Layer** | MDL models encode schema, metrics, joins | Keeps LLM outputs accurate & governed﻿ |
| **Embed via API**  | Generate queries & charts inside your apps ([API Docs](https://wrenai.readme.io/reference/cloud-getting-started)) | Build custom agents, SaaS features, chatbots﻿ ([Streamlit Live Demo](https://huggingface.co/spaces/getWrenAI/wrenai-cloud-api-demo)) |

🤩 [Learn more about GenBI](https://getwren.ai/genbi?utm_source=github&utm_medium=content&utm_campaign=readme)

## 🚀 Getting Started

Using Wren AI is super simple, you can set it up within 3 minutes, and start to interact with your data!

<p align="center">
  <img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/6555f539-9ef2-485d-9135-0071741fda96" />
</p>

- Visit our [Install in your local environment](http://docs.getwren.ai/oss/installation?utm_source=github&utm_medium=content&utm_campaign=readme).
- Visit the [Usage Guides](https://docs.getwren.ai/oss/guide/connect/overview?utm_source=github&utm_medium=content&utm_campaign=readme) to learn more about how to use Wren AI.
- Or just start with [Wren AI Cloud](https://getwren.ai/?utm_source=github&utm_medium=content&utm_campaign=readme) our Managed Cloud Service. ([OSS vs. Commercial Plans](https://docs.getwren.ai/oss/overview/cloud_vs_self_host)).

## 🏗️ Architecture

<p align="center">
  <img width="1011" height="682" alt="wrenai-architecture" src="https://github.com/user-attachments/assets/e99b999f-9912-4fa7-921a-9c86b6b83354" />
</p>

👉 [Learn more about our Design](https://getwren.ai/post/how-we-design-our-semantic-engine-for-llms-the-backbone-of-the-semantic-layer-for-llm-architecture?utm_source=github&utm_medium=content&utm_campaign=readme)



## 🔌 Fontes de Dados 🗃

Você pode escolher a melhor nuvem para carregar os seus dados

    🏹 Athena (Trino)

    🔴 Redshift

    📊 BigQuery

    🦆 DuckDB

    🐘 PostgreSQL

    🐬 MySQL

    💼 Microsoft SQL Server

    🏠 ClickHouse

    🏛 Oracle

    ⚡️ Trino

    ❄️ Snowflake



## 🤖 Modelos LLM 🧠

Wren AI suporta integração com vários Modelos de Linguagem de Grande Escala (LLMs), incluindo mas não limitado a:

    🎯 OpenAI Models

    ☁️ Azure OpenAI Models

    🔍 DeepSeek Models

    🤖 Google AI Studio – Gemini Models

    🔺 Vertex AI Models (Gemini + Anthropic)

    🪨 Bedrock Models

    👥 Anthropic API Models

    ⚡️ Groq Models

    🐑 Ollama Models

    🏢 Databricks Models

[Confira exemplos de configuração aqui! 📝](https://github.com/Canner/WrenAI/tree/main/wren-ai-service/docs/config_examples)

> [!WARNING]
> O desempenho do Wren AI depende significativamente das capacidades do LLM que você escolher. Recomendamos fortemente usar o modelo mais poderoso disponível para resultados otimais. Usar modelos menos capazes pode levar a desempenho reduzido, tempos de resposta mais lentos ou saídas imprecisas.

# 🧩 CESPUB-GenAI


Este módulo faz parte do projeto **CESPUB-GenAI**, com foco na integração do **WrenAI** e dos serviços complementares **wren-auth** e **nginx** para ambientes de produção.

## 🚀 Instalação

1. Instale o wren-launcher:

Para subir os containers base do WrenAI, execute o comando abaixo:

```bash
curl -L https://github.com/Canner/WrenAI/releases/latest/download/wren-launcher-linux.tar.gz | tar -xz && ./wren-launcher-linux
```
Após a instalação, adicione sua API_KEY e selecione o modelo gpt-4.1 quando solicitado.

2. Clone o repositório do projeto atual:

```bash
git clone https://github.com/s-c-ai/CESPUB-GenAI
cd CESPUB-GenAI/docker
```
3. Configure as variáveis de ambiente no diretório docker:

```.env
API_KEY=coloque_sua_chave_aqui
CLIENT_ID=coloque_seu_client_id_aqui
CLIENT_SECRET=coloque_seu_client_secret_aqui
```
 4. Inicie o docker compose sem acionar o build

```
docker compose -f ./docker-compose.yaml up -d
```

Este comando subirá todos os containers, sem fazer qualquer alteração nos containers já criados pelo wren-launcher.

> [!WARNING]
> Este repositório está atualizado de acordo com a versão 0.28.0 do repositório [Canner/WrenAI](https://github.com/Canner/WrenAI), portanto se encontra com alguns bugs na construção das imagens dos serviços por meio do docker-compose. A solução encontrada foi utilizar o wren-launcher para criar os containers. Para o desenvolvimento de novas features ou updates, é interessante aplicar as modificações sem fazer um novo build, somente parando os containers e subindo-os novamente. Caso seja necessário fazer alguma mudança muito relevante, evite refazer as imagens dos serviços que não sejam o wren-auth ou o nginx.

## Comando Úteis:

#### 🔍 Status dos Containers

- Verifique se todos os containers subiram corretamente por meio do comando
```
docker ps
```
E verifique a porta do localhost e a porta de destino.

#### 📊 Logs do Serviço

```
docker compose logs <nome do container> -f
```

#### ⏹️ Parar Containers

```
docker compose down
```

#### 🔄 Reconstruir e Subir

```
docker compose up -d --force-recreate nginx wren-auth
```


## 🎉 Contribuidores
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/kalatalo/">
        <img src="https://avatars.githubusercontent.com/u/46749957?v=4" width="100px;" alt="Luciano Kalatalo Profile Picture"/><br>
        <sub>
          <b>Luciano Kalatalo</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/richardwallan/">
        <img src="https://avatars.githubusercontent.com/u/70775844?v=4" width="100px;" alt="Richard Wallan Picture"/><br>
        <sub>
          <b>Richard Wallan</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/nor-mustafa/">
        <img src="https://avatars.githubusercontent.com/u/205325128?v=4" width="100px;" alt="Nor Mustafa Picture"/><br>
        <sub>
          <b>Nor Mustafa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/leticia-britors/">
        <img src="https://avatars.githubusercontent.com/u/212550788?v=4" width="100px;" alt="Letícia Brito Picture"/><br>
        <sub>
          <b>Letícia Brito</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/pedro-henrique-silva-sousa/">
        <img src="https://avatars.githubusercontent.com/u/212561738?v=4" width="100px;" alt="Pedro Henrique Picture"/><br>
        <sub>
          <b>Pedro Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">
  <a href="#top">⬆️ De volta ao topo</a>
</p>

<p align="center"> <em>Feito com ❤️ pela comunidade Wren AI</em> ✨ </p> 
 </picture> <h1 align="center">Wren AI - Agente GenBI de Código Aberto 🚀</h1> </a> </p><p align="center"> <a aria-label="Follow us on X" href="https://x.com/getwrenai"> <img alt="" src="https://img.shields.io/badge/-@getwrenai-blue?style=for-the-badge&logo=x&logoColor=white&labelColor=gray&logoWidth=20"> </a> <a aria-label="Releases" href="https://github.com/canner/WrenAI/releases"> <img alt="" src="https://img.shields.io/github/v/release/canner/WrenAI?logo=github&label=GitHub%20Release&color=blue&style=for-the-badge"> </a> <a aria-label="License" href="https://github.com/Canner/WrenAI/blob/main/LICENSE"> <img alt="" src="https://img.shields.io/github/license/canner/WrenAI?color=blue&style=for-the-badge"> </a> <a href="https://docs.getwren.ai"> <img src="https://img.shields.io/badge/docs-online-brightgreen?style=for-the-badge" alt="Docs"> </a> <a aria-label="Join the community on GitHub" href="https://discord.gg/5DvshJqG8Z"> <img alt="" src="https://img.shields.io/badge/-JOIN%20THE%20COMMUNITY-blue?style=for-the-badge&logo=discord&logoColor=white&labelColor=grey&logoWidth=20"> </a> <a aria-label="Canner" href="https://cannerdata.com/?utm_source=github&utm_medium=badge&utm_campaign=readme"> <img src="https://img.shields.io/badge/%F0%9F%A7%A1-Made%20by%20Canner-blue?style=for-the-badge"> </a> </p>

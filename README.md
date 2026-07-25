# Celebre Moments

Sistema para compartilhamento de fotos em eventos por meio de QR Code.

## Objetivo

O Celebre Moments permite que convidados enviem fotos diretamente para um álbum compartilhado utilizando apenas a câmera do celular e um navegador, sem necessidade de instalar aplicativos.

As imagens são armazenadas no Google Drive e registradas automaticamente em uma planilha Google para gerenciamento e futura moderação.

---

## Tecnologias

### Frontend

- HTML5
- CSS3
- JavaScript
- GitHub Pages

### Backend

- Google Apps Script
- Google Drive API
- Google Sheets

---

## Funcionalidades implementadas

- Validação de eventos
- Captura de fotos pela câmera
- Pré-visualização da imagem
- Inclusão de legenda
- Upload para o Google Drive
- Registro automático na planilha
- Sistema de logs
- Geração automática de FotoId

---

## Estrutura da planilha

### Eventos

Responsável pelo cadastro e configuração dos eventos.

### Fotos

Armazena todas as fotos enviadas pelos convidados.

### Logs

Registra eventos e erros do sistema.

---

## Fluxo do sistema

Convidado

↓

GitHub Pages

↓

Apps Script

↓

Validação do Evento

↓

Google Drive

↓

Planilha Google

↓

Confirmação do envio

---

## Funcionalidades planejadas

- Galeria do evento
- Aprovação de fotos
- Download das imagens
- QR Code automático
- Painel administrativo
- Estatísticas
- Curtidas
- Favoritos

---

## Status do projeto

Em desenvolvimento.
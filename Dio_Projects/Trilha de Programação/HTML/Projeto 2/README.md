# Projeto 2 - Site de Clínica Médica

## 📋 Sobre o Desafio

Este desafio tem como objetivo criar um site "quase" completo, com tudo o que foi visto no módulo.

### Temas Abordados
- ✅ Formulários
- ✅ Estruturação e formatação de texto
- ✅ Mídias
- ✅ Tabelas
- ✅ Outros recursos das aulas

---

## 🎯 Instruções Gerais

Você deve criar um site de uma **clínica médica** (você escolhe a especialidade).

### Menu de Navegação Obrigatório
1. Página Principal
2. Sobre a clínica
3. Horário de Atendimento
4. Contato

### Requisitos
- Utilizar **todos** os assuntos abordados nas aulas
- Seguir o padrão de estrutura definido
- Utilizar o arquivo `template.html` como base

---

## 🏗️ Estrutura das Páginas

Todas as páginas seguem um padrão pré-definido com a seguinte estrutura:

```
┌─────────────────────────────┐
│          MENU               │
├─────────────────────────────┤
│         HEADER              │
│        (Imagem)             │
├─────────────────────────────┤
│                             │
│         CONTENT             │
│      (Conteúdo da página)   │
│                             │
├─────────────────────────────┤
│         FOOTER              │
│   (Informações de contato)  │
└─────────────────────────────┘
```

**Componentes:**
- **Menu:** Navegação do site
- **Header:** Imagem da página
- **Content:** Conteúdo específico de cada página
- **Footer:** Informações de contato (padrão em todas as páginas)

---

## 📄 Detalhamento das Páginas

### 1️⃣ Página Principal

**Header:**
- Uma imagem

**Content:**
- Breve descrição sobre a clínica

**Componentes Padrão:**
- Menu
- Footer

---

### 2️⃣ Sobre a Clínica

**Header:**
- Uma imagem diferente

**Content:**
- Texto falando sobre a clínica

**Componentes Padrão:**
- Menu
- Footer

---

### 3️⃣ Horário de Atendimento

**Header:**
- Uma imagem diferente

**Content:**
- Pequeno texto sobre os serviços
- Tabela de horários e preços

**Tabela de Horários:**

| Serviços | Segunda a Sexta | Sábados | Feriados |
|----------|----------------|---------|----------|
| Clínica geral | 08h - 19h | 08h - 14h | 08h - 14h |
| Psicologia | 08h - 19h | 08h - 14h | 08h - 14h |
| Pediatria | 08h - 19h | 08h - 18h | - |
| Oftalmologia | 08h - 19h | 08h - 18h | - |

**Componentes Padrão:**
- Menu
- Footer

---

### 4️⃣ Contato

**Header:**
- Uma imagem diferente

**Content:**
- Telefones de contato (celular e whatsapp)
- Endereço completo da clínica
- Iframe com Google Maps (endereço da clínica)
- Formulário de contato

**Formulário de Contato:**
- **Nome** - `type="text"`
- **E-mail** - `type="email"`
- **Assunto** - `type="text"`
- **Mensagem** - `textarea`
- **Botões:** Enviar e Limpar formulário

**Componentes Padrão:**
- Menu
- Footer

---

## 💡 Observações

- O template possui algumas cores apenas para melhor visualização
- Fique à vontade para alterar da melhor forma
- Como CSS não foi aprendido ainda, utilize o `template.html` como base
- Menu e Footer devem ser **idênticos** em todas as páginas

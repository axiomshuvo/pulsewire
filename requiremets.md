# 📰 Dragoon News — Project Requirements

> A responsive front-end web application built with **Next.js** that delivers real-time news articles across a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless experience across all devices with secure login via **Firebase Authentication**. Let's build this together! 😎

---

## 🌐 API Reference

**Base URL:** `https://openapi.programming-hero.com/api`

---

### Endpoints

#### 1. Get All News Categories

| Field        | Value                                                      |
| ------------ | ---------------------------------------------------------- |
| **URL**      | `/news/categories`                                         |
| **Full URL** | `https://openapi.programming-hero.com/api/news/categories` |
| **Method**   | `GET`                                                      |

**Description:** Retrieves a list of all available news categories.

---

#### 2. Get All News in a Category

| Field          | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| **URL Format** | `/news/category/{category_id}`                              |
| **Example**    | `https://openapi.programming-hero.com/api/news/category/01` |
| **Method**     | `GET`                                                       |

**Description:** Retrieves all news articles within a specified category.

**Path Parameter:**

- `category_id` _(string)_ — The unique ID of the category.

---

#### 3. Get News Detail by ID

| Field          | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| **URL Format** | `/news/{news_id}`                                                                |
| **Example**    | `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a` |
| **Method**     | `GET`                                                                            |

**Description:** Retrieves detailed information about a specific news article.

**Path Parameter:**

- `news_id` _(string)_ — The unique ID of the news article.

---

## 🎨 Layouts & Design

There will be **three layouts** for the project. Refer to the designs below to understand the layout structure.

# JavaScript Identifier Rules & Naming Conventions

## Basic Rules

| Rule | Valid Example | Invalid Example |
|------|--------------|-----------------|
| Must start with a letter, `_`, or `$` | `let name = "ok";` | `let 1stPlace = "no";` |
| Can contain letters, digits, `_`, or `$` after first char | `let item1 = "ok";` | `let my-name = "no";` |
| Cannot be a reserved keyword | `let Function = "ok";` | `let class = "no";` |
| Case-sensitive | `let Name` vs `let name` — different variables | — |
| No spaces allowed | `let user_name = "ok";` | `let my name = "no";` |
| No special characters (`@`, `#`, `!`, etc.) | `let $var = "ok";` | `let my@name = "no";` |
| Unicode letters allowed | `let café = "ok";` | — |
| Unicode escape sequences allowed | `let \u0041 = "ok";` | — |

## Naming Conventions

| Convention | Style | Use Case | Example |
|-----------|-------|----------|---------|
| **camelCase** | First word lowercase, subsequent words uppercase | Variables, functions | `userName`, `totalPrice`, `isLoggedIn` |
| **PascalCase** | Every word starts uppercase | Classes, constructors | `UserProfile`, `ShoppingCart` |
| **snake_case** | All lowercase, words separated by `_` | Variable names (older style) | `user_name`, `total_price` |
| **SCREAMING_SNAKE_CASE** | All uppercase, words separated by `_` | Constants | `MAX_SIZE`, `API_KEY`, `DATABASE_URL` |
| **Hungarian Notation** | Prefix indicates type | Older/legacy style | `strName`, `bActive`, `nCount`, `arrItems` |


# Microfrontend Starter Pack
## 🚀 Setup and Run

### Step 1: Clone the Repository

Clone the repo:

```bash
git clone https://github.com/vikashsingh853/microfrontend-starter-pack
cd microfrontend-starter-pack
```

### Step 2: Install Dependencies

Install dependencies using **pnpm** or **npm**:

- Using **pnpm**:
  ```bash
  pnpm install
  ```

- Using **npm**:
  ```bash
  npm install
  ```

### Step 3: Run the Applications

Run the **remote apps** and the **container app**:

1. **Start Remote 1**:
   ```bash
   cd remote1
   pnpm start  # Or: npm start
   ```

2. **Start Remote 2**:
   ```bash
   cd remote2
   pnpm start  # Or: npm start
   ```

3. **Start the Container App**:
   ```bash
   cd container
   pnpm start  # Or: npm start
   ```

### Step 4: Verify in Browser

Open the container app in your browser:

```
http://localhost:3000
```

The container will dynamically load components from **Remote 1** and **Remote 2**.

---

## 🔧 Quick Recap

1. **Clone the repo**.
2. **Install dependencies** (`pnpm install` or `npm install`).
3. **Run each app** (`remote1`, `remote2`, and `container`).
4. **Check the container app** at `http://localhost:3000`.
4. **Check the remote1 app** at `http://localhost:3001`.
4. **Check the remote2 app** at `http://localhost:3002`.


---

Let me know if you need any further adjustments! 🎉

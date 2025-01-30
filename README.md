# 📌 **Counter App **
A simple counter app built using **React** and **RxJS**, following the **MVI/MVVM architecture**. This app demonstrates a **reactive state management pattern** while handling user interactions.

---

## 📜 **Features**
✔️ **Increment (+) / Decrement (-) button** to increase or decrease the counter  
✔️ **Reset button** to set the counter back to 0  
✔️ **Auto-Increment mode** (increases counter every 1.1s when enabled)  
✔️ **Prevents count from going below 0 or above 98**  
✔️ **Follows the MVI/MVVM pattern using RxJS**  

---

## 🏗️ **Project Structure**
```
src/
 ├── intent/
 │   ├── CounterIntent.js       # Handles user events as reactive intents
 ├── model/
 │   ├── CounterModel.js        # Manages state and business logic
 ├── view/
 │   ├── CounterView.js         # React UI for counter
 │   ├── CounterView.css        # Styling for the UI
 ├── App.js                     # Root component
 ├── index.js                   # Entry point
README.md                       # Project documentation
```

---

## 🚀 **Installation & Setup**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/counter-app-rxjs.git
cd counter-app-rxjs
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the App**
```sh
npm start
```
The app will be available at **http://localhost:3000**

---

## 🛠️ **Technology Stack**
- **React** - UI library  
- **RxJS** - Reactive programming for state management  
- **JavaScript (ES6+)** - Core language  
- **CSS** - Styling  

---

## 📖 **How It Works**
This project follows the **MVI/MVVM** pattern:  

1️⃣ **Intent Layer (`CounterIntent.js`)**  
   - Captures user interactions like button clicks  

2️⃣ **Model Layer (`CounterModel.js`)**  
   - Maintains application state (counter value & auto-increment status)  
   - Uses RxJS `BehaviorSubject` for reactive state updates  

3️⃣ **View Layer (`CounterView.js`)**  
   - Renders the UI based on state updates  
   - Uses `useEffect` to subscribe to state changes  

---

## 📌 **To-Do / Future Improvements**
- ✅ Add tests for components and state logic  
- 🚀 Improve UI with better styling  
- 🌍 Deploy the app on Vercel or Netlify  

---

## 🤝 **Contributing**
Feel free to **fork** this repository, create a new branch, and submit a pull request!  
For any issues or feature requests, create an **Issue** on GitHub.  

---

## 📞 **Contact**
For any questions, reach out to:  
📧 Email: [jenaabhijeet16@gmail.com](mailto:jenaabhijeet16@gmail.com) 

🚀 **Happy Coding!** 🎉

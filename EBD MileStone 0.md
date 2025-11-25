

# FinQuest Kids

**Course:** Electronic Business Development (BINF 503)  
**Semester:** Winter 2025  
**Instructor:** Dr. Nourhan Hamdi  
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa

---

## 1. Team Members

_List all team members (5-6 students) below._

| Name             | Student ID | Tutorial Group | GitHub Username  |
| :--------------- | :--------- | :------------- | :--------------  |
| [Jana Kassem]    | [13001189] | [T3]           | [@Jana-kassemm]  |
| [Miriam Ramy]    | [13007122] | [T3]           | [@miriam-Ramy]   |
| [Nada Khaled]    | [13001493] | [T3]           | [@nadanagy2]     |
| [Mariam Ashraf]  | [13006964] | [T3]           | [@mariam-2006528]|
| [Habiba Ahmed]   | [13007391] | [T3]           | [@habibaahmedd8] |


---

## 2. Project Description

FinQuest Kids is a child-only financial learning app for kids aged 8-5.  
The app teaches children how to manage money through:

- A supervised digital wallet with three jars (Spend / Save / Donate)  
- A voucher store for controlled spending  
- Missions & challenges that reward good financial behaviour  
- A transaction history that shows how money is used over time  

The parent does not have a separate app. In the full concept, parents would approve funding and big actions via secure SMS links.

**Problem it solves:**

- Kids dont learn saving, budgeting and responsible spending in a practical way.  
- Parents struggle to supervise every transaction in a safe and simple manner.  
- There is no gamified, child-friendly FinTech tool that lets kids practice money decisions in a controlled environment.

FinQuest Kids offers a safe, gamified environment where kids can earn, spend, and track*virtual money while learning financial skills.

**Concept:**  
A MERN-based web app where a child can log in, see their wallet jars, spend from the Spend Jar on vouchers, complete missions to earn rewards, and review their full transaction history.


- **Link to Fin-Tech Course Document:** [Insert Link if applicable]

https://docs.google.com/presentation/d/1jqRNUohM3AdCm5pUbG_4tyRhX02EWUF2/edit?usp=sharing&ouid=104432463595655312443&rtpof=true&sd=true


## 3. Feature Breakdown

### 3.1 Full Scope

_List ALL potential features/user stories envisioned for the complete product (beyond just this course)._

-Child Registration & Parent Phone Link
  
-Parent-Funded Wallet (Through SMS Pay Link)

-Auto-Allowance (Child chooses allowance frequency)

-Saving Goals (With SMS Parent Approval for Withdrawals)

-Voucher Store (Main Spending Feature)

-Micro-Donations

Missions & Challenges (Child UI Only)

Quizzes (Financial Education)

Kid Dashboard (The Only Dashboard in the App)

Robo-Advisor (Premium Subscription)

Transaction History

Notifications


### 3.2 Selected MVP Use Cases (Course Scope)

_From the list above, identify the **5 or 6 specific use cases** you will implement for this course. Note: User Authentication is mandatory._

1.  User Authentication (Registration/Login)
2.  Wallet & Jars (Manage Spend / Save / Donate Balances).
3.  Voucher Store (Browse and Buy Vouchers).
4.  Missions  (how the child earns/behaves to get rewards.)
5.  Transaction History (View All Money Activities.)

---

## 4. Feature Assignments (Accountability)

_Assign one distinct use case from Section 3.2 to each team member. This member is responsible for the full-stack implementation of this feature._

| Team Member    | Assigned Use Case       | Brief Description of Responsibility                           |
| :----------    | :---------------------- | :-----------------------------------------------              |
| [Jana Kassem]  | User Authentication     | Register, Login, JWT handling, Password Hashing               |
| [Miriam Ramy]  | Wallet & Jars           | View and update Spend, Save, and Donate jar balances          |
| [Nada Khaled]  | Voucher Store           |Display available vouchers and handle child voucher purchases  |
| [Mariam Ashraf]| Missions                | Create, view, and complete missions with rewards              |
| [Habiba Ahmed] | Transaction History     | Display all wallet,voucher & mission-related actions          |
                                

---

## 5. Data Model (Initial Schemas)

_Define the initial Mongoose Schemas for your application’s main data models (User, Transaction, Account, etc.). You may use code blocks or pseudo-code._

### User Schema

```javascript
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true } ,
  Parent_phone : { type: Number, required: true }

}
{ timestamps: true },
);
```

### Wallet Schema

```javascript
const WalletSchema = new mongoose.Schema(
  {
    childId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    spendJar: { type: Number, default: 0 },
    saveJar: { type: Number, default: 0 },
    donateJar: { type: Number, default: 0 },
    IsActive: {type: Boolean, default: false}
  },
  { timestamps: true },
);


### Voucher Schema 

``javascript

const VoucherSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },     
    price: { type: Number, required: true },     
    merchant: { type: String, required: true }   
  },
  { timestamps: true },
);


### Mission

``javascript

const MissionSchema = new mongoose.Schema(
  {
    childId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true},
    rewardXP: { type: Number, required: true},
    rewardAmount: { type: Number, required: true},
    rewardJar: { type: String, required: true},
    status: { type: String, default: "pending" }
  },
 { timestamps: true },
);

 ### Transaction Schema

 ``javascript

 const TransactionSchema = new mongoose.Schema(
  {
    childId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, required: true},
    amount: { type: Number, required: true},
    description: { type: String, required: true},
    jar: { type: String, required: true}
  },
  { timestamps: true },
);